import {
  ServiceBusClient,
  ServiceBusMessage,
  ServiceBusReceivedMessage,
  ServiceBusReceiver,
  ServiceBusSender,
} from "@azure/service-bus";
import { Inject, Injectable } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { BaseType } from "../..";
import { AZURE_BUS_MESSAGING } from "../../../config";
import { AbstractEvent } from "../../application/AbstractEvent";
import { AbstractEventHandler } from "../../application/AbstractEventHandler";
import {
  EventConstructor,
  EventHandlerConstructor,
  IEventBus,
} from "../../application/eventBus/IEventBus";
import { IEventBusSubscriptionsManager } from "../../application/eventBus/IEventBusSubscriptionsManager";

@Injectable()
export class AzureEventBus implements IEventBus {
  private _serviceBusClient: ServiceBusClient;

  private _senders: Map<string, ServiceBusSender>;

  constructor(
    @Inject(BaseType.EVENT_BUS_SUBSCRIPTIONS_MANAGER)
    private _eventBusSubscriptionsManager: IEventBusSubscriptionsManager,

    private moduleRef: ModuleRef
  ) {
    this._serviceBusClient = new ServiceBusClient(
      AZURE_BUS_MESSAGING.CONNECTION_NAME
    );

    this._senders = new Map();
  }

  public async publish<TEventPayload>(
    event: AbstractEvent<TEventPayload>,
    topicOrQueueName: string
  ): Promise<void> {
    const senderExists = this._senders.has(topicOrQueueName);

    if (!senderExists) {
      const newSender = this._serviceBusClient.createSender(topicOrQueueName);

      this._senders.set(topicOrQueueName, newSender);
    }

    const sender = this._senders.get(topicOrQueueName);

    const message: ServiceBusMessage = {
      body: event.payload,
    };

    await sender.sendMessages(message);
  }

  public subscribe<
    TEventPayload,
    TEvent extends AbstractEvent<TEventPayload>,
    TEventHandler extends AbstractEventHandler<TEvent>
  >(
    EventType: EventConstructor<TEventPayload, TEvent>,
    topicOrQueueName: string,
    EventHandlerType: EventHandlerConstructor<
      TEventPayload,
      TEvent,
      TEventHandler
    >
  ): void {
    const eventSubscriptionExists =
      this._eventBusSubscriptionsManager.hasSubscriptionsForEvent(EventType);

    if (!eventSubscriptionExists) {
      let receiver: ServiceBusReceiver;

      try {
        receiver = this._serviceBusClient.createReceiver(topicOrQueueName, {
          receiveMode: "peekLock",
        });
      } catch (error) {
        return;
      }

      receiver.subscribe({
        processMessage: async (message: ServiceBusReceivedMessage) => {
          const eventSubscription =
            this._eventBusSubscriptionsManager.getHandlersForEvent(EventType);

          const eventPayload: TEventPayload = message.body;

          const event: TEvent = new EventType(eventPayload);

          const eventHandlers = await Promise.all(
            eventSubscription.map((Handler) =>
              this.moduleRef.resolve(Handler, undefined)
            )
          );

          await Promise.all(
            eventHandlers.map(async (eventHandler) => {
              try {
                await eventHandler.handle(event);
              } catch (error) {}
            })
          );
        },
        processError: (args) => this.error(args),
      });
    }

    this._eventBusSubscriptionsManager.addSubscription(
      EventType,
      EventHandlerType
    );
  }

  private async error(args) {}
}

import { Injectable } from '@nestjs/common';
import { AbstractEvent } from '../../application/AbstractEvent';
import { AbstractEventHandler } from '../../application/AbstractEventHandler';
import {
  EventConstructor,
  EventHandlerConstructor,
} from '../../application/eventBus/IEventBus';
import { IEventBusSubscriptionsManager } from '../../application/eventBus/IEventBusSubscriptionsManager';
import { arrayMutateRemove } from '../../utils/arrayMutateRemove';

@Injectable()
export class InMemoryEventBusSubscriptionsManager
  implements IEventBusSubscriptionsManager {
  private _handlers: Map<string, Array<EventHandlerConstructor<any, any, any>>>;

  constructor() {
    this._handlers = new Map();
  }

  public addSubscription<
    TEventPayload,
    TEvent extends AbstractEvent<TEventPayload>,
    TEventHandler extends AbstractEventHandler<TEvent>
  >(
    EventType: EventConstructor<TEventPayload, TEvent>,
    EventHandlerType: EventHandlerConstructor<
      TEventPayload,
      TEvent,
      TEventHandler
    >,
  ): void {
    const eventClassName = EventType.name;
    const eventHandlerClassName = EventHandlerType.name;

    const eventSubscriptionExists = this._handlers.has(eventClassName);

    if (!eventSubscriptionExists) {
      this._handlers.set(eventClassName, [EventHandlerType]);

      return;
    }

    const eventSubscription = this._handlers.get(eventClassName);

    if (
      eventSubscription.some(
        (Handler) => Handler.name === eventHandlerClassName,
      )
    ) {
      return;
    }

    eventSubscription.push(EventHandlerType);
  }

  public removeSubscription<
    TEventPayload,
    TEvent extends AbstractEvent<TEventPayload>,
    TEventHandler extends AbstractEventHandler<TEvent>
  >(
    EventType: EventConstructor<TEventPayload, TEvent>,
    EventHandlerType: EventHandlerConstructor<
      TEventPayload,
      TEvent,
      TEventHandler
    >,
  ): void {
    const eventClassName = EventType.name;
    const eventHandlerClassName = EventHandlerType.name;

    const eventSubscriptionExists = this._handlers.has(eventClassName);

    if (!eventSubscriptionExists) {
      return;
    }

    const eventSubscription = this._handlers.get(eventClassName);

    arrayMutateRemove(
      eventSubscription,
      (Handler) => Handler.name === eventHandlerClassName,
    );

    if (eventSubscription.length === 0) {
      this._handlers.delete(eventClassName);
    }
  }

  public hasSubscriptionsForEvent<
    TEventPayload,
    TEvent extends AbstractEvent<TEventPayload>
  >(EventType: EventConstructor<TEventPayload, TEvent>): boolean {
    const eventClassName = EventType.name;

    return this._handlers.has(eventClassName);
  }

  public getHandlersForEvent<
    TEventPayload,
    TEvent extends AbstractEvent<TEventPayload>
  >(
    EventType: EventConstructor<TEventPayload, TEvent>,
  ): Array<
    EventHandlerConstructor<TEventPayload, TEvent, AbstractEventHandler<TEvent>>
  > {
    const eventClassName = EventType.name;

    const eventSubscriptionExists = this._handlers.has(eventClassName);

    if (!eventSubscriptionExists) {
      return [];
    }

    return this._handlers.get(eventClassName);
  }
}

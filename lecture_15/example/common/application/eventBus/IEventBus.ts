import { AbstractEvent } from '../AbstractEvent';
import { AbstractEventHandler } from '../AbstractEventHandler';

export type EventConstructor<
  TEventPayload,
  TEvent extends AbstractEvent<any>
> = new (payload: TEventPayload) => TEvent;

export type EventHandlerConstructor<
  TEventPayload,
  TEvent extends AbstractEvent<TEventPayload>,
  TEventHandler extends AbstractEventHandler<TEvent>
> = new (...args: any[]) => TEventHandler;

export interface IEventBus {
  publish<TEventPayload>(
    event: AbstractEvent<TEventPayload>,
    topicOrQueueName: string,
  ): Promise<void>;

  subscribe<
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
    >,
  ): void;
}

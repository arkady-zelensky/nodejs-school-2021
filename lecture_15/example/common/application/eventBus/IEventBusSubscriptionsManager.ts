import { AbstractEvent } from '../AbstractEvent';
import { AbstractEventHandler } from '../AbstractEventHandler';
import { EventConstructor, EventHandlerConstructor } from './IEventBus';

export interface IEventBusSubscriptionsManager {
  addSubscription<
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
  ): void;

  removeSubscription<
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
  ): void;

  hasSubscriptionsForEvent<
    TEventPayload,
    TEvent extends AbstractEvent<TEventPayload>
  >(
    EventType: EventConstructor<TEventPayload, TEvent>,
  ): boolean;

  getHandlersForEvent<
    TEventPayload,
    TEvent extends AbstractEvent<TEventPayload>
  >(
    EventType: EventConstructor<TEventPayload, TEvent>,
  ): Array<
    EventHandlerConstructor<TEventPayload, TEvent, AbstractEventHandler<TEvent>>
  >;
}

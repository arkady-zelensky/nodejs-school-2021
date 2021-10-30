import { AbstractEvent } from "../../../common/application/AbstractEvent";

export interface DSOrderStatusProcessingEventPayload {
  orderId: string;
  status: string;
}

export class OrderStatusProcessingEvent extends AbstractEvent<DSOrderStatusProcessingEventPayload> {}

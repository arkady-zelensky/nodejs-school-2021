import { Inject, Injectable } from "@nestjs/common";
import { BaseType } from "./common";
import { IEventBus } from "./common/application/eventBus/IEventBus";
import { EVENT_BUS_QUEUE_NAME } from "./config";
import { UpdateOrderOnOrderStatusProcessing } from "./order/application/eventHandlers/UpdateOrderOnOrderStatusProcessing";
import { OrderStatusProcessingEvent } from "./order/application/events/OrderStatusProcessingEvent";

@Injectable()
export class AppService {
  constructor(@Inject(BaseType.EVENT_BUS) private eventBus: IEventBus) {}

  public healthCheck(): string {
    return "health_check_successful";
  }

  public registerEventHandlers() {
    this.eventBus.subscribe(
      OrderStatusProcessingEvent,
      EVENT_BUS_QUEUE_NAME.ORDER_STATUS,
      UpdateOrderOnOrderStatusProcessing
    );
  }
}

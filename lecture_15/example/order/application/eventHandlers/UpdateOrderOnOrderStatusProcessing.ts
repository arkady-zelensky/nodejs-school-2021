import { Inject, Injectable } from "@nestjs/common";
import { BaseType } from "../../../common/diTokens";
import { AbstractEventHandler } from "../../../common/application/AbstractEventHandler";
import { IGlobalDBContext } from "../../../common";
import { OrderStatusProcessingEvent } from "../events/OrderStatusProcessingEvent";
import { DSOrderUpdateData } from "../dataStructures/DSOrderUpdateData";

@Injectable()
export class UpdateOrderOnOrderStatusProcessing extends AbstractEventHandler<OrderStatusProcessingEvent> {
  constructor(
    @Inject(BaseType.GLOBAL_DB_CONTEXT)
    protected _dbContext: IGlobalDBContext
  ) {
    super();
  }

  protected async implementation(
    event: OrderStatusProcessingEvent
  ): Promise<void> {
    const { payload } = event;

    const { orderId, status } = payload;

    const order = await this._dbContext.orderRepository.findById(orderId);

    if (!order) {
      return;
    }

    const orderUpdateData: DSOrderUpdateData = {
      ...order,
      status,
    };

    await this._dbContext.orderRepository.updateOrder(orderUpdateData);
  }
}

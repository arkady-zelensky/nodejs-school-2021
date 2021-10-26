import { AbstractRepository, EntityRepository } from "typeorm";
import { IOrderRepository } from "../../application/boundaries/IOrderRepository";
import { DSOrderDTO } from "../../application/dataStructures/DSOrderDTO";
import { OrderEntity } from "../../order.entity";
import { OrderMapper } from "./OrderMapper";
import _ = require("lodash");

@EntityRepository(OrderEntity)
export class OrderRepository
  extends AbstractRepository<OrderEntity>
  implements IOrderRepository {
  public async listOrdersByIds(ids: number[]): Promise<DSOrderDTO[]> {
    const orderEntities: OrderEntity[] = await this.repository.findByIds(ids);

    return orderEntities.map((orderEntity) => OrderMapper.toDTO(orderEntity));
  }
}

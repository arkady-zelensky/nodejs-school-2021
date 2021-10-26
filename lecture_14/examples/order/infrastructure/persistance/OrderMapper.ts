import { DSOrderDTO } from "../../application/dataStructures/DSOrderDTO";
import { OrderEntity } from "../../order.entity";

export class OrderMapper {
  public static toDTO(orderEntity: OrderEntity): DSOrderDTO {
    return {
      id: orderEntity.id,
      orderConfirmedBy: orderEntity.orderConfirmedBy,
      orderConfirmedByTitle: orderEntity.orderConfirmedByTitle,
    };
  }

  static toEntity(orderDTO: DSOrderDTO): OrderEntity {
    return {
      id: orderDTO.id,
      orderConfirmedBy: orderDTO.orderConfirmedBy,
      orderConfirmedByTitle: orderDTO.orderConfirmedByTitle,
    } as OrderEntity;
  }
}

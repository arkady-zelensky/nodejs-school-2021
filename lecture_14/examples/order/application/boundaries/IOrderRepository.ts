import { DSOrderDTO } from "../dataStructures/DSOrderDTO";

export interface IOrderRepository {
  listOrdersByIds(ids: number[]): Promise<DSOrderDTO[]>;
}

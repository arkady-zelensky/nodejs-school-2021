import { IOrderRepository } from "../../order/application/boundaries/IOrderRepository";
import { IDBContext } from "./IDBContext";

export interface IGlobalDBContext extends IDBContext {
  orderRepository: IOrderRepository;
}

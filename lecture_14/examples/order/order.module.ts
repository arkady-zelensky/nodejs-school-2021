import { Module } from "@nestjs/common";
import { OrderController } from "./order.controller";
import { BaseType, UseCaseType } from "../common/diTokens";
import { GlobalDBContext } from "../common/infrastructure/persistance/GlobalDBContext";
import { CreateOrderUseCase } from "./application";

@Module({
  providers: [
    {
      provide: BaseType.GLOBAL_DB_CONTEXT,
      useClass: GlobalDBContext,
    },

    {
      provide: UseCaseType.CREATE_ORDER,
      useClass: CreateOrderUseCase,
    },
  ],
  controllers: [OrderController],
})
export class OrderModule {}

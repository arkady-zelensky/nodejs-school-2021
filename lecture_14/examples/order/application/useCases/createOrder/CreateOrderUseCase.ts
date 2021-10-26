import { Inject, Injectable, Scope } from "@nestjs/common";
import { BaseType } from "../../../../common/diTokens";
import { IGlobalDBContext } from "../../../../common/application/IGlobalDBContext";
import { ICreateOrderUseCase } from "./ICreateOrderUseCase";
import { DSCreateOrderUseCaseInput } from "./DSCreateOrderUseCaseInput";
import { DSCreateOrderUseCaseOutput } from "./DSCreateOrderUseCaseOutput";
import AbstractUseCase from "../../../../common/application/AbstractUseCase";

@Injectable({ scope: Scope.REQUEST })
export class CreateOrderUseCase
  extends AbstractUseCase<DSCreateOrderUseCaseInput, DSCreateOrderUseCaseOutput>
  implements ICreateOrderUseCase
{
  constructor(
    @Inject(BaseType.GLOBAL_DB_CONTEXT)
    protected _dbContext: IGlobalDBContext
  ) {
    super();
  }

  protected async implementation(
    inputData: DSCreateOrderUseCaseInput
  ): Promise<DSCreateOrderUseCaseOutput> {
    const { orders } = inputData;

    const productIds = _(orders)
      .filter(({ orderItems }) => !!orderItems)
      .map(({ orderItems }) => orderItems!.map(({ productId }) => productId))
      .flatten()
      .uniq()
      .value();

    const products = await this._dbContext.productRepository.listProductsByIds(
      productIds
    );

    // ...code here

    return result;
  }
}

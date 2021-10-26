import {
  Body,
  Controller,
  Inject,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from "@nestjs/swagger";
import { ApiException } from "../shared/api-exception.model";
import { AuthGuard } from "../shared/auth/guards/auth.guard";
import { UseCaseType } from "../common/diTokens";
import {
  DSCreateOrdersResponse,
  DSCreateOrdersRequest,
} from "./infrastructure";
import { ICreateOrderUseCase } from "../../application/useCases/createOrder/ICreateOrderUseCase";
import { DSCreateOrderUseCaseInput } from "../../application/useCases/createOrder/DSCreateOrderUseCaseInput";

@ApiBearerAuth()
@Controller("orders")
@ApiTags("orders")
@UseGuards(AuthGuard)
export class OrderController {
  constructor(
    @Inject(UseCaseType.CREATE_ORDER)
    private readonly createOrderUseCase: ICreateOrderUseCase
  ) {}

  @Post("/")
  @ApiInternalServerErrorResponse({ type: ApiException })
  @ApiForbiddenResponse({ type: ApiException })
  @ApiNotFoundResponse({ type: ApiException })
  @ApiOkResponse({ type: DSCreateOrdersResponse })
  async createOrders(
    @Body() payload: DSCreateOrdersRequest,
    @Request() req
  ): Promise<DSCreateOrdersResponse> {
    const inputData: DSCreateOrderUseCaseInput = {
      orders: payload.orders.map((order) => ({
        ...order,
        representativeId: req.user.id,
      })),
    };

    return await this.createOrderUseCase.execute(inputData);
  }
}

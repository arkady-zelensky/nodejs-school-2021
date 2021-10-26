import { getConnection, QueryRunner } from "typeorm";
import { IGlobalDBContext } from "../../application/IGlobalDBContext";
import { Injectable, Scope } from "@nestjs/common";
import { OrderRepository } from "../../../order/infrastructure/persistance/OrderRepository";

@Injectable({ scope: Scope.REQUEST })
export class GlobalDBContext implements IGlobalDBContext {
  private _queryRunner: QueryRunner;

  private _orderRepository: OrderRepository;

  public constructor() {
    this._queryRunner = getConnection().createQueryRunner();

    this.initRepositories();
  }

  private initRepositories() {
    this._orderRepository = this._queryRunner.manager.getCustomRepository(
      OrderRepository
    );
  }

  public get orderRepository(): OrderRepository {
    return this._orderRepository;
  }

  public startTransaction(): Promise<void> {
    return this._queryRunner.startTransaction();
  }

  public async commitTransaction(): Promise<void> {
    await this._queryRunner.commitTransaction();

    await this._queryRunner.release();
  }

  public async rollbackTransaction(): Promise<void> {
    await this._queryRunner.rollbackTransaction();

    await this._queryRunner.release();
  }
}

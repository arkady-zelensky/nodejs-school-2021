import { Entity, Column } from "typeorm";
import { BaseEntity } from "../shared/entities/base.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity("orders")
export class OrderEntity extends BaseEntity {
  @ApiProperty()
  @Column({ nullable: true })
  orderConfirmedBy: string | null;

  @ApiProperty()
  @Column({ nullable: true })
  orderConfirmedByTitle: string | null;
}

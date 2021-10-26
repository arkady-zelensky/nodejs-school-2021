import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  ValidateNested,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class DSCreateOrdersRequestOrder {
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(1, 100)
  orderConfirmedBy?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(1, 60)
  orderConfirmedByTitle?: string;
}

export class DSCreateOrdersRequest {
  @ApiProperty({ type: [DSCreateOrdersRequestOrder] })
  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => DSCreateOrdersRequestOrder)
  orders: DSCreateOrdersRequestOrder[];
}

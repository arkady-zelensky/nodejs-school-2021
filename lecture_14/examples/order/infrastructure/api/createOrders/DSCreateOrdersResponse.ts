import { ApiProperty } from "@nestjs/swagger";

class DSCreateOrdersResponseOrder {
  @ApiProperty()
  id: number;

  @ApiProperty()
  orderConfirmedBy: string | null;

  @ApiProperty()
  orderConfirmedByTitle: string | null;
}

export class DSCreateOrdersResponse {
  @ApiProperty({ type: [DSCreateOrdersResponseOrder] })
  orders: DSCreateOrdersResponseOrder[];
}

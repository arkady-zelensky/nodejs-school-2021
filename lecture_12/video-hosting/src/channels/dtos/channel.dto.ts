import { ApiProperty } from "@nestjs/swagger";

export type ChannelId = string;

export class ChannelDto {
  @ApiProperty({type: String})
  id: ChannelId;
  @ApiProperty({type: String})
  description: string;
  @ApiProperty({type: String})
  photoUrl: string;
  @ApiProperty({type: Date})
  createdAt: Date;
}

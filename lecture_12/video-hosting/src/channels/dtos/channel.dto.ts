export type ChannelId = string;

export class ChannelDto {
  id: ChannelId;
  description: string;
  photoUrl: string;
  createdAt: Date;
}

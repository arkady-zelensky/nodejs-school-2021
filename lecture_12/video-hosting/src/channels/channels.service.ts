import { Injectable} from '@nestjs/common';
import {ChannelsRepository} from "./channels.repository";
import {ChannelDto, ChannelId} from "./dtos/channel.dto";

@Injectable()
export class ChannelsService {
  constructor(
      private readonly repository: ChannelsRepository,
  ) {
  }

  public async getAll(): Promise<ChannelDto[]> {
    return this.repository.getAll();
  }

  public async getOne(id: ChannelId): Promise<ChannelDto> {
    return this.repository.getOne(id);
  }
}

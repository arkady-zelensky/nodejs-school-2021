import {Inject, Injectable} from '@nestjs/common';
import {ChannelsRepository} from "./channels.repository";
import {ChannelDto, ChannelId} from "./dtos/channel.dto";
import {sleep} from "../shared/utils";

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
    const dto = await this.repository.getOne(id);
    await sleep(100); // imitation of work
    return dto;
  }
}

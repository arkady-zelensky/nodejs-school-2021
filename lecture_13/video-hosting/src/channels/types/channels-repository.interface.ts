import { Repository } from "typeorm";
import {ChannelEntity} from "../channel.entity";
import {ChannelDto, ChannelId} from "../dtos/channel.dto";
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";

export const CHANNELS_REPOSITORY = 'CHANNELS_REPOSITORY';
export interface IChannelsRepository {
  getAll(): Promise<ChannelDto[]>;
  getOne(id: ChannelId, options?: FindOneOptions<ChannelEntity>): Promise<ChannelDto>;
}

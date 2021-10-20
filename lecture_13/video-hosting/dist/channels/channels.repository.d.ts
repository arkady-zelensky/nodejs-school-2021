import { Repository } from "typeorm";
import { ChannelEntity } from "./channel.entity";
import { IChannelsRepository } from "./types/channels-repository.interface";
import { ChannelDto, ChannelId } from "./dtos/channel.dto";
import { FindOneOptions } from "typeorm/find-options/FindOneOptions";
export declare class ChannelsRepository extends Repository<ChannelEntity> implements IChannelsRepository {
    getAll(): Promise<ChannelDto[]>;
    getOne(id: ChannelId, options?: FindOneOptions<ChannelEntity>): Promise<ChannelDto>;
}

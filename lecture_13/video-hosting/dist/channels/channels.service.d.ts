import { ChannelsRepository } from "./channels.repository";
import { ChannelDto, ChannelId } from "./dtos/channel.dto";
export declare class ChannelsService {
    private readonly repository;
    constructor(repository: ChannelsRepository);
    getAll(): Promise<ChannelDto[]>;
    getOne(id: ChannelId): Promise<ChannelDto>;
}

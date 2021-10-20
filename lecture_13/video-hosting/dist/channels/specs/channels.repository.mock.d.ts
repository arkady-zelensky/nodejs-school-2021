import { FindOneOptions } from "typeorm/find-options/FindOneOptions";
import { IChannelsRepository } from "../types/channels-repository.interface";
import { ChannelDto, ChannelId } from "../dtos/channel.dto";
import { ChannelEntity } from "../channel.entity";
import { RepositoryMock } from "../../shared/types/repository-mock.abstract";
export declare class ChannelsRepositoryMock extends RepositoryMock<ChannelDto> implements IChannelsRepository {
    getOne(id: ChannelId, options?: FindOneOptions<ChannelEntity>): Promise<ChannelDto>;
    createFake(): ChannelDto;
}

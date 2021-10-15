import {EntityRepository, Repository} from "typeorm";
import {ChannelEntity} from "./channel.entity";
import {IChannelsRepository} from "./types/channels-repository.interface";
import {ChannelMapper} from "./mappers/channel.mapper";
import {ChannelDto, ChannelId} from "./dtos/channel.dto";
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";
import {NotFoundException} from "@nestjs/common";

@EntityRepository(ChannelEntity)
export class ChannelsRepository extends Repository<ChannelEntity> implements IChannelsRepository {

  public async getAll(): Promise<ChannelDto[]> {
    const entities = await super.find();
    return entities.map(e => ChannelMapper.mapEntityToDTO(e));
  }

  public async getOne(id: ChannelId, options?: FindOneOptions<ChannelEntity>): Promise<ChannelDto> {
    const entity = await super.findOne(id, options);
    if (!entity) {
      throw new NotFoundException(`Channel not found`);
    }
    return ChannelMapper.mapEntityToDTO(entity);
  }
}

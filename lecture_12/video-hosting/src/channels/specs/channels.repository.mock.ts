import {EntityRepository, Repository} from "typeorm";
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";
import {NotFoundException} from "@nestjs/common";
import {IChannelsRepository} from "../types/channels-repository.interface";
import {ChannelDto, ChannelId} from "../dtos/channel.dto";
import {ChannelEntity} from "../channel.entity";

export class ChannelsRepositoryMock implements IChannelsRepository {

  private items = [
      {
        id: '123',
        description: '123',
        photoUrl: '123',
        createdAt: new Date(),
      } as ChannelDto,
    {
      id: '123',
      description: '123',
      photoUrl: '123',
      createdAt: new Date(),
    } as ChannelDto,
    {
      id: '123',
      description: '123',
      photoUrl: '123',
      createdAt: new Date(),
    } as ChannelDto,
  ];

  getAll(): Promise<ChannelDto[]> {
    return Promise.resolve(this.items);
  }

  getOne(id: ChannelId, options?: FindOneOptions<ChannelEntity>): Promise<ChannelDto> {
    return Promise.resolve({
      id,
      description: '123',
      photoUrl: '123',
      createdAt: new Date(),
    });
  }
}

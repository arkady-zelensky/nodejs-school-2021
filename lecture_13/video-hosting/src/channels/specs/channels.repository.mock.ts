import {FindOneOptions} from "typeorm/find-options/FindOneOptions";
import {IChannelsRepository} from "../types/channels-repository.interface";
import {ChannelDto, ChannelId} from "../dtos/channel.dto";
import {ChannelEntity} from "../channel.entity";
import * as faker from "faker";
import {RepositoryMock} from "../../shared/types/repository-mock.abstract";

export class ChannelsRepositoryMock extends RepositoryMock<ChannelDto> implements IChannelsRepository {

  getOne(id: ChannelId, options?: FindOneOptions<ChannelEntity>): Promise<ChannelDto> {
    return Promise.resolve(this.items.find(c => c.id === id));
  }

  createFake(): ChannelDto {
    const fake = new ChannelDto();
    fake.id = faker.datatype.uuid();
    fake.photoUrl = faker.image.imageUrl();
    fake.description = faker.lorem.sentences(2);
    fake.createdAt = faker.date.past();
    return fake;
  }
}

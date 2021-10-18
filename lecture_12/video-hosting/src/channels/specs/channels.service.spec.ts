import { Test, TestingModule } from '@nestjs/testing';
import {ChannelsService} from "../channels.service";
import {ChannelsRepository} from "../channels.repository";
import {ChannelsRepositoryMock} from "./channels.repository.mock";
import {ChannelDto} from "../dtos/channel.dto";
import {ChannelNotFound} from "../channel-not-found";

describe('ChannelsService', () => {
  let service: ChannelsService;
  let repository: ChannelsRepositoryMock; // (1)

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChannelsService,
        {
          provide: ChannelsRepository,
          useClass: ChannelsRepositoryMock,
        }
      ],
    }).compile();

    service = module.get(ChannelsService);
    repository = module.get(ChannelsRepository); // (1)
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // used real class
  it.skip('getOne: should return dto', async () => {
    const dto = await service.getOne('123');
    expect(dto).toBeDefined();
  });

  // override test method
  it('getOne: should return dto with overridden method', async () => {
    repository.getOne = jest.fn((id) => Promise.resolve({id} as ChannelDto));
    const dto = await service.getOne('123');

    expect(dto).toBeDefined();
    expect(dto.id).toEqual('123');
    expect(repository.getOne).toBeCalled();
  });

  // check exception
  it.skip('getOne: should not return dto ', async () => {
    repository.getOne = jest.fn((id) => {
      throw new Error('Channel not found');
    });
    const dto = await service.getOne('123');

    expect(dto).toBeDefined();
    expect(repository.getOne).toBeCalled();
  });

  // check correct exception
  it('getOne: should throw an error', async () => {
    repository.getOne = jest.fn((id) => {
      throw new Error('Channel not found');
    });
    await expect(service.getOne('123')).rejects.toThrow('Channel not found');
    // await expect(service.getOne('123')).rejects.toThrowError('Channel not found');
    // await expect(service.getOne('123')).rejects.toThrowError(ChannelNotFound);
  });


  it('getOne: should return fake dto', async () => {
    const input = repository.createFake();
    repository.putFake(input);
    repository.putFake(repository.createFake());
    repository.putFake(repository.createFake());
    const dto = await service.getOne(input.id);

    expect(dto).toBeDefined();
    expect(dto).toHaveProperty('id', input.id);
  });

});

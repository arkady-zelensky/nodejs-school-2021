import { Test, TestingModule } from '@nestjs/testing';
import {ChannelsService} from "../channels.service";
import {ChannelsRepository} from "../channels.repository";
import {ChannelDto} from "../dtos/channel.dto";
import {NotFoundException} from "@nestjs/common";
import {ChannelEntity} from "../channel.entity";
import {ChannelsRepositoryMock} from "./channels.repository.mock";

describe('ChannelsService', () => {
  let service: ChannelsService;
  let repository: ChannelsRepository; // (1)

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChannelsService, {
        provide: ChannelsRepository,
        // useValue: {
        //   getOne: () => ({} as ChannelDto), // (1)
        // },
        // useClass: ChannelsRepository, // (0, 5)
        useClass: ChannelsRepositoryMock, // (6)
      }],
    }).compile();

    service = module.get<ChannelsService>(ChannelsService);
    repository = module.get<ChannelsRepository>(ChannelsRepository); // (1)
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // used real class
  it('getOne: should return dto (0)', async () => {
    const dto = await service.getOne('123');
    expect(dto).toBeDefined();
  });

  // work example
  it('getOne: should return dto (1)', async () => {
    jest.spyOn(repository, 'getOne');
    const dto = await service.getOne('123');

    expect(dto).toBeDefined();
    expect(repository.getOne).toBeCalled();
  });

  // override test method
  it('getOne: should return dto (2)', async () => {
    repository.getOne = jest.fn((id) => Promise.resolve({id} as ChannelDto));
    const dto = await service.getOne('123');

    expect(dto).toBeDefined();
    expect(dto.id).toEqual('123');
    expect(repository.getOne).toBeCalled();
  });

  // check exception
  it('getOne: should return dto (3)', async () => {
    repository.getOne = jest.fn((id) => {
      throw new Error('Channel not found');
    });
    const dto = await service.getOne('123');

    expect(dto).toBeDefined();
    expect(repository.getOne).toBeCalled();
  });

  // check correct exception
  it('getOne: should return dto (4)', async () => {
    repository.getOne = jest.fn((id) => {
      throw new Error('Channel not found');
    });
    await expect(service.getOne('123')).rejects.toThrow('Channel not found');
    // await expect(service.getOne('123')).rejects.toThrowError('Channel not found');
    // await expect(service.getOne('123')).rejects.toThrowError(NotFoundException);
  });

  // testing repository with real class
  it('getOne: should return dto (5)', async () => {
    const fakeEntity = new ChannelEntity();
    fakeEntity.id = '123';
    fakeEntity.description = '123';
    fakeEntity.photo_url = '123';
    fakeEntity.created_at = new Date();
    repository.findOne = jest.fn((id: any) => Promise.resolve(fakeEntity));
    const dto = await service.getOne('123');

    expect(dto).toBeDefined();
    expect(dto).toMatchObject({
      id: fakeEntity.id,
      description: fakeEntity.description,
      photoUrl: fakeEntity.photo_url,
      createdAt: fakeEntity.created_at,
    });
  });


  it('getOne: should return dto (6)', async () => {
    const dto = await service.getOne('123');

    expect(dto).toBeDefined();
    expect(dto).toHaveProperty('id', '123');
  });

});

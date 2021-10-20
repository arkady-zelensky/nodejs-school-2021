import { Module } from '@nestjs/common';
import { ChannelsController } from './channels.controller';
import { ChannelsService } from './channels.service';
import {getConnectionToken, TypeOrmModule} from "@nestjs/typeorm";
import {ChannelsRepository} from "./channels.repository";
import {Connection} from "typeorm";
import {CHANNELS_REPOSITORY, IChannelsRepository} from "./types/channels-repository.interface";

@Module({
  controllers: [ChannelsController],
  providers: [
    ChannelsService,
    {
      // provide: CHANNELS_REPOSITORY,
      provide: ChannelsRepository,
      useFactory: (connection: Connection) => connection.getCustomRepository(ChannelsRepository),
      inject: [getConnectionToken()],
    }
  ]
})
export class ChannelsModule {}

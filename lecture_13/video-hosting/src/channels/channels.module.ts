import { Module } from '@nestjs/common';
import { ChannelsController } from './channels.controller';
import { ChannelsService } from './channels.service';
import {getConnectionToken} from "@nestjs/typeorm";
import {ChannelsRepository} from "./channels.repository";
import {Connection} from "typeorm";

@Module({
  controllers: [ChannelsController],
  providers: [
    ChannelsService,
    {
      provide: ChannelsRepository,
      useFactory: (connection: Connection) => connection.getCustomRepository(ChannelsRepository),
      inject: [getConnectionToken()],
    }
  ]
})
export class ChannelsModule {}

import {Controller, Get, Param} from '@nestjs/common';
import { ChannelsService } from "./channels.service";
import {ChannelDto, ChannelId} from "./dtos/channel.dto";
import {ApiResponse} from "@nestjs/swagger";

@Controller('channels')
export class ChannelsController {
  constructor(
      private readonly channelsService: ChannelsService
  ) {
  }

  @Get()
  @ApiResponse({type: ChannelDto, isArray: true})
  public async getAllChannels(): Promise<ChannelDto[]> {
    return this.channelsService.getAll();
  }

  // @Get(':id')
  // @ApiResponse({type: ChannelDto})
  // public async getOneChannel(@Param('id') id: ChannelId): Promise<ChannelDto> {
  //   return this.channelsService.getOne(id);
  // }
}

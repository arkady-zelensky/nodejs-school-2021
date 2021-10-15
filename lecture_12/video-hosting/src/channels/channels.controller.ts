import {Controller, Get, Param} from '@nestjs/common';
import { ChannelsService } from "./channels.service";

@Controller('channels')
export class ChannelsController {
  constructor(
      private readonly channelsService: ChannelsService
  ) {
  }

  @Get()
  public async getAllChannels() {
    return this.channelsService.getAll();
  }

  @Get(':id')
  public async getOneChannel(@Param('id') id) {
    return this.channelsService.getOne(id);
  }
}

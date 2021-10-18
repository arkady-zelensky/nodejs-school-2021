import {NotFoundException} from "@nestjs/common";

export class ChannelNotFound extends NotFoundException{
  constructor() {
    super('Channel not found');
  }
}

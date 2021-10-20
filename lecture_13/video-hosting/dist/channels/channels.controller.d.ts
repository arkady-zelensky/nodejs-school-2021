import { ChannelsService } from "./channels.service";
import { ChannelDto, ChannelId } from "./dtos/channel.dto";
export declare class ChannelsController {
    private readonly channelsService;
    constructor(channelsService: ChannelsService);
    getAllChannels(): Promise<ChannelDto[]>;
    getOneChannel(id: ChannelId): Promise<ChannelDto>;
}

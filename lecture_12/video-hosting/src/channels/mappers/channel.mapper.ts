import {ChannelEntity} from "../channel.entity";
import {ChannelDto} from "../dtos/channel.dto";

export class ChannelMapper {
  public static mapEntityToDTO(entity: ChannelEntity): ChannelDto {
    const dto = new ChannelDto();
    dto.id = entity.id;
    dto.description = entity.description;
    dto.photoUrl = entity.photo_url;
    dto.createdAt = entity.created_at;
    return dto;
  }
}

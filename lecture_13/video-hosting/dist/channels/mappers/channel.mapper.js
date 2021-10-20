"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelMapper = void 0;
const channel_dto_1 = require("../dtos/channel.dto");
class ChannelMapper {
    static mapEntityToDTO(entity) {
        const dto = new channel_dto_1.ChannelDto();
        dto.id = entity.id;
        dto.description = entity.description;
        dto.photoUrl = entity.photo_url;
        dto.createdAt = entity.created_at;
        return dto;
    }
}
exports.ChannelMapper = ChannelMapper;
//# sourceMappingURL=channel.mapper.js.map
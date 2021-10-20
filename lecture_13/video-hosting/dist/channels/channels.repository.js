"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelsRepository = void 0;
const typeorm_1 = require("typeorm");
const channel_entity_1 = require("./channel.entity");
const channel_mapper_1 = require("./mappers/channel.mapper");
const channel_not_found_1 = require("./channel-not-found");
let ChannelsRepository = class ChannelsRepository extends typeorm_1.Repository {
    async getAll() {
        const entities = await this.find();
        return entities.map(e => channel_mapper_1.ChannelMapper.mapEntityToDTO(e));
    }
    async getOne(id, options) {
        const entity = await this.findOne(id, options);
        if (!entity) {
            throw new channel_not_found_1.ChannelNotFound();
        }
        return channel_mapper_1.ChannelMapper.mapEntityToDTO(entity);
    }
};
ChannelsRepository = __decorate([
    (0, typeorm_1.EntityRepository)(channel_entity_1.ChannelEntity)
], ChannelsRepository);
exports.ChannelsRepository = ChannelsRepository;
//# sourceMappingURL=channels.repository.js.map
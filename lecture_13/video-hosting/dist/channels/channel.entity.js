"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelEntity = void 0;
const typeorm_1 = require("typeorm");
let ChannelEntity = class ChannelEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ChannelEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], ChannelEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 80, nullable: false }),
    __metadata("design:type", String)
], ChannelEntity.prototype, "photo_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: false, default: () => 'CURRENT_DATE' }),
    __metadata("design:type", Date)
], ChannelEntity.prototype, "created_at", void 0);
ChannelEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'channels' })
], ChannelEntity);
exports.ChannelEntity = ChannelEntity;
//# sourceMappingURL=channel.entity.js.map
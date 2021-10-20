"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelNotFound = void 0;
const common_1 = require("@nestjs/common");
class ChannelNotFound extends common_1.NotFoundException {
    constructor() {
        super('Channel not found');
    }
}
exports.ChannelNotFound = ChannelNotFound;
//# sourceMappingURL=channel-not-found.js.map
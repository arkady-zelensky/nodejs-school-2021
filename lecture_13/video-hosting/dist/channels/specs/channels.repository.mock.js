"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelsRepositoryMock = void 0;
const channel_dto_1 = require("../dtos/channel.dto");
const faker = require("faker");
const repository_mock_abstract_1 = require("../../shared/types/repository-mock.abstract");
class ChannelsRepositoryMock extends repository_mock_abstract_1.RepositoryMock {
    getOne(id, options) {
        return Promise.resolve(this.items.find(c => c.id === id));
    }
    createFake() {
        const fake = new channel_dto_1.ChannelDto();
        fake.id = faker.datatype.uuid();
        fake.photoUrl = faker.image.imageUrl();
        fake.description = faker.lorem.sentences(2);
        fake.createdAt = faker.date.past();
        return fake;
    }
}
exports.ChannelsRepositoryMock = ChannelsRepositoryMock;
//# sourceMappingURL=channels.repository.mock.js.map
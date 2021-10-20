"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryMock = void 0;
class RepositoryMock {
    constructor() {
        this.items = [];
    }
    putFake(dto) {
        this.items.push(dto);
    }
    getAll() {
        return Promise.resolve(this.items);
    }
}
exports.RepositoryMock = RepositoryMock;
//# sourceMappingURL=repository-mock.abstract.js.map
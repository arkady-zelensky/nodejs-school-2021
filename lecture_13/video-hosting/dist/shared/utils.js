"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = exports.shuffle = void 0;
function shuffle(arr) {
    return arr.sort(() => 0.5 - Math.random());
}
exports.shuffle = shuffle;
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
exports.sleep = sleep;
//# sourceMappingURL=utils.js.map
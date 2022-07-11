"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendWorld = void 0;
function appendWorld(value) {
    if (typeof value !== "string") {
        return {
            code: "TYPE_ERROR",
            message: "You tried to append 'World' to something that isn't a string",
            data: { str: value },
        };
    }
    return value + "World";
}
exports.appendWorld = appendWorld;

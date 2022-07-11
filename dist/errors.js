"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.isError = void 0;
function isError(a) {
    if (typeof a !== "object") {
        return false;
    }
    if (a.code === undefined &&
        a.message === undefined &&
        a.data === undefined) {
        return false;
    }
    const { code, message, data } = a;
    return (typeof code === "string" &&
        typeof message === "string" &&
        typeof data === "object");
}
exports.isError = isError;
function run(value, method) {
    if (isError(value)) {
        return value;
    }
    return method(value);
}
exports.run = run;

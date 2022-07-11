"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
const methods_1 = require("./methods");
const a = {};
const aWithWorld = (0, errors_1.run)(a, methods_1.appendWorld);
console.log((0, errors_1.isError)(aWithWorld));
const b = "Hello ";
const bWithWorld = (0, errors_1.run)(b, methods_1.appendWorld);
console.log((0, errors_1.isError)(bWithWorld));
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
async function connectDB(URI) {
    return await mongoose_1.default.connect(URI);
}
module.exports = connectDB;

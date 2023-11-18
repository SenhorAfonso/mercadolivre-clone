"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerNewUser = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
const registerNewUser = async (req, res) => {
    const user = req.body;
    console.log(user);
    const newUser = await userModel_1.default.create(req.body);
    res.send(newUser);
};
exports.registerNewUser = registerNewUser;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
/**
 * validar email usando validator
 * fazer o hash de senha
 */
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: [true, 'Need provide a user name'],
        maxLength: [55, 'Name should be less than 55 characters']
    },
    email: String,
    validate: {
        validator: validator_1.default.isEmail,
        message: 'Please provida a valid email'
    },
    password: {
        type: String,
        require: [true, 'Please provide a password'],
        minLength: 8,
    }
});
userSchema.pre('save', async function () {
    const salt = await bcryptjs_1.default.genSalt(10);
    this.password = await bcryptjs_1.default.hash(this.password, salt);
});
exports.default = mongoose_1.default.model('User', userSchema);

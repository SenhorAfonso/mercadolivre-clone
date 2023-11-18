"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const isEmail_1 = __importDefault(require("validator/lib/isEmail"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, 'Need to provide a user name'],
        maxlength: [55, 'Name should be less than 55 characters']
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: [true, 'Email already registered'],
        validate: {
            validator: isEmail_1.default,
            message: 'Please provide a valid email'
        },
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [6, 'Password should be at least 6 characters'],
    }
});
userSchema.pre('save', async function () {
    console.clear();
    console.log(this.password, this.name, this.email);
    if (typeof (this.password) !== 'string') {
        throw new Error('Please provide a password');
    }
    const salt = await bcryptjs_1.default.genSalt(10);
    this.password = await bcryptjs_1.default.hash(this.password, salt);
});
exports.default = mongoose_1.default.model('User', userSchema);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const auth_1 = require("../controller/auth");
const router = express_1.default.Router();
router.get('/auth', (req, res) => {
    res.render('auth');
});
router.post('/register', auth_1.registerNewUser);
router.post('/login', (req, res) => {
    res.render('login');
});
module.exports = router;

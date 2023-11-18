"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.clear();
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connect_1 = __importDefault(require("./db/connect"));
const auth_1 = __importDefault(require("./routes/auth"));
const ecommerce_1 = __importDefault(require("./routes/ecommerce"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const publicPath = path_1.default.resolve(__dirname, 'public');
console.log(publicPath);
app.use(express_1.default.static(publicPath));
app.use(express_1.default.json());
app.set('views', path_1.default.resolve(__dirname.replace('dist', 'src'), 'views'));
app.set('view engine', 'ejs');
app.use('/mercadoclone', auth_1.default);
app.use('/mercadoclone', ecommerce_1.default);
app.get('*', (req, res) => {
    res.send('404');
});
const start = async () => {
    try {
        dotenv_1.default.config();
        const mongoURI = process.env.MONGO_URI;
        if (mongoURI != null) {
            await (0, connect_1.default)(mongoURI)
                .then(() => {
                console.log('conectado');
            });
        }
    }
    catch (error) {
        console.log(error);
    }
};
start();
exports.default = app;

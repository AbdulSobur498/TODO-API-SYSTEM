"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const sequelize_1 = require("./config/sequelize");
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.port || 3000;
app.use(express_1.default.json());
app.use(index_1.default);
app.get('/', (req, res) => {
    console.log('Hello world');
});
const start = async () => {
    try {
        await sequelize_1.sequelize.sync({ force: false });
        console.log("Tables recreated with the new userId column!");
        app.listen(port, () => {
            console.log(`Server is running at port ${port}...`);
        });
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
start();

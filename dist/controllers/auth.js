"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const index_1 = require("../models/index");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config();
const registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const user = await index_1.User.findOne({ where: { email } });
    if (user) {
        res.status(400).send('User already exist');
    }
    ;
    const hashedPassword = await bcryptjs_1.default.hash(password, 10);
    const newUser = index_1.User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword
    });
    res.status(201).json('User already created');
};
exports.registerUser = registerUser;
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await index_1.User.findOne({ where: { email } });
    if (!user) {
        return res.status(401).json({ error: "Invalid email or password" });
    }
    const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid email or password" });
    }
    const token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return res.status(200).json({
        token,
        user: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        }
    });
};
exports.loginUser = loginUser;

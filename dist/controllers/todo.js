"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.updateTodoCom = exports.getTodo = exports.getAllTodo = exports.createTodo = void 0;
const express_validator_1 = require("express-validator");
const index_1 = require("../models/index");
const sequelize_1 = require("sequelize");
const createTodo = async (req, res) => {
    try {
        const result = (0, express_validator_1.validationResult)(req);
        if (!result.isEmpty())
            return res.status(401).send({ error: result.array() });
        const data = (0, express_validator_1.matchedData)(req);
        const newTodo = await index_1.Task.create(data);
        return res.status(201).send({ msg: 'Todo successfully added', newTodo });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createTodo = createTodo;
const getAllTodo = async (req, res) => {
    const { filter, value } = req.query;
    const whereClause = {};
    if (filter && value) {
        whereClause[filter] = {
            [sequelize_1.Op.like]: `%${value}%`
        };
    }
    try {
        const todos = await index_1.Task.findAll({ where: whereClause });
        return res.status(200).json(todos);
    }
    catch (error) {
        return res.status(500).json({ error: "Filtering failed. Check your column names." });
    }
};
exports.getAllTodo = getAllTodo;
const getTodo = async (req, res) => {
    try {
        const { findTodoIndex } = req;
        const findTodo = await index_1.Task.findOne({ where: { id: findTodoIndex } });
        if (!findTodoIndex)
            return res.status(404).send({ msg: 'Bad Request Invalid ID' });
        return res.status(200).send(findTodo);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getTodo = getTodo;
const updateTodoCom = async (req, res) => {
    try {
        const { body, findTodoIndex } = req;
        const updateTodo = await index_1.Task.update({ ...body }, { where: { id: findTodoIndex } });
        return res.send('updateTodo');
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updateTodoCom = updateTodoCom;
const updateTodo = async (req, res) => {
    try {
        const { body, findTodoIndex } = req;
        const findTodo = await index_1.Task.findOne({ where: { id: findTodoIndex } });
        if (!findTodo) {
            res.status(400).send('Todo not find');
        }
        const updateTodo = await index_1.Task.update({ ...findTodo, ...body }, { where: { id: findTodoIndex } });
        return res.send(updateTodo);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updateTodo = updateTodo;
const deleteTodo = async (req, res) => {
    try {
        const { findTodoIndex } = req;
        const deleteTodo = await index_1.Task.destroy({ where: { id: findTodoIndex } });
        return res.send({ msg: 'Todo successfully deleted' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deleteTodo = deleteTodo;

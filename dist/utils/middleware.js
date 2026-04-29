"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveTodoIndexById = void 0;
const constants_1 = require("../utils/constants");
const resolveTodoIndexById = (req, res, next) => {
    const { id } = req.params;
    const parsedId = Number(id);
    if (isNaN(parsedId))
        return res.status(400);
    const findTodoIndex = constants_1.todoList.findIndex((todo) => todo.id === parsedId);
    if (findTodoIndex === -1)
        return res.status(400);
    req.findTodoIndex = findTodoIndex;
    next();
};
exports.resolveTodoIndexById = resolveTodoIndexById;

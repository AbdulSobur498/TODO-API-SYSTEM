"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = require("../controllers/todo");
const express_validator_1 = require("express-validator");
const validationSchema_1 = require("../utils/validationSchema");
const middleware_1 = require("../utils/middleware");
const router = (0, express_1.Router)();
/*
-- Endpoint --
/api/todo --- Create a Todo
/api/todo --- Get all Todo
/api/todo/:id --- Get a single Todo
/api/todo --- Update a Todo
/api/delete --- Delete a Todo
*/
router.route('/api/todo').get(todo_1.getAllTodo).post((0, express_validator_1.checkSchema)(validationSchema_1.todoSchema), todo_1.createTodo);
router.route('/api/todo/:id').get(middleware_1.resolveTodoIndexById, todo_1.getTodo).put(middleware_1.resolveTodoIndexById, todo_1.updateTodoCom).patch(middleware_1.resolveTodoIndexById, todo_1.updateTodo).delete(middleware_1.resolveTodoIndexById, todo_1.deleteTodo);
exports.default = router;

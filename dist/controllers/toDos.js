"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToDo = void 0;
const toDos_1 = require("../models/toDos");
const TODOS = [{ id: '0', text: 'none' }];
const createToDo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new toDos_1.ToDo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).send(TODOS);
};
exports.createToDo = createToDo;

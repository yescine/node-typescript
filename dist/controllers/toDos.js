"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createToDo = void 0;
const toDos_1 = require("../models/toDos");
const TODOS = [{ id: '0', text: 'none' }];
const createToDo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new toDos_1.ToDo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).send(TODOS);
};
exports.createToDo = createToDo;
const getTodos = (req, res, next) => {
    res.send(TODOS);
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const id = req.params.id;
    const updateText = req.body.text;
    const idx = TODOS.findIndex(todo => todo.id === id);
    if (idx < 1)
        throw new Error('could not find To do id');
    TODOS[idx] = new toDos_1.ToDo(idx.toString(), updateText);
    res.send({ msg: 'updated', data: TODOS[idx] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const id = req.params.id;
    const idx = TODOS.findIndex(todo => todo.id === id);
    if (idx < 1)
        throw new Error('could not find To do id');
    TODOS.splice(idx, 1);
    res.send({ msg: 'todo Deleted' });
};
exports.deleteTodo = deleteTodo;

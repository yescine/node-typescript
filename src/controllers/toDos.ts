import {RequestHandler} from 'express';
import {ToDo} from '../models/toDos'

const TODOS:ToDo[] = [{id:'0',text:'none'}]

export const createToDo:RequestHandler = (req, res, next):void =>{
   const text = req.body.text as string;
   const newTodo = new ToDo(Math.random().toString(),text)

   TODOS.push(newTodo);

   res.status(201).send(TODOS)
}
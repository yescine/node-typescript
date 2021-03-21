import {RequestHandler} from 'express';
import {ToDo} from '../models/toDos'

const TODOS:ToDo[] = [{id:'0',text:'none'}]

export const createToDo:RequestHandler = (req, res, next):void =>{
   const text = req.body.text as string;
   const newTodo = new ToDo(Math.random().toString(),text)

   TODOS.push(newTodo);

   res.status(201).send(TODOS)
}

export const getTodos:RequestHandler = (req,res, next)=>{
   res.send(TODOS)
}

export const updateTodo:RequestHandler<{id:string}> = (req, res, next) =>{
   const id = req.params.id;
   const updateText = (req.body as ToDo).text
   const idx = TODOS.findIndex(todo=>todo.id===id)

   if(idx<1)throw new Error('could not find To do id')

   TODOS[idx] = new ToDo(idx.toString(),updateText)

   res.send({msg:'updated', data:TODOS[idx]})

}

export const deleteTodo:RequestHandler<{id:string}> = (req, res, next) =>{
   const id = req.params.id;
   const idx = TODOS.findIndex(todo=>todo.id===id)

   if(idx<1)throw new Error('could not find To do id')

   TODOS.splice(idx,1)

   res.send({msg:'todo Deleted'})



}
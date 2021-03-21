import express, {Request, Response,NextFunction} from 'express';
import {json} from 'body-parser'
import toDoRoutes from './routes/ToDos';

const app = express();
app.use(json())

app.use('/todos', toDoRoutes)

app.use((err:Error, req:Request,res:Response,next:NextFunction)=>{
   res.status(500).json({msg:err.message})
})

app.listen(4000);
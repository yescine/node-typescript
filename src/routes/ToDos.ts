import {Router} from 'express'
import {createToDo, deleteTodo, getTodos, updateTodo} from '../controllers/toDos'
const router = Router();

router.get('/',getTodos);
router.post('/',createToDo );
router.patch('/:id',updateTodo);
router.delete('/:id', deleteTodo);

export default router;
import { Router } from 'express';
import {createTodo,getAllTodo,getTodo,updateTodoCom, updateTodo,deleteTodo} from '../controllers/todo';
import { checkSchema } from 'express-validator';
import { todoSchema } from '../utils/validationSchema';
import { resolveTodoIndexById } from '../utils/middleware';


const router = Router();

/*
-- Endpoint --
/api/todo --- Create a Todo
/api/todo --- Get all Todo
/api/todo/:id --- Get a single Todo
/api/todo --- Update a Todo
/api/delete --- Delete a Todo
*/

router.route('/api/todo').get(getAllTodo).post(checkSchema(todoSchema), createTodo);
router.route('/api/todo/:id').get(resolveTodoIndexById, getTodo).put( resolveTodoIndexById, updateTodoCom).patch(resolveTodoIndexById, updateTodo).delete(resolveTodoIndexById, deleteTodo);

export default router;




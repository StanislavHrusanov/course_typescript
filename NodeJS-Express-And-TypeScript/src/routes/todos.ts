import Router from 'express';

import { createTodo, getAllTodos, editTodo, deleteTodo } from '../controllers/todos';

const router = Router();

router.post('/', createTodo);

router.get('/', getAllTodos);

router.patch('/:id', editTodo);

router.delete('/:id', deleteTodo);

export default router;
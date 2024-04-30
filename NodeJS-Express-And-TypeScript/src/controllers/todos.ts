import { RequestHandler } from 'express';

import { Todo } from '../models/todo';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as { text: string }).text;
    const newTodo = new Todo(Math.random().toString(), text);

    TODOS.push(newTodo);

    res.status(201).json({ message: 'Created!', createdTodo: newTodo });
};

export const getAllTodos: RequestHandler = (req, res, next) => {
    res.status(200).json(TODOS);
};

export const editTodo: RequestHandler<{ id: string }> = (req, res, next) => {
    const todoId = req.params.id;
    const newText = (req.body as { text: string }).text;
    const indexOfTodoForEdit = TODOS.findIndex(todo => todo.id === todoId);

    if (indexOfTodoForEdit < 0) {
        throw new Error('Not found!');
    }

    TODOS[indexOfTodoForEdit] = new Todo(TODOS[indexOfTodoForEdit].id, newText);

    res.status(200).json({ message: 'Edited!', editedTodo: TODOS[indexOfTodoForEdit] });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
    const todoId = req.params.id;
    const indexOfTodoForDelete = TODOS.findIndex(todo => todo.id === todoId);

    if (indexOfTodoForDelete < 0) {
        throw new Error('Not found!');
    }

    TODOS.splice(indexOfTodoForDelete, 1);

    res.status(200).json({ message: 'Deleted!' });
};
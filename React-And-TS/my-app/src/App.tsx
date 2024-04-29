import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(state => [
      ...state,
      { id: Math.random().toString(), text: text }
    ]);
  }

  const todoDeleteHandler = (id: string) => {
    setTodos(state => {
      return state.filter(todo => todo.id !== id);
    });
  }
  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;

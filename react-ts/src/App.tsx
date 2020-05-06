import React, { useState } from 'react';

import { Todo } from './todo.model';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const App: React.FC = () => {
  const [todos, setToDo] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setToDo(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text }
    ]);
  }

  const todoDeleteHandler = (id: string) => {
    setToDo(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    });
  }

  return (
    <div className="App">
      <h1>React App vs Tsc</h1>
      <NewTodo
        onAddTodo={todoAddHandler} />

      <TodoList
        todos={todos}
        onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;

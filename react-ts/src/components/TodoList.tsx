import React from 'react';

import { Todo } from '../todo.model';

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <li key={todo.id}>
          <span>{ todo.text }</span>
          <button onClick={() => props.onDeleteTodo(todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  )
};

export default TodoList;

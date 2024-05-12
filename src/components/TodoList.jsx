import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({ todos }) => { // Pass todos as a prop
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className="todo-item">
          <TodoCard {...todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

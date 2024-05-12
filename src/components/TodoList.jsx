import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({ todos,  ontoggle}) => { // Pass todos as a prop
  return (
    <ul className="todo-list">
      <h3 className='recent'>Recent Tasks:</h3>
      {todos.map(todo => (
        <li key={todo.id} className="todo-item">
          <TodoCard onToggle={ontoggle} {...todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

import React from 'react';

 const TodoList = () => {
  let todos = [
    {
      id: 1,
      title: 'Todo 1',
      description: 'This is the first todo',
      completed: false
    },
    {
      id: 2,
      title: 'Todo 2',
      description: 'This is the second todo',
      completed: true
    },
    {
      id: 3,
      title: 'Todo 3',
      description: 'This is the third todo',
      completed: false
    }
  ];
    return (
      <div>
        TodoList
      </div>
    )
}
export default TodoList;
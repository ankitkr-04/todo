import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  return (
    <main>
      <TodoInput onAddTodo={addTodo} /> 
      <TodoList todos={todos} />       
    </main>
  );
}

export default App;

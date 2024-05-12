import React, { useState } from "react";

const TodoInput = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [nextId, setNextId] = useState(1); // Start IDs from 1

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todoTitle, todoDescription);
    if (todoTitle.trim() !== "") {
      onAddTodo({
        id: nextId,
        title: todoTitle,
        description: todoDescription,
        completed: false,
      });
      setTodoTitle("");
      setTodoDescription("");
      setNextId(nextId + 1);

    }
  };

  return (
    <div className="todo-app">
      <form onSubmit={handleSubmit} className="header">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            className="input-field"
            type="text"
            placeholder="Enter todo title"
            required
          />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={todoDescription}
            onChange={(e) => setTodoDescription(e.target.value)}
            className="input-field"
            placeholder="Enter todo description"
            rows={4}
          />
        </div>

        <button type="submit" className="add">Add Todo</button>
      </form>
    </div>
  );
}
export default TodoInput;

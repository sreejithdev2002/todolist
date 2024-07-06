import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ onSubmit, onCancel, currentTodo }) => {
  const [title, setTitle] = useState(currentTodo ? currentTodo.title : "");
  const [description, setDescription] = useState(
    currentTodo ? currentTodo.description : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title, description);
  };

  return (
    <div className="todoForm">
      <form onSubmit={handleSubmit}>
        <h2>{currentTodo ? "Edit" : "Add"} To-Do</h2>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">{currentTodo ? "Update" : "Add"} To-Do</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default TodoForm;

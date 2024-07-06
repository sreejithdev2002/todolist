import React, { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const addTodo = (title, description) => {
    setTodos([...todos, { id: Date.now(), title, description, completed: false }]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
  };

  const editTodo = (todo) => {
    setCurrentTodo(todo);
    setIsEditing(true);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className='app'>
      <h1>To-Do List</h1>
      {!isAdding && (
        <button onClick={() => setIsAdding(true)}>Add To-Do</button>
      )}
      {isAdding && (
        <TodoForm
          onSubmit={(title, description) => {
            addTodo(title, description);
            setIsAdding(false);
          }}
          onCancel={() => setIsAdding(false)}
        />
      )}
      {isEditing && (
        <TodoForm
          currentTodo={currentTodo}
          onSubmit={(title, description) => {
            updateTodo(currentTodo.id, { ...currentTodo, title, description });
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      )}
      <TodoList todos={todos} onEdit={editTodo} onToggle={toggleTodo} onRemove={removeTodo} />
    </div>
  );
};

export default App;

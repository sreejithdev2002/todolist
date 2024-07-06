import React from "react";

const TodoList = ({ todos, onEdit, onToggle, onRemove }) => {

    if(todos.length === 0){
        return(
            <div className="notodos">
                <p>No Todos</p>
            </div>
        )
    }
  return (
    <div className="todolistDiv">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="todolistLeft">
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
              <p>Status: <span className={todo.completed ? "Completedcss" : "NotCompletedcss"}>{todo.completed ? "Completed" : "Not Completed"}</span></p>
            </div>
            <div className="todolistRight">
              <button onClick={() => onEdit(todo)}>Edit</button>
              <button onClick={() => onToggle(todo.id)}>
                {todo.completed ? "Not Completed" : "Completed"}
              </button>
              <button onClick={() => onRemove(todo.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

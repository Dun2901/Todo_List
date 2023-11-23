import React from "react";
import "./Todo.css";

const Todo = (props) => {
  const { todos, removeTodo } = props;

  const handleDelete = (index) => {
    removeTodo(index);
  };

  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <ul class="todoList" key={index}>
            <li>
              {todo}
              <span className="icon" onClick={() => handleDelete(index)}>
                X
              </span>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Todo;

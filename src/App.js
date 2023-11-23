import React, { useState } from "react";
import { BsCalendar2Plus } from "react-icons/bs";
import "./components/Todo";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleOnChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleEventClick = () => {
    if (!inputValue) {
      alert("Empty input");
      return;
    }
    setTodos((item) => [...item, inputValue]);
    setInputValue("");
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const removeAllTodos = () => {
    setTodos([]);
  };

  return (
    <div className="wrapper">
      <header>Todo App</header>
      <div class="inputField">
        <input
          type="text"
          value={inputValue}
          placeholder="Add your new todo"
          onChange={(event) => handleOnChangeInput(event)}
        />
        <button onClick={(event) => handleEventClick(event)}>
          <BsCalendar2Plus />
        </button>
      </div>

      <Todo todos={todos} removeTodo={removeTodo} />

      <div class="footer">
        <span>You have {todos.length} pending tasks</span>
        <button onClick={() => removeAllTodos()}>Clear All</button>
      </div>
    </div>
  );
}

export default App;

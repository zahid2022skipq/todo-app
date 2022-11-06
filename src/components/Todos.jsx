import React, { useState } from "react";
import "./todos.css";
import Todo from "./Todo";
let todoC = [];
const Todos = () => {
  const [todo, setTodo] = useState(todoC);
  const [value, setValue] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    todoC.push(value);
    setTodo(todoC);
    clear();
  };
  const handleDelete = (i) => {
    todoC.splice(i, 1);
    setTodo(todoC);
    clear();
  };
  const clear = () => {
    setValue("");
  };

  return (
    <div className="todo__">
      <div className="todo__input">
        <input
          type="text"
          placeholder="Add todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleAdd}> Add </button>
      </div>
      <div className="todo__todos">
        {todo.map((t, i) => (
          <div key={i} onClick={() => handleDelete(i)}>
            <Todo todo={t} todoValues={todoC} handleAdd={handleAdd} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;

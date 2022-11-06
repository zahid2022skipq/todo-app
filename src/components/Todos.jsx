import React, { useState } from "react";
import "./todos.css";
import Todo from "./Todo";

const Todos = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();

    setTodo([...todo, value]);
    clear();
  };
  const handleDelete = (index) => {
    const newTodo = todo.filter((elem, id) => id !== index);
    setTodo(newTodo);
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
        {todo.map((t, index) => (
          <div key={index} onClick={() => handleDelete(index)}>
            <Todo todo={t} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;

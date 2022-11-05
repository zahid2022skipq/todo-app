import React, { useState } from "react";
import "./todos.css";

const Todos = () => {
  const [todo, setTodo] = useState([]);
  return (
    <div className="todo__">
      <div className="todo__input">
        <input type="text" placeholder="Add todo" />
      </div>
    </div>
  );
};

export default Todos;

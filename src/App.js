import "./App.css";
import Todos from "../src/components/Todos";
function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1>Todo App</h1>
      </div>
      <div className="todo__container">
        <Todos />
      </div>
    </div>
  );
}

export default App;

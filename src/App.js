import "./styles.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false },
  ]);
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo setTodos={setTodos} todos={todos} />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;

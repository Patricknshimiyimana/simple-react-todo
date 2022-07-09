import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <form>
        <input type="text" name="addTodo" placeholder="new todo"></input>
        <button type="submit">Add todo</button>
      </form>
      <ul>
        <li>learn react</li>
        <li>work on tasks</li>
      </ul>
    </div>
  );
}

export default App;

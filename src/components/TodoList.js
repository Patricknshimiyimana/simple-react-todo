const TodoList = ({ setTodos, todos }) => {
  const handleDoneTodo = (todo) => {
    const updatedTodos = todos.map((item) =>
      item.id === todo.id
        ? {
            ...item,
            done: !item.done,
          }
        : item
    );
    setTodos(updatedTodos);
  };

  // if todos.length === 0
  if (!todos.length) {
    return <p>No todos left!</p>;
  }

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <div>
            <li
              onDoubleClick={() => {
                handleDoneTodo(todo);
              }}
              style={{
                cursor: "pointer",
                textDecoration: todo.done ? "line-through" : "",
                color: todo.done ? "gray" : "",
              }}
              key={todo.id}
            >
              {todo.text}
              <DeleteTodo todo={todo} setTodos={setTodos} />
            </li>
          </div>
        );
      })}
    </ul>
  );
};

const DeleteTodo = ({ todo, setTodos }) => {
  const handleDeleteTodo = () => {
    const confirmed = window.confirm("Do you want to delete this?");
    if (confirmed) {
      setTodos((prevTodos) => {
        return prevTodos.filter((t) => t.id !== todo.id);
      });
    }
  };

  return (
    <span
      onClick={handleDeleteTodo}
      role="button"
      style={{
        color: "red",
        fontWeight: "bold",
        marginLeft: 10,
        cursor: "pointer",
      }}
    >
      x
    </span>
  );
};

export default TodoList;

import { useRef } from "react";

const AddTodo = ({ setTodos, todos }) => {
  const inputRef = useRef();
    const handleAddTodo = (e) => {
        e.preventDefault();
        let todoTitle = document.getElementById('todo-input').value;
        let todo = {
          id: todos.length + 1,
          text: todoTitle,
          done: false
        }
        setTodos(prevTodos => {
          return prevTodos.concat(todo)
        })
        inputRef.current.value = ''
    }
  return (
    <form onSubmit={handleAddTodo}>
      <input ref={inputRef} type="text" name="addTodo" id="todo-input" placeholder="add new item"></input>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default AddTodo;

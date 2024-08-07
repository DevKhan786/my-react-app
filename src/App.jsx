import { useState, useEffect } from "react";
import TodoCard from "./components/TodoCard"; // Assuming TodoCard is in components

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos).todos);
    }
  }, []);

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodos() {
    if (todoValue.trim() === "") return;
    const newTodoList = [...todos, todoValue];
    setTodos(newTodoList);
    persistData(newTodoList);
    setTodoValue("");
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, i) => i !== index);
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  function handleEditTodo(index) {
    setTodoValue(todos[index]);
    handleDeleteTodo(index);
  }

  return (
    <div>
      <header>
        <input
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          placeholder="Enter Task"
        />
        <button onClick={handleAddTodos}>Add</button>
      </header>
      <ul className="main">
        {todos.map((todo, index) => (
          <TodoCard
            key={index}
            index={index}
            handleEditTodo={handleEditTodo}
            handleDeleteTodo={handleDeleteTodo}
          >
            <p>{todo}</p>
          </TodoCard>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;

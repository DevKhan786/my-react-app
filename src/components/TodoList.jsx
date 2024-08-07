import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList({ todos, handleDeleteTodo, handleEditTodo }) {
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard
            handleEditTodo={handleEditTodo}
            handleDeleteTodo={handleDeleteTodo}
            key={todoIndex}
            index={todoIndex}
          >
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}

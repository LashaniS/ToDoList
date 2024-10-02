import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

const TodoWrapper = () => {
  const [todos, setTodo] = useState([]);
  const addTodo = (todo) => {
    setTodo([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };
  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      {todo.map((todo, index) => (
        <Todo task={todo} key={index} />
      ))}
    </div>
  );
};

export default TodoWrapper;

import React from "react";
import { FaMinus, FaEdit } from "react-icons/fa";

export const TodoItem = ({
  todo,
  handleDeleteTodo,
  handleCompleteTodo,
  onShowEditModal,
}) => {

  return (
    <li>
      <span onClick={() => handleCompleteTodo(todo.id)}>
        <label
          className={`container-done ${todo.done ? "active" : ""}`}
        ></label>
      </span>
      <span style={{ width: '50%'}}>
        {todo.name}: {todo.description}
      </span>

        <button
          className="btn-edit"
          type="submit"
          onClick={() => onShowEditModal(todo)}
        >
          <FaEdit />
        </button>
        <button
          className="btn-delete"
          onClick={() => handleDeleteTodo(todo.id)}
        >
          <FaMinus />
        </button>
    </li>
  );
};

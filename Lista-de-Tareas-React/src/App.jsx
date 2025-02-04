import { useState } from "react";
import "./App.css";
import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";
import { createPortal } from "react-dom";
import { FaPlus } from "react-icons/fa";

function App() {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    pendingTodoList,
    doneTodoList,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  const [showModal, setShowModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("all");

  return (
    <>
      <div className="card-to-do">
        <h1>Lista de tareas</h1>
        <div className="counter-todos">
          <select
            name="filter"
            id="filter"
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="all">Todas</option>
            <option value="pending">Pendientes</option>
            <option value="done">Terminadas</option>
          </select>

          <button className="btn-edit" onClick={() => setShowModal(true)}>
            <FaPlus />
          </button>
        </div>

        <div className="add-todo">
          {showModal &&
            createPortal(
              <TodoAdd
                onClose={() => setShowModal(false)}
                handleNewTodo={handleNewTodo}
              />,
              document.body
            )}
        </div>

        {selectedStatus === "all" && (
          <TodoList
            todos={todos}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
          />
        )}

        {selectedStatus === "pending" && (
          <TodoList
            todos={pendingTodoList}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
          />
        )}

        {selectedStatus === "done" && (
          <TodoList
            todos={doneTodoList}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
          />
        )}
      </div>
    </>
  );
}

export default App;

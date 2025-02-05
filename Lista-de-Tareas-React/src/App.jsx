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
    pendingTodoList,
    doneTodoList,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  const [todoEditItem, setTodoEditItem] = useState(undefined);
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

          <button className="btn-edit" onClick={() => { setShowModal(true); setTodoEditItem(undefined);}}>
            <FaPlus />
          </button>
        </div>

        <div className="add-todo">
          {showModal &&
            createPortal(
              <TodoAdd
              item={todoEditItem}
                onClose={() => setShowModal(false)}
                handleNewTodo={handleNewTodo}
                handleUpdateTodo={handleUpdateTodo}
              />,
              document.body
            )}
        </div>

        {selectedStatus === "all" && (
          <TodoList
            todos={todos}
            handleNewTodo={handleNewTodo}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
            onShowEditModal={(editItem) => {setShowModal(true); setTodoEditItem(editItem);}}
          />
        )}

        {selectedStatus === "pending" && (
          <TodoList
            todos={pendingTodoList}
            handleNewTodo={handleNewTodo}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
            onShowEditModal={(editItem) => {setShowModal(true); setTodoEditItem(editItem);}}
          />
        )}

        {selectedStatus === "done" && (
          <TodoList
            todos={doneTodoList}
            handleNewTodo={handleNewTodo}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
            onShowEditModal={(editItem) => {setShowModal(true); setTodoEditItem(editItem);}}
          />
        )}
      </div>
    </>
  );
}

export default App;

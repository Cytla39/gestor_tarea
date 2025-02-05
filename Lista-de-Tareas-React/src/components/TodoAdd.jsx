import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ handleNewTodo, handleUpdateTodo, onClose, item }) => {
  const { showError, setShowError } = useState(false);
  const { description, name, onInputChange, onResetForm } = useForm({
    name: item === undefined ? "" : item.name,
    description: item === undefined ? "" : item.description,
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (description.length <= 1) {
      return;
    }

    if (item === undefined) {
      let newTodo = {
        id: new Date().getTime(),
        name: name,
        description: description,
        done: false,
      };

      handleNewTodo(newTodo);
    } else {
      handleUpdateTodo(item.id, name, description);
    }
    onClose();
    onResetForm();
  };

  return (
    <div className="modal">
      {item !== undefined ? <h3>Actualizar Tarea</h3> : <h3>Agregar Tarea</h3>}
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          className="input-add"
          name="name"
          value={name}
          onChange={onInputChange}
          placeholder="Nombre de la Tarea"
          required
        />

        <input
          type="text"
          className="input-add"
          name="description"
          value={description}
          onChange={onInputChange}
          placeholder="Descripción de la Tarea"
          required
        />
        {showError && <div>Debes agregar la descripcion de la tarea</div>}
        <div>
          <button className="btn-add" type="submit">
            Guardar
          </button>
          <button className="btn-add" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </form>
    </div>
  );
};

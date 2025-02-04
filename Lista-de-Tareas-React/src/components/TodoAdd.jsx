import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ handleNewTodo, onClose }) => {
	const {showError, setShowError} = useState(false);
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (description.length <= 1) {
		return;
	}

    let newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    handleNewTodo(newTodo);
	onClose();
    onResetForm();
  };

  return (
    <div className="modal">
      <h3>Agregar Tarea</h3>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          className="input-add"
          name="description"
          value={description}
          onChange={onInputChange}
          placeholder="¿Qué hay que hacer?"
		  required
        />
		{
			showError && (<div>
				Debes agregar la descripcion de la tarea
			</div>)
		}
        <div>
          <button className="btn-add" type="submit">
            Agregar
          </button>
          <button className="btn-add" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </form>
    </div>
  );
};

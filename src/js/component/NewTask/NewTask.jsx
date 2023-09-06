import React, { useState } from "react";
import "./newTask.css";

const NewTask = ({
  opcionSeleccionada,
  textoInsertado,
  handleOpcionChange,
  handleInputChange,
  handleButtonClick,
}) => {
  const limitarCaracteres = () => {
    const contenido = textoInsertado.trim();
    const palabras = contenido.split(/\s+/);

    if (palabras.length === 1) {
      return 15; // Establece el límite en 15 caracteres para una sola palabra
    } else {
      return 180; // Establece el límite en 180 caracteres para varias palabras
    }
  };

  const maxLength = limitarCaracteres();

  return (
    <div className="inputsContainer">
      {/* Comienzo de dropdown */}
      <div className="opcionesContainer">
        <select
          id="opciones"
          name="opciones"
          className="pe-3"
          value={opcionSeleccionada}
          onChange={handleOpcionChange}
        >
          <option value="empezamos">Select an option:</option>
          <option value="gratefulFor">Grateful for</option>
          <option value="priorities">Priorities</option>
          <option value="toDoList">To do list</option>
          <option value="notes">Notes</option>
        </select>
      </div>
      {/*Fin de dropdown */}
      {/* Comienzo del input donde escribimos la tarea*/}
      <div>
        <textarea
          className="taskContent mt-1"
          maxLength={maxLength}
          value={textoInsertado}
          onChange={handleInputChange}
          disabled={opcionSeleccionada === "empezamos"}
        ></textarea>
      </div>
      {/* Fin del input donde escribimos la tarea*/}
      {/* Comienzo del submit*/}
      <div className="submitButtonContainer">
        <input
          className="submitButton btn ms-3"
          type="submit"
          value="Add"
          onClick={handleButtonClick}
        ></input>
      </div>
      {/* Fin del submit*/}
    </div>
  );
};

export default NewTask;

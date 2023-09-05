import React, { useState } from "react";
import "./newTask.css";

const NewTask = ({
  opcionSeleccionada,
  textoInsertado,
  handleOpcionChange,
  handleInputChange,
  handleButtonClick,
}) => {
  return (
    <div className="inputsContainer">
      <div className="inputs">
        {/* Comienzo de dropdown */}
        <div className="mt-3 ms-4">
          <label htmlFor="opciones">Selecciona una opción:</label>
          <select
            id="opciones"
            name="opciones"
            className="pe-3"
            value={opcionSeleccionada}
            onChange={handleOpcionChange}
          >
            <option value="empezamos">Empezamos</option>
            <option value="gratefulFor">Grateful for</option>
            <option value="priorities">Priorities</option>
            <option value="toDoList">To do list</option>
            <option value="notes">Notes</option>
          </select>
        </div>
        {/*Fin de dropdown */}
        {/* Comienzo del input donde escribimos la tarea*/}
        <div>
          <input
            type="text"
            id="taskContent"
            className="mt-3"
            placeholder="¡Vuélcalo aquí!"
            maxLength="30"
            value={textoInsertado}
            onChange={handleInputChange}
          />
        </div>
        {/* Fin del input donde escribimos la tarea*/}
      </div>
      {/* Comienzo del submit*/}
      <div className="submitContainer">
        <input
          className="submitButton btn ms-3"
          type="submit"
          value="Agregar"
          onClick={handleButtonClick}
        ></input>
      </div>
      {/* Fin del submit*/}
    </div>
  );
};

export default NewTask;

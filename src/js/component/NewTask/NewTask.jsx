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
      {/* Comienzo de dropdown */}
      <div className="me-5">
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
          className="taskContent mt-3"
          maxLength={
            opcionSeleccionada === "gratefulFor"
              ? 120
              : opcionSeleccionada === "priorities"
              ? 20
              : opcionSeleccionada === "toDoList"
              ? 120
              : opcionSeleccionada === "notes"
              ? 200
              : null
          }
          value={textoInsertado}
          onChange={handleInputChange}
          disabled={opcionSeleccionada === "empezamos"}
        ></textarea>
      </div>
      {/* Fin del input donde escribimos la tarea*/}
      {/* Comienzo del submit*/}
      <div>
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

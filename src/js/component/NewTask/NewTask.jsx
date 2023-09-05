import React from "react";
import "./newTask.css";

const NewTask = () => {
  return (
    <div className="inputsContainer">
      <div className="inputs">
        {/* Comienzo de dropdown */}
        <div class="mt-3 ms-4">
          <label for="opciones">Selecciona una opción:</label>
          <select id="opciones" name="opciones" className="pe-3">
            <option value="opcion1">Grateful for</option>
            <option value="opcion2">Priorities</option>
            <option value="opcion3">To do list</option>
            <option value="opcion4">Notes</option>
          </select>
        </div>
        {/*Fin de dropdown */}
        <div>
          <textarea
            rows="2"
            cols="60"
            id="textareaContent"
            className="mt-3"
          ></textarea>
        </div>
      </div>
      <div class="submitContainer">
        <input
          className="submitButton btn ms-3"
          type="submit"
          value="Agregar"
        ></input>
      </div>
    </div>
  );
};

export default NewTask;

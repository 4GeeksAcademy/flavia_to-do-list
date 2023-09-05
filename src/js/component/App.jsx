import React, { useState } from "react";
import NewTask from "./NewTask";
import TaskList from "./TaskList";
import "./App.css";

//create your first component
export default function App() {
  return (
    <div className="bigContainer">
      <div className="littleContainer">
        <div className="inputsContainer">
          <div className="inputs">
            {/* Comienzo de dropdown */}
            <div class="mt-3 ms-4">
              <label for="opciones">Selecciona una opción:</label>
              <select id="opciones" name="opciones" className="pe-3">
                <option value="opcion1">Grateful for</option>
                <option value="opcion2">Priorities</option>
                <option value="opcion3">To do list</option>
                <option value="opcion3">Notes</option>
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
        <div className="listsContainer">
          <div className="gratefulAndPriorities">
            <div className="grateful">
              <div className="gratefulTitle">TODAY, I AM GRATEFUL FOR</div>
              <div className="gratefulContent"></div>
            </div>
            <div className="priorities">
              <div className="prioritiesTitle">PRIORITIES</div>
              <div className="prioritiesContent"></div>
            </div>
          </div>
          <div className="toDo">
            <div className="toDoTitle">TO DO LIST</div>
            <div className="toDoContent"></div>
          </div>
          <div className="notes">
            <div className="notesTitle">NOTES</div>
            <div className="notesContent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

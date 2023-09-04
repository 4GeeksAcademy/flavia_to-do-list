import React, { useState } from "react";
import NewTask from "./NewTask";
import TaskList from "./TaskList";
import "./App.css";

//create your first component
export default function App() {
  return (
    <div className="bigContainer">
      <div className="littleContainer">
        <div className="inputs">
          {/* Comienzo de dropdown */}
          <div class="btn-group dropend h-25 mt-3 ms-4">
            <button
              id="dropdownButton"
              type="button"
              class="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Elige tu sección
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Grateful for
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Today's priorities
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  To Do List
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Notes
                </a>
              </li>
            </ul>
          </div>
          {/*Fin de dropdown */}
          <textarea
            rows="3"
            cols="70"
            id="textareaContent"
            className="mt-3"
          ></textarea>
          <input
            id="submitButton"
            className="btn ms-3"
            type="submit"
            value="Submit"
          ></input>
        </div>
        <div className="grateful">
          <div className="gratefulTitle">TODAY, I AM GRATEFUL FOR</div>
          <div className="gratefulContent"></div>
        </div>
        <div className="priorities">
          <div className="prioritiesTitle">PRIORITIES</div>
          <div className="prioritiesContent"></div>
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
  );
}

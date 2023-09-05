import React, { useState } from "react";
import "./taskList.css";

const TaskList = ({ gratefulContent, handleDeleteItemClick }) => {
  return (
    <div className="listsContainer">
      <div className="gratefulAndPriorities">
        <div className="grateful">
          <div className="gratefulTitle">TODAY, I AM GRATEFUL FOR</div>
          <div className="gratefulContent">
            <ul className="fa-ul">
              {gratefulContent.map((item, index) => (
                <li key={index}>
                  <i className="fa-li fa-solid fa-heart"></i>
                  {item}
                  <button
                    className="deleteButton"
                    onClick={() => handleDeleteItemClick(index)}
                  >
                    <i className="fa-regular fa-trash-can"></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
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
  );
};

export default TaskList;

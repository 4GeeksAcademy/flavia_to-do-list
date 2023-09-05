import React, { useState } from "react";
import "./taskList.css";

const TaskList = ({
  gratefulContent,
  setGratefulContent,
  prioritiesContent,
  setPrioritiesContent,
  toDoContent,
  setToDoContent,
  notesContent,
  setNotesContent,
  handleDeleteItemClick,
}) => {
  return (
    <div className="listsContainer">
      <div className="gratefulAndPriorities">
        <div className="grateful">
          <div className="gratefulTitle">TODAY, I AM GRATEFUL FOR</div>
          <div className="gratefulContent">
            {gratefulContent.map((item, index) => (
              <div className="text" key={index}>
                {item}
                <button
                  className="deleteButton"
                  onClick={() =>
                    handleDeleteItemClick(
                      index,
                      gratefulContent,
                      setGratefulContent
                    )
                  }
                >
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="priorities">
          <div className="prioritiesTitle">PRIORITIES</div>
          <div className="prioritiesContent">
            <ul className="fa-ul">
              {prioritiesContent.map((item, index) => (
                <li className="text" key={index}>
                  <i className="fa-li fa-solid fa-heart"></i>
                  {item}
                  <button
                    className="deleteButton"
                    onClick={() =>
                      handleDeleteItemClick(
                        index,
                        prioritiesContent,
                        setPrioritiesContent
                      )
                    }
                  >
                    <i className="fa-regular fa-trash-can"></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="toDo">
        <div className="toDoTitle">TO DO LIST</div>
        <div className="toDoContent">
          <ul className="fa-ul">
            {toDoContent.map((item, index) => (
              <li className="text" key={index}>
                <i className="fa-li fa-solid fa-hammer"></i>
                {item}
                <button
                  className="deleteButton"
                  onClick={() =>
                    handleDeleteItemClick(index, toDoContent, setToDoContent)
                  }
                >
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="notes">
        <div className="notesTitle">NOTES</div>
        <div className="notesContent">
          <ul className="fa-ul" style={{ listStyleType: "none" }}>
            {notesContent.map((item, index) => (
              <li className="text" key={index}>
                {item}
                <button
                  className="deleteButton"
                  onClick={() =>
                    handleDeleteItemClick(index, notesContent, setNotesContent)
                  }
                >
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskList;

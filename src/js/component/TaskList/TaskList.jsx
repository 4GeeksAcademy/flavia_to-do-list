import React from "react";
import "./taskList.css";

const TaskList = () => {
  return (
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
  );
};

export default TaskList;

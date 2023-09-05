import React, { useState } from "react";
import NewTask from "./NewTask";
import TaskList from "./TaskList";
import "./App.css";

//create your first component
export default function App() {

  return (
    <div className="bigContainer">
      <div className="littleContainer">
        <NewTask />
        <TaskList />
      </div>
    </div>
  );
}

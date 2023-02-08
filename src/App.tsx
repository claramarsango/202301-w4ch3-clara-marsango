import React, { useState } from "react";
import "./App.css";
import TaskCreator from "./TaskCreator/TaskCreator";

function App() {
  const [currentTask, setNewTask] = useState("");

  const submitTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputValue = event.currentTarget.task.value;
    setNewTask(inputValue);
  };

  return (
    <div className="App">
      <header>TodoInput</header>
      <TaskCreator inputTask={submitTask} />
      <div>{currentTask}</div>
    </div>
  );
}

export default App;

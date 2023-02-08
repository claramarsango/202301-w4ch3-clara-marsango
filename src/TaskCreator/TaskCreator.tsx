import React from "react";
import "./TaskCreator.css";

function TaskCreator() {
  return (
    <form className="task-creator-container">
      <div className="input-container">
        <div className="input__left-block"></div>
        <input
          type="text"
          name="task"
          className="input__text-box"
          placeholder="New To Do"
        />
      </div>
      <button type="submit" className="task-creator__add-task">
        Add new task
      </button>
    </form>
  );
}

export default TaskCreator;

import React, { FC } from "react";
import "./TaskCreator.css";

interface TaskCreatorProps {
  inputTask: (event: React.FormEvent<HTMLFormElement>) => void;
}

const TaskCreator: FC<TaskCreatorProps> = ({ inputTask }) => {
  return (
    <form onSubmit={inputTask} className="task-creator-container">
      <div className="input-container">
        <div className="input__left-block"></div>
        <input
          data-testid="task-input"
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
};

export default TaskCreator;

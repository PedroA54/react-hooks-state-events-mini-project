import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} {...task} deleteTask={() => deleteTask(task)} />
      ))}
    </div>
  );
}

export default TaskList;
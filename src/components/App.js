import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  const onTaskFormSubmit = (newTask) => {
    addTask(newTask);
  };

  const filteredTasks =
    category === "All"
      ? tasks
      : tasks.filter((task) => task.category === category);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter setCategory={setCategory} categories={CATEGORIES} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES} />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { category, text };
    onTaskFormSubmit(newTask);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" value={text} onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select value={category} onChange={handleCategoryChange}>
          {categories.map((cat) => (
            cat !== "All" && (
              <option key={cat} value={cat}>
                {cat}
              </option>
            )
          ))}
        </select>
      </label>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
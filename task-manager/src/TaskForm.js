import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="නව ටාස්ක් එකක් ඇතුළු කරන්න"
      />
      <button type="submit">ටාස්ක් එකතු කරන්න</button>
    </form>
  );
}

export default TaskForm;
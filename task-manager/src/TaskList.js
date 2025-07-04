import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleComplete, deleteTask, editTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
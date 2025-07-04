import React from 'react';

function TaskItem({ task, toggleComplete, deleteTask, editTask }) {
  return (
    <div
      className={`flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg mb-2 shadow-sm hover:shadow-md transition duration-200 ${
        task.completed ? 'completed' : ''
      }`}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
      />
      <span className="flex-1 text-gray-800 text-lg">{task.text}</span>
      <span className="flex-1 text-gray-800 text-lg">
  {task.text} {task.dueDate && <span className="text-sm text-gray-500">({task.dueDate})</span>}
</span>
      <button
        onClick={() => editTask(task)}
        className="px-3 py-1 text-sm font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
      >
        Edit
      </button>
      <button
        onClick={() => deleteTask(task.id)}
        className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
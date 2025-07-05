import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (text, category = 'General') => {
  const newTask = {
    id: Date.now(),
    text,
    completed: false,
    category,
  };
  setTasks([...tasks, newTask]);
};

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Edit a task
  const editTask = (task) => {
    const newText = prompt('Edit task:', task.text);
    if (newText && newText.trim()) {
      setTasks(
        tasks.map((t) =>
          t.id === task.id ? { ...t, text: newText } : t
        )
      );
    }
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Task Manager
      </h1>
      <TaskForm addTask={addTask} />
      <div className="flex gap-3 mb-6 flex-wrap">
        <button
          onClick={() => setFilter('all')}
          className="px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
        >
          All
        </button>
        <button
          onClick={() => setFilter('completed')}
          className="px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
        >
          Completed
        </button>
        <button
          onClick={() => setFilter('pending')}
          className="px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
        >
          Pending
        </button>
      </div>
      <TaskList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
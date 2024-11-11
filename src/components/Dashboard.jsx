// src/components/Dashboard.jsx
import React from 'react';
import TaskSection from './TaskSection';
import AddTaskModal from './AddTaskModal';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { tasks } = useSelector((state) => state.tasks);

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Task Dashboard</h1>
      <div className="flex space-x-4 w-full">
        <TaskSection title="To Do" tasks={tasks.todo} section="todo" />
        <TaskSection title="In Progress" tasks={tasks.inProgress} section="inProgress" />
        <TaskSection title="Done" tasks={tasks.done} section="done" />
      </div>
      <AddTaskModal />
    </div>
  );
};

export default Dashboard;

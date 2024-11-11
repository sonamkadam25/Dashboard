import React from 'react';
import TaskSection from './TaskSection';
import { useSelector } from 'react-redux';
import '../assets/styles/TaskBoard.css';

const TaskBoard = () => {
  // Accessing tasks from Redux store
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="task-board">
      <TaskSection title="To Do" tasks={tasks.filter(task => task.status === 'todo')} />
      <TaskSection title="In Progress" tasks={tasks.filter(task => task.status === 'in-progress')} />
      <TaskSection title="Done" tasks={tasks.filter(task => task.status === 'done')} />
    </div>
  );
};

export default TaskBoard;

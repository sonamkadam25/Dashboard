import React from 'react';
import TaskCard from './TaskCard';
import '../assets/styles/TaskSection.css';

const TaskSection = ({ title, tasks }) => {
  return (
    <div className="task-section">
      <h3>{title}</h3>
      <div className="task-list">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskSection;

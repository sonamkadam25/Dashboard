import React from 'react';
import '../assets/styles/TaskCard.css';

const TaskCard = ({ task}) => {
  return (
    <div>
  
      <div className="task-meta">
        <span>Priority: {task.priority}</span>
        <span>Due: {task.dueDate}</span>
      </div>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      
    </div>

   
  );
};

export default TaskCard;

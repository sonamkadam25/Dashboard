import React, { useState } from 'react';
import TaskSection from '../components/TaskSection';
import AddTaskModal from '../components/AddTaskModal';

const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="dashboard">
      <button onClick={() => setIsModalOpen(true)}>+ Add Task</button>
      {isModalOpen && <AddTaskModal onClose={() => setIsModalOpen(false)} />}
      <div className="sections">
        <TaskSection status="To Do" />
        <TaskSection status="In Progress" />
        <TaskSection status="Done" />
      </div>
    </div>
  );
};

export default DashboardPage;

import React from 'react';
import TaskBoard from '../components/TaskBoard';
import '../App.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h2>Mobile App Project</h2>
      <TaskBoard />
    </div>
  );
};

export default HomePage;

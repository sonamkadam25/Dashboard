import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../taskSlice';

const AddTaskModal = ({ onClose }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName.trim()) {
      dispatch(addTask({
        id: Date.now(),
        name: taskName,
        description,
        priority,
        status: 'To Do',
      }));
      onClose();
    }
  };

  return (
    <div className="modal">
      <h3>Add New Task</h3>
      <input type="text" placeholder="Task Name" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button onClick={handleAddTask}>Add Task</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default AddTaskModal;



import React, { useState } from "react";
import linkIcon from '../images/link.png';
import PenIcon from '../images/pen.png';

const initialTasks = {
  todo: [
    { id: 1, title: "Brainstorming", description: "Brainstorming brings team member's diverse experience into play", priority: "Low", comments: 10, files: 0 },
    
  ],
  inProgress: [
    { id: 3, title: "Testing", description: "Final testing before deployment", priority: "Medium", comments: 5, files: 0 },
    { id: 2, title: "Development", description: "Working on the development of the project", priority: "High", comments: 4, files: 1 },
  ],
  done: [
    { id: 4, title: "Deployment", description: "Deploying the project to production", priority: "High", comments: 3, files: 2 },
    { id: 3, title: "Testing", description: "Final testing before deployment", priority: "Medium", comments: 5, files: 0 },
  ],
};

const ProjectContent = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [draggedTask, setDraggedTask] = useState(null);
  const [newTask, setNewTask] = useState({ title: "", description: "", priority: "Low" });
  const [priorityFilter, setPriorityFilter] = useState("");

//   const handleDragStart = (task, section) => {
//     setDraggedTask({ task, fromSection: section });
//   };

const handlePriorityFilterChange = (e) => {
    setPriorityFilter(e.target.value);
  };

  const handleDrop = (toSection) => {
    if (draggedTask) {
      const { task, fromSection } = draggedTask;
      setTasks((prevTasks) => {
        const updatedFromSection = prevTasks[fromSection].filter((t) => t.id !== task.id);
        const updatedToSection = [...prevTasks[toSection], task];
        return {
          ...prevTasks,
          [fromSection]: updatedFromSection,
          [toSection]: updatedToSection,
        };
      });
      setDraggedTask(null);
    }
  };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

  const addNewTask = (e) => {
    e.preventDefault();
    const taskId = Date.now();
    const task = { id: taskId, ...newTask, comments: 0, files: 0 };
    setTasks((prevTasks) => ({
      ...prevTasks,
      todo: [...prevTasks.todo, task],
    }));
    setNewTask({ title: "", description: "", priority: "Low" });
  };

  return (
    <div className="mt-15">
      <div className="flex items-center ml-6 pb-10">
        <h2 className="text-3xl ml-3 mt-3 font-semibold">Mobile App</h2>
        <div className="h-5 w-5 bg-blue-300 ml-5 mt-5 cursor-pointer">
          <img src={PenIcon} alt="Pen icon" />
        </div>
        <div className="h-5 w-5 bg-blue-300 ml-5 mt-5 cursor-pointer">
          <img src={linkIcon} alt="link icon" />
        </div>
      </div>

         <div className="ml-8 mt-5">
        <label htmlFor="priorityFilter" className="mr-2">Filter by Priority:</label>
        <select
        id="priorityFilter"
        value={priorityFilter}
        onChange={handlePriorityFilterChange}
        className="cursor-pointer p-2 border rounded bg-white"
        >
        <option value="">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
        </select>
        </div> 



      <div className="flex flex-grow p-6 space-x-6">
        {["todo", "inProgress", "done"].map((section) => (

               <div
                     key={section}
                     className="flex-1 px-4 bg-gray-200 rounded-lg"
                     onDragOver={(e) => e.preventDefault()}
                   >
                     <h2 className="text-lg font-semibold mb-4 px-4 py-2 capitalize">{section}</h2>
                     <div className="space-y-4">
                       {tasks[section]
                         .filter(task => !priorityFilter || task.priority === priorityFilter)
                     .map((task) => (
                           <div key={task.id}>
                             <TaskCard task={task} />
                           </div>
                         ))}
                     </div>
            {/* Add New Task Form under only "To Do" section */}
            {section === "todo" && (
              <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Add New Task</h3>
                <form onSubmit={addNewTask}>
                  <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium">Title:</label>
                    <input
                      type="text"
                      id="title"
                      value={newTask.title}
                      onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium">Description:</label>
                    <textarea
                      id="description"
                      value={newTask.description}
                      onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="priority" className="block text-sm font-medium">Priority:</label>
                    <select
                      id="priority"
                      value={newTask.priority}
                      onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                      className="w-full p-2 border rounded"
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                  <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Task</button>
                </form>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const TaskCard = ({ task }) => {
  const priorityColor = {
    Low: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    High: "bg-red-100 text-red-800",
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
      <div className="justify-between pb-2">
        <div className="flex justify-between pb-2">
          <span className={`px-2 py-1 text-xs font-medium rounded ${priorityColor[task.priority]}`}>
            {task.priority}
          </span>
          <div className="size-5 cursor-pointer">...</div>
        </div>
        <h3 className="text-md font-semibold">{task.title}</h3>
      </div>
      <p className="text-sm text-gray-600 mt-1">{task.description}</p>
      <div className="flex items-center justify-between mt-4 text-gray-500">
        <span>{task.comments} comments</span>
        <span>{task.files} files</span>
      </div>
    </div>
  );
};

export default ProjectContent;



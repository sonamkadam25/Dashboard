import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: 'Brainstorming', description: 'Discuss ideas', status: 'todo', priority: 'Low', dueDate: '2024-12-01' },
  { id: 2, title: 'Research', description: 'User research', status: 'in-progress', priority: 'High', dueDate: '2024-11-15' },
  { id: 3, title: 'Wireframes', description: 'Design wireframes', status: 'done', priority: 'Medium', dueDate: '2024-11-20' },
];

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    moveTask: (state, action) => {
      const { id, newStatus } = action.payload;
      const task = state.find(t => t.id === id);
      if (task) {
        task.status = newStatus;
      }
    },
  },
});

export const { moveTask } = taskSlice.actions;
export default taskSlice.reducer;
// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice'; // Import the task reducer

// Create a Redux store with the task reducer
const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store; // Export the Redux store as the default export

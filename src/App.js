// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProjectContent from './components/ProjectContent';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow ml-64">
        <Navbar />
        <main className="flex-grow p-4 mt-16">
          <ProjectContent />
        </main>
      </div>
    </div>
  );
}

export default App;



// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import { Provider } from 'react-redux'; // Import Redux Provider
// import store from './store'; // Import the Redux store

// const App = () => {
//   return (
//     <Provider store={store}> {/* Wrap your app with Redux Provider */}
//       <Router>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//         </Routes>
//       </Router>
//     </Provider>
//   );
// };

// export default App;

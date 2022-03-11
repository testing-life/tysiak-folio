import Homepage from './Pages/Homepage/Homepage.js';
import Project from './Pages/Project/Project.js';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/:projectName" element={<Project />}></Route>
    </Routes>
  );
}

export default App;

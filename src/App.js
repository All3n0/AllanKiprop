import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/contact';
import About from './components/about';
import Projects from './components/projects';
// Import other components if needed

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/projects' element={<Projects/>} />
      {/* Add more routes here if needed */}
    </Routes>
  );
}

export default App;

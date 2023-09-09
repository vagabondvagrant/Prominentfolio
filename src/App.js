import React from 'react';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { Contact } from './components/Contact';
import About from './components/About';
import TechStack from './components/TechStack';
import ProjectsK from './components/ProjectsK'; // Import the Work component

function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <ProjectsK/>
      <About/>
      <TechStack/>
      <Contact/>
      </div>
  );
}

export default App;

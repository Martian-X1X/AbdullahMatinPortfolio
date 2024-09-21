import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Description from './components/Description';
import Project from './components/Project';
import Skill from './components/Skills';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App bg-amber-100">
          <Navbar />
          <div className="pt-20">
            <Description />
            <Skill />
            <Project />
            <Experience />
            <AboutMe id="about"/> {/* Ensure id matches */}
            <Contact/>
          </div>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;

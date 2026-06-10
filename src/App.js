import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Description from './components/Description';
import Project from './components/Project';
import Skill from './components/Skills';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleDark = () => setIsDark(prev => !prev);

  return (
    <div className="App bg-surface min-h-screen transition-colors duration-300">
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <Description />
      <Skill />
      <Project />
      <Experience />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/project' Component={Project}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
      </Routes>
    </div>
  );
}

export default App;

import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact}/>
      </Routes>
    </div>
  )
}

export default App

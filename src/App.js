import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Social from './Components/Social';
import Experience from './Components/Experience';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Social/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Skills' element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

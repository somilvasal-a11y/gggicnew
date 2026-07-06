import React, { useState } from 'react';
// Import the Navbar component
import Navbar from './components/Navbar';
// Import page components
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Navbar Component */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* Render pages based on currentPage state */}
      {currentPage === 'home' && <Home />}
      {currentPage === 'about' && <About />}
      {currentPage === 'services' && <Services />}
      {currentPage === 'contact' && <Contact />}
    </div>   
  );
}

export default App;

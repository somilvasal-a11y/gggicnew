import React, { useState } from 'react';
// Import the Header component
import Header from './components/Header';
// Import the Footer component
import Footer from './components/Footer';
// Import page components
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Header Component */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* Render pages based on currentPage state */}
      {currentPage === 'home' && <Home />}
      {currentPage === 'about' && <About />}
      {currentPage === 'services' && <Services />}
      {currentPage === 'contact' && <Contact />}

      {/* Footer Component */}
      <Footer />
    </div>   
  );
}

export default App;

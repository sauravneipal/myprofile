import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

const App = () => {

 
  return (
    <>
  <Router >
  <div className="d-flex flex-column min-vh-100">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HeroSection />} />
       
        <Route path="/about" element={<AboutSection />} />
        <Route path="/projects" element={<ServicesSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <Footer/>
      </div>
    </Router>
    </>
  );
};

export default App;

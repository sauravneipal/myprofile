import React from 'react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Gallery from './components/Gallery';


const App = () => {

 
  return (
    <>
  <Router basename='/profile' >
  <div className="d-flex flex-column min-vh-100">
      <Navbar/>
      <Routes>
        <Route path="/" element={<AboutSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/gallery" element={<Gallery />} />     
        <Route path="/contact" element={<ContactSection/>}/>
      </Routes>
      <Footer/>
      </div>
    </Router>
    </>
  );
};

export default App;

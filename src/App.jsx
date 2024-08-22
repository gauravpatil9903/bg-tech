import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero.jsx';
import BrandLogo from './components/BrandLogo/BrandLogo.jsx';
import Services from './components/Services/Services.jsx';
import BlogsComp from './components/BlogsComp/BlogsComp.jsx';
import Footer from './components/Footer/Footer.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import DarkMode from './components/Navbar/DarkMode';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import RoboticsService from './components/Services/RoboticsService.jsx';
import IndustrialAutomation from './components/Services/IndustrialAutomation.jsx';
import ThreeDpriting from './components/Services/TDpriting.jsx';
import WebDev from './components/Services/WebDev.jsx';
import LaserCutting from './components/Services/LaserCutting.jsx';

// Import React Router components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      offset: 100,
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="overflow-x-hidden bg-white dark:bg-black duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          {/* Add more routes as needed */}
          <Route path='/services/robotics' element={<RoboticsService/>}/>
          <Route path='/services/automation' element={<IndustrialAutomation/>}/>
          <Route path='/services/threedprint' element={<ThreeDpriting/>}/>
          <Route path='/services/webdev' element={<WebDev/>}/>
          <Route path='/services/lasercutting' element={<LaserCutting/>}/>
        </Routes>
        <BrandLogo />
        <Testimonials />
        <BlogsComp />
        <Footer />
        <WhatsAppButton phoneNumber="+91 8080124607" message="Welcome to bg technology, How can we help you?" />
      </div>
    </Router>
  );
}

export default App;

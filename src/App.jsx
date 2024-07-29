import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero.jsx';
import BrandLogo from './components/BrandLogo/BrandLogo.jsx';
import Services from './components/Services/Services.jsx';
import BlogsComp from './components/BlogsComp/BlogsComp.jsx';
import Footer from './components/Footer/Footer.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import DarkMode from './components/Navbar/DarkMode';
// import About from './components/About/About.jsx';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      offset : 100,
      delay : 100,
    });
    AOS.refresh();
  },[]);

  return (
    <div className="overflow-x-hidden bg-white dark:bg-black duration-300">
      {/* <DarkMode /> */}
      <Navbar />
      
      <Hero/>
      <BrandLogo />
      <Services/>
      <Testimonials/>
      <BlogsComp/>
      <Footer/>
      <WhatsAppButton phoneNumber="+91 8080124607" message="Welcome to bg technology, How we can help you" />
    </div>
  )
}

export default App

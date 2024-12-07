import React,{useState, useEffect} from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Hero from "../Hero/Hero.jsx";

// import BgVideo from '../../assets/earth-bg.mp4';
import BgVideo from '../../assets/bgvideo.mov';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <div className="">
      <div className="h-[700px] relative">
      <Navbar />
      <Hero /> 
       
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        
      </div>
      
    </div>
  );
};

export default About;
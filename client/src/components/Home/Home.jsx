
import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Hero from "../Hero/Hero.jsx";
import HeroCard from "../HeroCard/HeroCard.jsx";
import BgVideo from "../../assets/bgvideo.mov";
import Rapidscat from "../RapidScat/Rapidscat.jsx";
import Satelite from "../Satellite/Satellite.jsx";
import Footer2 from "../Footer/Footer2.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });

  return (
    <div className="overflow-x-hidden">
      {/* Video Background Section */}
      <div className="relative h-[700px] md:h-[500px] lg:h-[700px] w-full">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>

      {/* Hero Card Section */}
      <div className="bg-white w-full">
        <HeroCard />
      </div>

      {/* RapidScat Section */}
      <div className="bg-gray-100 w-full">
        <Rapidscat />
      </div>

      {/* Satellite Section */}
      <div className="bg-white w-full">
        <Satelite />
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white w-full">
        <Footer2 />
      </div>
    </div>
  );
};

export default Home;





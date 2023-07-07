import React, { useEffect } from "react";
import photo1 from "../images/photo1.jpg"
import Aos from 'aos';
import "/node_modules/aos/dist/aos.css"
import TypingAnimation from "./TypingAnimation";




const HeroSection = () => {
  useEffect(()=>{
    Aos.init()
},[])

// console.log("component re-rendered");

  return (
    <>
      <div className="container-fluid hero_main_container" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="700">
        <div className="row hero_main_row " >
            <div className="col-md-6 img_container">
              <div className="hero-img">
                <img className="photo1 img-fluid" src={photo1} alt="profile picture" />
              </div>
            </div>
            <div className="col-md-6 content_container">
             <TypingAnimation/>
            </div>
        </div>
      </div>

    </>
  );
};

export default HeroSection;

import React, { useEffect } from "react";
import { VehicleAnimation } from "../movingVehicleAnimation/VehicleAnimation";
import Aos from "aos";

const AboutSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div
        className="about-me"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-center"
        data-aos-duration="600"
      >
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="profile-picture">
            <img src={require("../images/photo1.jpg")} alt="Profile Picture"  />
          </div>
          <div className="bio">
            <h3 className="name">Saurav Chettri</h3>
            <p className="description">
              Hi, I'm Saurav Chettri, a passionate web developer with a love for
              clean and elegant code. I specialize in front-end development and
              have experience working with ReactJS, HTML, CSS, and JavaScript. I
              enjoy creating intuitive and user-friendly interfaces that provide
              a seamless browsing experience.
            </p>
            <p className="description">
              When I'm not coding, you can find me exploring new technologies,
              watching motivational and informative content, or playing my
              guitar. I believe in continuous learning and staying up-to-date
              with the latest trends in web development. If you have any
              questions or would like to work together, feel free to reach out!
            </p>
          </div>
        </div>
      </div>
      <VehicleAnimation />
    </>
  );
};

export default AboutSection;

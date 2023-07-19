import React, { useEffect } from "react";
import Aos from "aos";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "aos/dist/aos.css";



const AboutSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div
        className="about-me">
       <div className="about-title" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"><p><span>W</span>elcome to the official website of <span>Mr. Saurav Nepal</span>, a highly accomplished mechanical engineer with a profound technical background in the automotive industry. With 7 years of experience, including 5 years as a Customer Support Manager at Tata Motors Limited and 2 years as a Machine Shop Supervisor at Tata Motors' Jamshedpur plant, Saurav has garnered extensive expertise that sets him apart as a true automotive enthusiast.</p></div>
       <div className="about-desc" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"><p><span>T</span>hroughout his journey, Saurav has consistently demonstrated excellence and an unwavering passion for automobiles. As a Customer Support Manager at Tata Motors Limited, he has been at the forefront of delivering unparalleled service and support to valued clients, leaving them thoroughly satisfied and loyal.</p></div>
       <div className="about-desc" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"><p><span>S</span>aurav's deep understanding of the intricacies of automobiles has empowered him to provide innovative solutions to customers' technical queries and concerns. He has a unique talent for effectively communicating complex technical concepts with ease, making sure that everyone, from seasoned technicians to non-technical stakeholders, is on the same page.</p></div>
       <div className="about-desc two" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400"><p><span>A</span>n analytical problem solver at heart, Saurav's sharp skills have consistently resolved even the most challenging technical issues, leaving clients impressed and appreciative of the top-notch support they receive.</p></div>
       <div className="about-desc two" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400"><p><span>A</span>s a leader in the customer support department, Saurav has led and motivated his team to new heights. His approachable nature and supportive leadership style have made him an exceptional mentor, guiding and nurturing the growth of new team members.</p></div>
       <div className="about-desc four" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400"><p><span>B</span>eyond his technical prowess, Saurav is known for exceptional organizational and time management skills. Excelling at juggling multiple tasks and responsibilities, he ensures that operations run smoothly within the customer support domain, making him an invaluable asset to any organization.</p></div>
       <div className="about-desc four" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400"><p><span>S</span>aurav's dedication to excellence and the desire to stay ahead of industry advancements have allowed him to anticipate and address customer needs proactively. Always up-to-date with the latest developments in the automotive world, Saurav brings a wealth of knowledge and innovative ideas to the table.</p></div>
       <div className="about-desc six" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400"><p><span>W</span>ith 7 years of experience, Saurav has played a pivotal role in the success and growth of Tata Motors Limited. Now, he is ready to embark on new challenges and make an even more significant impact in the automotive industry.</p></div>
       <div className="about-desc six" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400"><p><span>W</span>hether you're an automotive enthusiast, a potential employer, or a fellow professional seeking expert advice, Saurav's website is your gateway to unparalleled automotive knowledge and exceptional customer support. Explore Saurav's journey, achievements, and insights into the automotive world as he continues to shape the industry with his passion and expertise.</p></div>
       <div className="about-title " data-aos="fade-zoom-out" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400"><p><span>A</span>re you ready to experience the epitome of automotive excellence? Connect with Saurav today and witness the difference that true expertise and unmatched customer support can make in your automotive journey!</p></div>
       
      <div className="social">
        <a href="#"><i className="bi bi-meta "></i></a>
        <a href="#"><i className="bi bi-instagram"></i></a>
        <a href="#"><i className="bi bi-twitter"></i></a>
        <a href="#"><i className="bi bi-linkedin"></i></a>
      </div>
      </div>

    </>
  );
};

export default AboutSection;

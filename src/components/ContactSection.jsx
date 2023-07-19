import Aos from "aos";
import React, { useEffect,useRef, useState } from "react";
import validation from "./Validation";
import emailjs from '@emailjs/browser';
import { Link, useNavigate } from "react-router-dom";
import emailSent from "./email-sent.json"
import Lottie from "lottie-react";
import contactMe from "./contactMe.json"




const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const[show, setShow] = useState(true);
  // const [dp, setDp] = useState("none");
  const form = useRef();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (errors.name === "" && errors.email === "" && errors.message === "") {
      setShow(false);
    }
  }, [errors]);

  const sendEmail = (e) => {
    e.preventDefault();
    setErrors(validation(name,email,message));
   
  //  emailjs.sendForm('service_t70jr1n', 'template_ycwbynd', form.current, 'WNa-uoBGOHCdkzP5k')
  //  .then((result) => {
  //      console.log(result.text);
  //      console.log("sent successfully");
      
  //  }, (error) => {
  //      console.log(error.text);
  //      alert("message not sent");
  //      setShow(true);
  //  });
  };

  const goBack = ()=>{
    setShow(true);
    // navigate(-1);
    setName("");
    setEmail("");
    setMessage("");
    setErrors({});

  }

  useEffect(()=>{
    Aos.init()
},[])

  return (
     
    <section className="contact-section">
      <div className="container"  data-aos="slide-left"
          data-aos-duration="400" data-aos-easing="ease-in">
        <h2>Contact</h2>
        {show ? 
        <>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="user_name"
            />
             {errors.name && <span style={{color: "red",lineHeight:"1rem"}}>{errors.name}</span>} 
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="user_email"
            />
             {errors.email && <span style={{color: "red",lineHeight:"1"}}>{errors.email}</span>} 
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
            ></textarea>
             {errors.message && <span style={{color: "red",lineHeight:"1rem"}}>{errors.message}</span>} 
          </div>
          <button type="submit" value="Send" className="btn btn-primary">
            Send
          </button>
        </form>
        <Lottie className="lottie-contact" animationData={contactMe} loop={true} delay= "500" />
        </>
        :
        <div className="contact-success">
        <div className="lottie-email">  
        <Lottie animationData={emailSent} loop={true} delay= "500" />
          </div>
          <span>Send successfully</span>  
    
          <button className="btn btn-primary" onClick={goBack}><Link to= "/contact"></Link>
          Go Back
          </button>
        </div>
        }
      </div>
    </section>
  );
};
export default ContactSection;

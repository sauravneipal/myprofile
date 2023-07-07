import Aos from "aos";
import React, { useEffect,useRef, useState } from "react";
import validation from "./Validation";
import emailjs from '@emailjs/browser';


const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const[show, setShow] = useState(true);
  // const [dp, setDp] = useState("none");
  const form = useRef();

  useEffect(() => {
    if (errors.name === "" && errors.email === "" && errors.message === "") {
      setShow(false);
    }
  }, [errors]);

  const sendEmail = (e) => {
    e.preventDefault();
    setErrors(validation(name,email,message));
   
   emailjs.sendForm('service_t70jr1n', 'template_ycwbynd', form.current, 'WNa-uoBGOHCdkzP5k')
   .then((result) => {
       console.log(result.text);
       console.log("sent successfully");
      
   }, (error) => {
       console.log(error.text);
       alert("message not sent");
       setShow(true);
   });
  };

  const goBack = ()=>{
    setShow(true);
    setName("");
    setEmail("");
    setMessage("");
    setErrors({});

  }

  useEffect(()=>{
    Aos.init()
},[])

  return (
    <section className="contact-section"  >
      <div className="container" data-aos="fade-left"
    data-aos-duration="400" data-aos-easing="ease-in-sine">
        <h2>Contact</h2>
        {show ? 
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
        :
        <div className="contact-success">
          <h5>Send successfully</h5>
          <button className="btn btn-primary" onClick={goBack}>
            Go Back
          </button>
        </div>
        }
      </div>
    </section>
  );
};
export default ContactSection;

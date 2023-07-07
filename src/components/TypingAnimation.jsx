import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypingAnimation = () => {
    const [text] = useTypewriter({
      words: ["Designer", "Developer"],
      typeSpeed: "100",
      deleteSpeed: "100",
      loop: Infinity,
      delaySpeed: "800",
    });
  
    return (
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <h2 className="hero-title ">Iam SAURAV</h2>
        <span className="hero-subtitle">{text}</span>
        <span className="typing-cursor">
          <Cursor cursorColor="red" cursorStyle="|" />
        </span>
      </div>
    );
  };

  export default TypingAnimation;
import React from "react";
import "./navbar.css";

const Home = () => {
  const handleContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="animated-text">
          Hello, I'm <span>Silvi Maheshwari</span>
        </h1>
        <p className="fade-in">
          Adaptable Full Stack Developer with proficiency in JavaScript, Node.js,
          Express.js, and React.js.
        </p>
        <button className="fade-in" onClick={handleContact}>
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import './navbar.css';

const About = () => (
  <section id="about" className="about-section">
    <div className="about-content">
      <div className="profile-container">
        <img src="src\assets\silvi-photo.jpeg" alt="Profile" className="profile-photo"/>
      </div>
      <div className="about-text">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          Hi, I'm Silvi Maheshwari, a passionate and adaptable Full Stack Developer with a strong foundation in web development and a flair for creating dynamic, user-friendly applications. I graduated with a B.Tech in Information Technology and Engineering from GIT Jaipur (2016-2020).
        </p>
        
        <h3 className="skills-title">Technical Skills</h3>
        <div className="skills-container">
          <div className="skill-box">JavaScript</div>
          <div className="skill-box">React</div>
          <div className="skill-box">Node.js</div>
          <div className="skill-box">Express.js</div>
          <div className="skill-box">MongoDB</div>
          <div className="skill-box">HTML5</div>
          <div className="skill-box">CSS3</div>
          <div className="skill-box">Chakra UI</div>
        </div>

        {/* Social Links Section */}
        <div className="social-links">
          <h3>Connect With Me</h3>
          <div className="link-icons">
            <a
              href="https://github.com/silvi-Maheshwari"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link github"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/silvi-maheshwari-888b5b315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
              target="_blank"
              rel="noopener noreferrer"
              className="social-link instagram"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a
              href="https://www.instagram.com/silvimaheshwari123?igsh=NjdleGhreG91dHkz&utm_source=ig_contact_invite "
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="mailto:maheshwarisilvi98@gmail.com" className="social-link email">
              <i className="fas fa-envelope"></i> Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;

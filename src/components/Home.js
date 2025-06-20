import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <motion.div 
          className="intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Hi, I'm Sudeepthi Adluru</h1>
          <h2 className="gradient-text">Full-Stack Developer</h2>
          <p className="description">
            Full-Stack Developer with 3+ years of experience building scalable web and mobile apps. 
            Proficient in Java, Spring Boot, React.js, and Node.js, with expertise in Microservices, 
            RESTful APIs, and cloud platforms (AWS, Azure).
          </p>

          <div className="contact-info">
            <div className="info-item">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Kansas City, MO</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:sudeepthiadluru13@gmail.com">sudeepthiadluru13@gmail.com</a>
            </div>
          </div>

          <div className="cta-buttons">
            <Link to="/contact" className="btn primary">
              <span>Get In Touch</span>
            </Link>
          </div>

          <div className="social-links">
            <a 
              href="https://linkedin.com/in/sudeepthi-adluru10" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a 
              href="https://github.com/Su-Deepthi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="skills-highlight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="skill-tag">Java</div>
          <div className="skill-tag">Spring Boot</div>
          <div className="skill-tag">React.js</div>
          <div className="skill-tag">Node.js</div>
          <div className="skill-tag">AWS</div>
          <div className="skill-tag">Docker</div>
          <div className="skill-tag">Kubernetes</div>
          <div className="skill-tag">Microservices</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home; 
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.css';

const Contact = () => {
  const contactLinks = [
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://linkedin.com/in/sudeepthi-adluru10',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: faGithub,
      url: 'https://github.com/Su-Deepthi',
      color: '#333'
    },
    {
      name: 'Email',
      icon: faEnvelope,
      url: 'mailto:sudeepthiadluru13@gmail.com',
      color: '#ea4335'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="contact-section">
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-description">
          Feel free to connect with me on social media or send me an email.
          I'm always open to discussing new projects, opportunities, or partnerships.
        </p>

        <motion.div className="contact-links">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{ '--hover-color': link.color }}
            >
              <FontAwesomeIcon icon={link.icon} className="contact-icon" />
              <span>{link.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact; 
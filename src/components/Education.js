import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Education.css';

const Education = () => {
  const education = [
    {
      degree: "Master's in Computer Science (STEM)",
      institution: "University of Missouri Kansas City",
      location: "Missouri, USA",
      period: "Aug 2023 - Dec 2024"
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Sree Vidyanikethan Engineering College",
      location: "India",
      period: "May 2019 - May 2023"
    }
  ];

  const certifications = [
    "IBM Data Science Professional Certificate (Coursera)",
    "AWS Junior Software Developer Professional Certificate",
    "AWS Academy Cloud Foundations by AWS",
    "The Joy of Computing using Python by NPTEL"
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="education">
      <motion.div
        className="education-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="section-title">Education & Certifications</h2>

        <div className="education-content">
          <div className="academic-section">
            <h3>Academic Background</h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-card"
                variants={itemVariants}
              >
                <h4>{edu.degree}</h4>
                <div className="institution-info">
                  <p className="institution">{edu.institution}</p>
                  <p className="location">{edu.location}</p>
                </div>
                <p className="period">{edu.period}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="certifications-section" variants={itemVariants}>
            <h3>Professional Certifications</h3>
            <ul className="certifications-list">
              {certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="certification-item"
                >
                  {cert}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education; 
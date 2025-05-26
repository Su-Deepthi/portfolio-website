import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faCloud } from '@fortawesome/free-solid-svg-icons';
import '../styles/About.css';

const About = () => {
  const skills = {
    "Frontend Development": {
      icon: faCode,
      items: [
        "React.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5/CSS3",
        "Redux",
        "Material-UI",
        "Bootstrap",
        "Responsive Design"
      ]
    },
    "Backend Development": {
      icon: faCode,
      items: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Microservices"
      ]
    },
    "Database & Storage": {
      icon: faDatabase,
      items: [
        "Oracle",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Redis",
        "Database Design",
        "SQL/NoSQL"
      ]
    },
    "DevOps & Tools": {
      icon: faCloud,
      items: [
        "AWS",
        "Docker",
        "Jenkins",
        "Git/GitHub",
        "Maven",
        "Junit",
        "CI/CD Pipelines"
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="about-section">
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="about-title" variants={itemVariants}>
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <motion.p variants={itemVariants}>
              Hello! I'm Sudeepthi Adluru, a passionate Full Stack Developer with expertise in building modern web applications. 
              With a Master's degree in Computer Science from the University of Missouri-Kansas City and professional experience 
              at Raymond James and LTI Mindtree, I've developed a strong foundation in both front-end and back-end development.
            </motion.p>

            <motion.p variants={itemVariants}>
              I'm passionate about creating efficient, scalable, and user-friendly applications that solve real-world problems. 
              My experience includes developing secure banking systems, healthcare management platforms, and modern web applications.
            </motion.p>
          </motion.div>

          <motion.div className="skills-section" variants={itemVariants}>
            <h3 className="skills-title">Technical Expertise</h3>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, { icon, items }]) => (
                <motion.div
                  key={category}
                  className="skill-category"
                  variants={itemVariants}
                >
                  <div className="category-header">
                    <FontAwesomeIcon icon={icon} className="category-icon" />
                    <h4>{category}</h4>
                  </div>
                  <ul>
                    {items.map((skill, index) => (
                      <motion.li
                        key={index}
                        variants={itemVariants}
                        custom={index}
                      >
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="about-footer" variants={itemVariants}>
            <p>
              When I'm not coding, I enjoy staying up-to-date with the latest technology trends, contributing to open-source 
              projects, and collaborating with other developers to build innovative solutions.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 
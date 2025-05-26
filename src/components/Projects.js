import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Secure Banking System',
      description: 'Developed a comprehensive banking system with robust security features including secure transaction processing, account management, and two-factor authentication. Implemented real-time transaction monitoring and automated scheduled payments using Spring Security and RabbitMQ.',
      technologies: ['Java', 'Spring Boot', 'Spring Security', 'Oracle', 'RabbitMQ', 'Docker'],
      github: 'https://github.com/Su-Deepthi/secure-banking-app',
      live: null
    },
    {
      title: 'Modern Portfolio Website',
      description: 'Created a responsive portfolio website using React.js with modern UI/UX design principles. Features include dark theme, smooth animations, dynamic routing, and mobile-first approach. Implemented using React Router, Framer Motion, and styled with CSS modules.',
      technologies: ['React.js', 'Framer Motion', 'CSS3', 'HTML5', 'JavaScript', 'Git'],
      github: 'https://github.com/Su-Deepthi/portfolio',
      live: 'https://your-portfolio-url.com'
    },
    {
      title: 'Healthcare Management System',
      description: 'Built a cloud-based healthcare management system on AWS, enabling efficient patient record management, appointment scheduling, and telemedicine capabilities. Implemented HIPAA-compliant data storage and real-time analytics dashboard.',
      technologies: ['AWS Lambda', 'DynamoDB', 'React.js', 'Node.js', 'Express.js', 'S3', 'CloudFront'],
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
    <section className="projects">
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="section-title">Personal Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
            >
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="tech-stack">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    <span>Source Code</span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 
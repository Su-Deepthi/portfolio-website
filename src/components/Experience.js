import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Raymond James',
      location: 'Kansas City, MO',
      position: 'Software Engineer',
      period: 'Sep 2024 - Current',
      achievements: [
        'Designed and developed user interfaces using React.js, HTML5, and CSS3, creating reusable components and integrating advanced features like push notifications and logging systems.',
        'Built and maintained RESTful APIs using Spring Boot and J2EE, leveraging Redux-Saga for state management, resulting in a 40% improvement in performance.',
        'Containerized applications using Docker and orchestrated deployments on AWS (EC2, S3) with auto-scaling and load balancing, improving system scalability by 35%.',
        'Implemented a centralized logging system using ELK Stack for monitoring and analysis.',
        'Secured API endpoints using OAuth2 and JWT authentication.',
        'Automated CI/CD pipelines using Jenkins and GitHub Actions.',
        'Optimized database performance in AWS RDS (PostgreSQL) by 40% through advanced techniques.'
      ]
    },
    {
      company: 'LTI Mindtree',
      location: 'India',
      position: 'Software Developer',
      period: 'Jan 2022 - Jun 2023',
      achievements: [
        'Designed and developed React Native mobile applications with real-time features and push notifications.',
        'Built scalable web applications using React.js and Spring Boot with microservices architecture.',
        'Developed event-driven Microservices using Spring Boot and Apache Kafka, improving data synchronization by 60%.',
        'Orchestrated containerized services deployment on AWS ECS and Azure Kubernetes.',
        'Implemented high-performance REST APIs with Swagger documentation.',
        'Strengthened application security through RBAC and SSL/TLS encryption.',
        'Led Agile teams in sprint planning and delivery using JIRA.'
      ]
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
    <section className="experience">
      <motion.div
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="section-title">Professional Experience</h2>
        
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            variants={itemVariants}
          >
            <div className="experience-header">
              <div className="company-info">
                <h3>{exp.company}</h3>
                <p className="location">{exp.location}</p>
              </div>
              <div className="position-info">
                <h4>{exp.position}</h4>
                <p className="period">{exp.period}</p>
              </div>
            </div>
            
            <ul className="achievements">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience; 
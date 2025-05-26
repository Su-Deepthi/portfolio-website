import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faDatabase,
  faCloud,
  faCogs,
  faShieldAlt,
  faVial,
  faSitemap,
  faTools
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: faCode,
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'C++']
    },
    {
      title: 'Frameworks & Libraries',
      icon: faSitemap,
      skills: ['React.js', 'Spring Boot', 'Spring MVC', 'Node.js', 'Express.js', 'Hibernate', 'Redux-Saga']
    },
    {
      title: 'Database Technologies',
      icon: faDatabase,
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'DynamoDB', 'AWS RDS']
    },
    {
      title: 'Cloud Platforms',
      icon: faCloud,
      skills: ['AWS (EC2, S3, Lambda, CloudFront, API Gateway, ECS)', 'Azure Kubernetes (AKS)']
    },
    {
      title: 'DevOps & CI/CD',
      icon: faCogs,
      skills: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions', 'Nginx']
    },
    {
      title: 'AI/ML',
      icon: faTools,
      skills: ['Scikit-learn', 'TensorFlow', 'Pytorch', 'Data Visualization (Matplotlib, Seaborn, Tableau)', 'NumPy/pandas', 'Django/Flask']
    },
    {
      title: 'Security & Authentication',
      icon: faShieldAlt,
      skills: ['OAuth 2.0', 'JWT', 'Spring Security', 'SSL/TLS', 'Role-Based Access Control (RBAC)']
    },
    {
      title: 'Testing & Monitoring',
      icon: faVial,
      skills: ['Jest', 'Mockito', 'Selenium', 'ELK Stack (Elasticsearch, Logstash, Kibana)']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="skills">
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              variants={itemVariants}
            >
              <div className="category-header">
                <FontAwesomeIcon icon={category.icon} className="category-icon" />
                <h3>{category.title}</h3>
              </div>
              <ul className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    variants={itemVariants}
                    className="skill-item"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills; 
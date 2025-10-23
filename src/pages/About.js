import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from 'lucide-react';

const About = () => {

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      style={{ userSelect: 'text' }}
    >
      <h1 className="page-title">About Me</h1>

      <div className="grid grid-2">
        <motion.div
          className="section"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ userSelect: 'text' }}
        >
          <h2>My Journey</h2>
          <p>
            I am an aspiring astrophysicist with over two years of research experience
            in observational astronomy, with a focus on high-energy transients.
            My work spans diverse areas, including Near-Earth Asteroid detection, 
            analysis of Gamma-Ray Burst (GRB) afterglows, and the development of 
            scheduling algorithms for ground-based telescopes aimed at observing 
            electromagnetic counterparts to gravitational waves (GW).
          </p>
          <p>
            I hold a bachelor’s degree in Mechanical Engineering from VJTI, Mumbai, 
            where a key highlight was contributing to the design and fabrication of 
            an all-terrain vehicle for a national-level competition. After graduation, 
            I worked as an Assistant Manager in the mechanical maintenance department 
            of a steel manufacturing company before following my growing passion for physics.
          </p>
          <p>
            This passion led me to pursue a master’s degree at IIT Bombay under the guidance
            of Prof. Varun Bhalerao. My master’s thesis focused on studying transients using 
            the GROWTH-India telescope, the country’s only fully robotic optical telescope.
          </p>
          <p>
            Outside of research, I enjoy running, trekking, and have recently developed 
             a love for reading.
          </p>
        </motion.div>

        <motion.div
          className="section"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ userSelect: 'text' }}
        >
          <h2>Contact Information</h2>
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={20} />
              <span>ywagh4430@gmail.com</span>
            </div>
            <div className="contact-item">
              <Phone size={20} />
              <span>+91 8108466515</span>
            </div>
            <div className="contact-item">
              <MapPin size={20} />
              <span>IIT Bombay, Powai, Maharashtra</span>
            </div>
          </div>

          <div className="social-links" style={{ pointerEvents: 'auto', userSelect: 'text' }}>
            <a
              href="https://www.linkedin.com/in/yogesh-wagh-2b9518141/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              onClick={() => console.log('LinkedIn clicked')}
              onMouseEnter={() => console.log('LinkedIn hovered')}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/Yogesh_Wagh1729"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              title="X Profile"
              onClick={() => console.log('X clicked')}
              onMouseEnter={() => console.log('X hovered')}
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://github.com/Yogesh-wagha"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              title="Github profile"
              onClick={() => console.log('github clicked')}
              onMouseEnter={() => console.log('github hovered')}
            >
              <Github size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{ userSelect: 'text' }}
      >
        <h2>Research Interests</h2>
        <div className="research-tags">
          <span className="tag">GRB Afterglows</span>
          <span className="tag">Near Earth Asteroid Detection</span>
          <span className="tag">Observational Astronomy</span>
          <span className="tag">Time-Domain Astronomy</span>
          <span className="tag">Gravitational Waves</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
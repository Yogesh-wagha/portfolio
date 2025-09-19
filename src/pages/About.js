import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, Twitter } from 'lucide-react';

const About = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Message:', message);
    setMessage('');
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">About Me</h1>

      <div className="grid grid-2">
        <motion.div
          className="section"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2>My Journey</h2>
          <p>
            I am a passionate astrophysicist with over 15 years of experience in 
            stellar evolution, exoplanet research, and cosmic ray physics. My work 
            focuses on understanding the fundamental processes that govern our universe.
          </p>
          <p>
            I completed my Ph.D. in Astrophysics from [University Name] in 2008, 
            where I specialized in the study of binary star systems and their role 
            in stellar evolution. Since then, I have been involved in numerous 
            international collaborations and space missions.
          </p>
          <p>
            When I'm not peering into the cosmos, I enjoy sharing the wonders of 
            the universe through public lectures, educational outreach programs, 
            and mentoring the next generation of astronomers.
          </p>
        </motion.div>

        <motion.div
          className="section"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2>Contact Information</h2>
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={20} />
              <span>[your.email]@university.edu</span>
            </div>
            <div className="contact-item">
              <Phone size={20} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <MapPin size={20} />
              <span>[University Name], [City, State]</span>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="#" className="social-link">
              <Twitter size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2>Send Me a Message</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share your thoughts, questions, or collaboration ideas..."
            className="message-box"
            rows="6"
            required
          />
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </motion.div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h2>Research Interests</h2>
        <div className="research-tags">
          <span className="tag">Stellar Evolution</span>
          <span className="tag">Exoplanet Detection</span>
          <span className="tag">Binary Star Systems</span>
          <span className="tag">Cosmic Ray Physics</span>
          <span className="tag">Space Missions</span>
          <span className="tag">Gravitational Waves</span>
          <span className="tag">Dark Matter</span>
          <span className="tag">Galactic Dynamics</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
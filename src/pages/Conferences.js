import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Award } from 'lucide-react';

const Conferences = () => {
  const upcomingConferences = [
    {
      title: "International Astronomical Union General Assembly",
      date: "August 2024",
      location: "Cape Town, South Africa",
      role: "Keynote Speaker",
      topic: "Future of Exoplanet Research"
    },
    {
      title: "American Astronomical Society Meeting",
      date: "January 2025",
      location: "National Harbor, MD",
      role: "Session Chair",
      topic: "Stellar Evolution in Binary Systems"
    }
  ];

  const pastConferences = [
    {
      title: "European Astronomical Society Annual Meeting",
      date: "July 2023",
      location: "Krakow, Poland",
      role: "Invited Speaker",
      topic: "Machine Learning in Astrophysics",
      award: "Best Presentation Award"
    },
    {
      title: "Gravitational Wave Physics and Astronomy Workshop",
      date: "March 2023",
      location: "Hannover, Germany",
      role: "Panel Discussion",
      topic: "Multi-messenger Astronomy"
    },
    {
      title: "International Conference on Space Science",
      date: "September 2022",
      location: "Tokyo, Japan",
      role: "Keynote Speaker",
      topic: "Dark Matter Detection Methods"
    },
    {
      title: "Exoplanet Science Strategy Forum",
      date: "May 2022",
      location: "Pasadena, CA",
      role: "Working Group Lead",
      topic: "Atmospheric Characterization Techniques"
    }
  ];

  const renderConferenceCard = (conference, index, isUpcoming = false) => (
    <motion.div
      key={index}
      className={`conference-card card ${isUpcoming ? 'upcoming' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="conference-header">
        <h3>{conference.title}</h3>
        {conference.award && (
          <div className="award-badge">
            <Award size={16} />
            {conference.award}
          </div>
        )}
      </div>
      
      <div className="conference-details">
        <div className="detail-item">
          <Calendar size={16} />
          <span>{conference.date}</span>
        </div>
        <div className="detail-item">
          <MapPin size={16} />
          <span>{conference.location}</span>
        </div>
        <div className="detail-item">
          <Users size={16} />
          <span>{conference.role}</span>
        </div>
      </div>
      
      <p className="conference-topic">
        <strong>Topic:</strong> {conference.topic}
      </p>
    </motion.div>
  );

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Conferences & Presentations</h1>

      <motion.div
        className="conference-stats section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="stats-grid">
          <div className="stat-card">
            <h3>45+</h3>
            <p>Conferences Attended</p>
          </div>
          <div className="stat-card">
            <h3>25</h3>
            <p>Invited Talks</p>
          </div>
          <div className="stat-card">
            <h3>12</h3>
            <p>Keynote Speeches</p>
          </div>
          <div className="stat-card">
            <h3>8</h3>
            <p>Awards Received</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2>Upcoming Conferences</h2>
        <div className="conferences-grid">
          {upcomingConferences.map((conference, index) => 
            renderConferenceCard(conference, index, true)
          )}
        </div>
      </motion.div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2>Recent Conferences</h2>
        <div className="conferences-grid">
          {pastConferences.map((conference, index) => 
            renderConferenceCard(conference, index)
          )}
        </div>
      </motion.div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h2>Speaking Topics</h2>
        <div className="topics-grid">
          <div className="topic-card">
            <h4>Exoplanet Research</h4>
            <p>Detection methods, atmospheric analysis, and habitability studies</p>
          </div>
          <div className="topic-card">
            <h4>Stellar Evolution</h4>
            <p>Binary star systems, mass transfer, and stellar lifecycles</p>
          </div>
          <div className="topic-card">
            <h4>Machine Learning in Astronomy</h4>
            <p>AI applications in data analysis and pattern recognition</p>
          </div>
          <div className="topic-card">
            <h4>Gravitational Waves</h4>
            <p>Multi-messenger astronomy and neutron star physics</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Conferences;
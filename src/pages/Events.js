import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Star } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Public Lecture: The Search for Life Beyond Earth",
      date: "2024-10-15",
      time: "7:00 PM",
      location: "University Auditorium",
      type: "Public Lecture",
      description: "Join me for an engaging discussion about the latest discoveries in exoplanet research and the ongoing search for extraterrestrial life."
    },
    {
      title: "Graduate Student Seminar Series",
      date: "2024-10-22",
      time: "3:00 PM",
      location: "Physics Department",
      type: "Academic Seminar",
      description: "A technical presentation on stellar evolution models for graduate students and faculty."
    },
    {
      title: "Astronomy Night at the Observatory",
      date: "2024-11-05",
      time: "8:00 PM",
      location: "University Observatory",
      type: "Public Outreach",
      description: "Stargazing event with telescope observations and informal discussions about current astronomical research."
    }
  ];

  const pastEvents = [
    {
      title: "TEDx Talk: Cosmic Perspectives",
      date: "2024-09-10",
      time: "2:00 PM",
      location: "City Convention Center",
      type: "TEDx Talk",
      description: "Explored how astronomical discoveries change our perspective on humanity's place in the universe.",
      attendance: "500+ attendees"
    },
    {
      title: "Science Museum Workshop",
      date: "2024-08-20",
      time: "10:00 AM",
      location: "National Science Museum",
      type: "Educational Workshop",
      description: "Interactive workshop for high school students on careers in astrophysics.",
      attendance: "75 students"
    },
    {
      title: "Radio Interview: Space Exploration",
      date: "2024-07-15",
      time: "9:00 AM",
      location: "NPR Studio",
      type: "Media Interview",
      description: "Discussed recent space missions and their scientific implications.",
      attendance: "Live broadcast"
    }
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const renderEventCard = (event, index, isUpcoming = false) => (
    <motion.div
      key={index}
      className={`event-card card ${isUpcoming ? 'upcoming' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="event-header">
        <h3>{event.title}</h3>
        <span className={`event-type ${event.type.toLowerCase().replace(' ', '-')}`}>
          {event.type}
        </span>
      </div>
      
      <div className="event-details">
        <div className="detail-item">
          <Calendar size={16} />
          <span>{formatDate(event.date)}</span>
        </div>
        <div className="detail-item">
          <Clock size={16} />
          <span>{event.time}</span>
        </div>
        <div className="detail-item">
          <MapPin size={16} />
          <span>{event.location}</span>
        </div>
        {event.attendance && (
          <div className="detail-item">
            <Users size={16} />
            <span>{event.attendance}</span>
          </div>
        )}
      </div>
      
      <p className="event-description">{event.description}</p>
      
      {isUpcoming && (
        <button className="btn event-btn">
          Register Interest
        </button>
      )}
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
      <h1 className="page-title">Events & Outreach</h1>

      <motion.div
        className="events-intro section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="intro-content">
          <Star className="intro-icon" size={48} />
          <div>
            <h2>Sharing the Wonder of the Universe</h2>
            <p>
              I believe in making astronomy accessible to everyone. Through public lectures, 
              educational workshops, and media appearances, I strive to share the excitement 
              of scientific discovery and inspire the next generation of astronomers.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          {upcomingEvents.map((event, index) => 
            renderEventCard(event, index, true)
          )}
        </div>
      </motion.div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2>Recent Events</h2>
        <div className="events-grid">
          {pastEvents.map((event, index) => 
            renderEventCard(event, index)
          )}
        </div>
      </motion.div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h2>Speaking Opportunities</h2>
        <p>
          I'm always excited to share my passion for astronomy with diverse audiences. 
          If you're interested in having me speak at your event, please don't hesitate to reach out.
        </p>
        
        <div className="speaking-topics">
          <h3>Popular Topics Include:</h3>
          <ul>
            <li>The Search for Extraterrestrial Life</li>
            <li>Black Holes and Extreme Physics</li>
            <li>The Future of Space Exploration</li>
            <li>Women in STEM and Astronomy</li>
            <li>Climate Change and Planetary Science</li>
            <li>The James Webb Space Telescope Discoveries</li>
          </ul>
        </div>
        
        <button className="btn">
          Request Speaking Engagement
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Events;
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Award, Download } from 'lucide-react';

// Import poster images
import transientPresentationImg from '../assets/images/transient-presentation-2024.jpg';

const Conferences = () => {
  console.log('Conference component loaded');
  console.log('transientPresentationImg:', transientPresentationImg);
  // const upcomingConferences = [
  //   {
  //     title: "International Astronomical Union General Assembly",
  //     date: "August 2024",
  //     location: "Cape Town, South Africa",
  //     role: "Keynote Speaker",
  //     topic: "Future of Exoplanet Research"
  //   },
  //   {
  //     title: "American Astronomical Society Meeting",
  //     date: "January 2025",
  //     location: "National Harbor, MD",
  //     role: "Session Chair",
  //     topic: "Stellar Evolution in Binary Systems"
  //   }
  // ];

  const pastConferences = [
    {
      title: "Transient Meeting",
      date: "April 2024",
      location: "IIT Bombay, Mumbai",
      role: "Poster Presentation",
      topic: "NEO Detection using GROWTH-India Telescope and Astreaks Pipeline",
      description: "Presented my master's thesis work on Near-Earth Object (NEO) detection methods using the GROWTH-India Telescope. Showcased my contribution to building the Astreaks Python pipeline for automated NEO detection and characterization.",
      presentationType: "One Minute Poster Presentation",
      hasPhotos: true,
      presentationImage: transientPresentationImg, // Add your presentation photo
      posterDownload: "/documents/transient-poster-2024.pdf" // Add your poster PDF
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
      <div className="conference-content-wrapper">
        <div className="conference-main-content">
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
            {conference.presentationType && (
              <div className="detail-item">
                <Award size={16} />
                <span>{conference.presentationType}</span>
              </div>
            )}
          </div>

          <p className="conference-topic">
            <strong>Topic:</strong> {conference.topic}
          </p>

          {conference.description && (
            <p className="conference-description">{conference.description}</p>
          )}

          {conference.posterDownload && (
            <a
              href={conference.posterDownload}
              className="btn conference-btn"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Download size={16} />
              Download Poster
            </a>
          )}
        </div>

        {conference.hasPhotos && conference.presentationImage && (
          <div className="conference-photo-sidebar">
            <img
              src={conference.presentationImage}
              alt={`${conference.title} presentation`}
              className="conference-image-compact"
              onLoad={() => console.log('✅ Conference image loaded:', conference.presentationImage)}
              onError={(e) => {
                console.error('❌ Conference image failed to load:', conference.presentationImage);
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNvbmZlcmVuY2UgUGhvdG88L3RleHQ+PC9zdmc+';
              }}
            />
          </div>
        )}
      </div>
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

      {/* Conference Stats - Commented out for future use
      <motion.div
        className="conference-stats section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="stats-grid">
          <div className="stat-card">
            <h3>1</h3>
            <p>Conferences Attended</p>
          </div>
          <div className="stat-card">
            <h3>1</h3>
            <p>Poster Presentations</p>
          </div>
          <div className="stat-card">
            <h3>0</h3>
            <p>Keynote Speeches</p>
          </div>
          <div className="stat-card">
            <h3>0</h3>
            <p>Awards Received</p>
          </div>
        </div>
      </motion.div>
      */}

      {/* Upcoming Conferences - Commented out for future use
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
      */}

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2>Conference Presentations</h2>
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
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2>Topics Presneted</h2>
        <div className="topics-grid">
          <div className="topic-card">
            <h4>NEO Detection</h4>
            <p>Near-Earth Object detection methods using ground-based telescopes, automated pipeline development, and astrometric analysis</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Conferences;
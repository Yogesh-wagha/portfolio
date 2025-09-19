import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ConstellationNav.css';

const ConstellationNav = ({ currentPage, setCurrentPage }) => {
  const [hoveredStar, setHoveredStar] = useState(null);
  const [selectedConstellation, setSelectedConstellation] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const constellationPoints = [
    { 
      id: 'home', 
      label: 'Home', 
      x: 50, 
      y: 30, 
      content: {
        title: 'Welcome to My Universe',
        description: 'Explore the cosmos of astrophysical research through my journey of discovery.',
        highlights: ['15+ Years Research', '50+ Publications', '25+ Conferences']
      }
    },
    { 
      id: 'about', 
      label: 'About Me', 
      x: 30, 
      y: 45, 
      content: {
        title: 'The Astronomer',
        description: 'My personal journey through the stars and dedication to understanding our universe.',
        highlights: ['Ph.D. Astrophysics', 'Binary Star Systems', 'Exoplanet Research']
      }
    },
    { 
      id: 'publications', 
      label: 'Publications', 
      x: 70, 
      y: 45, 
      content: {
        title: 'Scientific Discoveries',
        description: 'Peer-reviewed research contributing to our understanding of stellar evolution.',
        highlights: ['52 Publications', '1,247 Citations', 'h-index: 15']
      }
    },
    { 
      id: 'gallery', 
      label: 'Gallery', 
      x: 35, 
      y: 65, 
      content: {
        title: 'Cosmic Visions',
        description: 'Breathtaking astrophotography capturing the beauty of our universe.',
        highlights: ['Deep Space Objects', 'Nebulae', 'Planetary Systems']
      }
    },
    { 
      id: 'conferences', 
      label: 'Conferences', 
      x: 65, 
      y: 65, 
      content: {
        title: 'Global Collaborations',
        description: 'International presentations and collaborative research efforts.',
        highlights: ['45+ Conferences', '25 Invited Talks', '8 Awards']
      }
    },
    { 
      id: 'events', 
      label: 'Events', 
      x: 25, 
      y: 80, 
      content: {
        title: 'Public Outreach',
        description: 'Sharing the wonder of astronomy with communities worldwide.',
        highlights: ['Public Lectures', 'Educational Workshops', 'Media Appearances']
      }
    },
    { 
      id: 'cv', 
      label: 'CV Download', 
      x: 75, 
      y: 80, 
      content: {
        title: 'Professional Journey',
        description: 'Complete academic and professional experience in astrophysics.',
        highlights: ['Education', 'Experience', 'Awards & Skills']
      }
    }
  ];

  const handleStarClick = (point) => {
    console.log('Star clicked:', point.id); // Debug log
    
    if (point.id === 'home') {
      setCurrentPage('home');
      setSelectedConstellation(null);
      setIsZoomed(false);
      return;
    }
    
    // Show immediate feedback and keep it zoomed
    setSelectedConstellation(point.id);
    setIsZoomed(true);
    
    // Switch to the page after zoom animation
    setTimeout(() => {
      setCurrentPage(point.id);
      // Keep zoomed - don't reset selectedConstellation or isZoomed
    }, 800);
  };

  const handleBackToConstellation = () => {
    // Only zoom out when going back to home
    setSelectedConstellation(null);
    setIsZoomed(false);
    setCurrentPage('home');
  };

  const getConnectionLines = () => {
    const lines = [];
    const connections = [
      ['home', 'about'],
      ['home', 'publications'],
      ['about', 'gallery'],
      ['publications', 'conferences'],
      ['gallery', 'events'],
      ['conferences', 'cv'],
      ['events', 'cv']
    ];

    connections.forEach(([start, end]) => {
      const startPoint = constellationPoints.find(p => p.id === start);
      const endPoint = constellationPoints.find(p => p.id === end);
      
      if (startPoint && endPoint) {
        lines.push({
          x1: startPoint.x,
          y1: startPoint.y,
          x2: endPoint.x,
          y2: endPoint.y,
          active: currentPage === start || currentPage === end
        });
      }
    });

    return lines;
  };

  const selectedPoint = selectedConstellation ? 
    constellationPoints.find(p => p.id === selectedConstellation) : null;

  return (
    <div className="constellation-nav">
      {/* Back to Constellation Button */}
      {currentPage !== 'home' && (
        <motion.button
          className="back-to-constellation"
          onClick={handleBackToConstellation}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ✦ Back to Constellation
        </motion.button>
      )}

      {/* Always show constellation in background */}
      <motion.div 
        className={`constellation-container ${currentPage !== 'home' ? 'background-mode' : ''}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: currentPage === 'home' ? 1 : 0.3,
          scale: (currentPage !== 'home' && selectedConstellation) || isZoomed ? 2.5 : 1,
          x: ((currentPage !== 'home' && selectedConstellation) || (isZoomed && selectedPoint)) ? 
             `${(50 - (selectedPoint?.x || constellationPoints.find(p => p.id === currentPage)?.x || 50)) * 2}%` : 0,
          y: ((currentPage !== 'home' && selectedConstellation) || (isZoomed && selectedPoint)) ? 
             `${(50 - (selectedPoint?.y || constellationPoints.find(p => p.id === currentPage)?.y || 50)) * 2}%` : 0,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
            <svg className="constellation-svg" viewBox="0 0 100 100">
              {/* Connection Lines */}
              {getConnectionLines().map((line, index) => (
                <motion.line
                  key={index}
                  x1={`${line.x1}%`}
                  y1={`${line.y1}%`}
                  x2={`${line.x2}%`}
                  y2={`${line.y2}%`}
                  stroke="var(--constellation-color)"
                  strokeWidth="0.2"
                  opacity={isZoomed ? 0.1 : (currentPage === 'home' ? 0.6 : 0.3)}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: index * 0.1 }}
                />
              ))}

              {/* Stars/Navigation Points */}
              {constellationPoints.map((point) => (
                <g key={point.id}>
                  <motion.circle
                    cx={`${point.x}%`}
                    cy={`${point.y}%`}
                    r={selectedConstellation === point.id ? "3" : (currentPage === point.id ? "2" : "1.5")}
                    fill="var(--star-color)"
                    className="nav-star"
                    onClick={() => handleStarClick(point)}
                    onMouseEnter={() => setHoveredStar(point.id)}
                    onMouseLeave={() => setHoveredStar(null)}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: selectedConstellation === point.id ? 2 : (currentPage === point.id ? 1.5 : 1), 
                      opacity: isZoomed ? (selectedConstellation === point.id ? 1 : 0.3) : (currentPage === point.id ? 1 : 0.8)
                    }}
                    transition={{ 
                      duration: 0.3, 
                      delay: constellationPoints.indexOf(point) * 0.05 
                    }}
                    whileHover={{ scale: currentPage === 'home' ? 1.4 : 1.2 }}
                    style={{ cursor: 'pointer' }}
                  />
                  
                  {/* Intense glow effect for selected star */}
                  {selectedConstellation === point.id && (
                    <>
                      <motion.circle
                        cx={`${point.x}%`}
                        cy={`${point.y}%`}
                        r="5"
                        fill="none"
                        stroke="var(--star-color)"
                        strokeWidth="0.8"
                        opacity="0.6"
                        initial={{ scale: 0 }}
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <motion.circle
                        cx={`${point.x}%`}
                        cy={`${point.y}%`}
                        r="8"
                        fill="none"
                        stroke="var(--star-color)"
                        strokeWidth="0.4"
                        opacity="0.3"
                        initial={{ scale: 0 }}
                        animate={{ scale: [1, 2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </>
                  )}
                </g>
              ))}
            </svg>

        {/* Single Hover Label in Center */}
        <AnimatePresence>
          {hoveredStar && !isZoomed && currentPage === 'home' && (
            <motion.div
              key={`center-label-${hoveredStar}`}
              className="center-hover-label space-mono"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              {constellationPoints.find(p => p.id === hoveredStar)?.label}
            </motion.div>
          )}
        </AnimatePresence>


      </motion.div>
    </div>
  );
};

export default ConstellationNav;
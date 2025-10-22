import React from "react";
import { motion } from "framer-motion";
import { Search, Star, Globe } from "lucide-react";

const Home = () => {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="hero-title">Yogesh P. Wagh</h1>
          <p className="hero-subtitle space-mono">
            Astrophysicist
          </p>
          <p className="hero-description">
            Can everything be descibed as a set of harmonic oscillators?
          </p>
        </motion.div>

        {/* <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="stat-item">
            <Search className="stat-icon" />
            <div>
              <h3>15+</h3>
              <p>Years of Research</p>
            </div>
          </div>
          <div className="stat-item">
            <Star className="stat-icon" />
            <div>
              <h3>50+</h3>
              <p>Published Papers</p>
            </div>
          </div>
          <div className="stat-item">
            <Globe className="stat-icon" />
            <div>
              <h3>25+</h3>
              <p>International Conferences</p>
            </div>
          </div>
        </motion.div> */}
      </div>

      <motion.div
        className="welcome-section section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        style={{
          marginTop: "50vh",
          background: "rgba(0,0,0,0.8)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2>Navigate the Constellation Above ✦</h2>
        <p>
          Hover over any star in the constellation to see its name, then click
          to explore different aspects of my astrophysical research journey.
          Each star represents a unique section of my professional universe.
        </p>
        <p
          className="space-mono"
          style={{
            textAlign: "center",
            color: "var(--accent-primary)",
            marginTop: "2rem",
          }}
        >
          ✦ Hover to reveal • Click to explore ✦
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Home;

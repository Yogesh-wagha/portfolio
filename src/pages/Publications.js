import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Users, BookOpen } from 'lucide-react';

const Publications = () => {
  const [activeTab, setActiveTab] = useState('recent');

  const recentPublications = [
    {
      title: "Stellar Evolution in Binary Systems: A Comprehensive Analysis",
      authors: "[Your Name], J. Smith, M. Johnson",
      journal: "Astrophysical Journal",
      year: "2024",
      doi: "10.1088/0004-637X/xxx/x/xxx",
      abstract: "We present a detailed study of stellar evolution in close binary systems, revealing new insights into mass transfer mechanisms and their impact on stellar lifecycles."
    },
    {
      title: "Exoplanet Atmospheres: Spectroscopic Evidence for Water Vapor",
      authors: "[Your Name], A. Davis, R. Wilson",
      journal: "Nature Astronomy",
      year: "2023",
      doi: "10.1038/s41550-023-xxxxx-x",
      abstract: "Using high-resolution spectroscopy, we detected water vapor signatures in the atmospheres of three hot Jupiter exoplanets, providing crucial data for atmospheric modeling."
    },
    {
      title: "Gravitational Wave Signatures from Neutron Star Mergers",
      authors: "K. Brown, [Your Name], L. Garcia",
      journal: "Physical Review Letters",
      year: "2023",
      doi: "10.1103/PhysRevLett.xxx.xxxxxx",
      abstract: "We analyze gravitational wave data from recent neutron star merger events, identifying unique signatures that constrain the equation of state of neutron star matter."
    }
  ];

  const selectedPublications = [
    {
      title: "Dark Matter Distribution in Galaxy Clusters",
      authors: "[Your Name], et al.",
      journal: "Monthly Notices of the Royal Astronomical Society",
      year: "2022",
      doi: "10.1093/mnras/stxx-xxxx",
      abstract: "A comprehensive study of dark matter distribution using weak lensing techniques across 50 galaxy clusters."
    },
    {
      title: "Machine Learning Applications in Stellar Classification",
      authors: "[Your Name], P. Anderson, T. Lee",
      journal: "Astronomical Journal",
      year: "2021",
      doi: "10.3847/1538-3881/abxxxx",
      abstract: "We developed a novel machine learning algorithm for automated stellar classification with 98% accuracy."
    }
  ];

  const renderPublications = (publications) => {
    return publications.map((pub, index) => (
      <motion.div
        key={index}
        className="publication-card card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        <h3 className="pub-title">{pub.title}</h3>
        <p className="pub-authors">
          <Users size={16} />
          {pub.authors}
        </p>
        <p className="pub-journal">
          <BookOpen size={16} />
          {pub.journal} ({pub.year})
        </p>
        <p className="pub-abstract">{pub.abstract}</p>
        <div className="pub-actions">
          <a href={`https://doi.org/${pub.doi}`} className="btn" target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} />
            View Paper
          </a>
        </div>
      </motion.div>
    ));
  };

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Publications</h1>

      <motion.div
        className="publication-stats section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="stats-grid">
          <div className="stat-card">
            <h3>52</h3>
            <p>Total Publications</p>
          </div>
          <div className="stat-card">
            <h3>1,247</h3>
            <p>Total Citations</p>
          </div>
          <div className="stat-card">
            <h3>23.9</h3>
            <p>Average Citations per Paper</p>
          </div>
          <div className="stat-card">
            <h3>15</h3>
            <p>h-index</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="publication-tabs"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <button
          className={`tab-button ${activeTab === 'recent' ? 'active' : ''}`}
          onClick={() => setActiveTab('recent')}
        >
          Recent Publications
        </button>
        <button
          className={`tab-button ${activeTab === 'selected' ? 'active' : ''}`}
          onClick={() => setActiveTab('selected')}
        >
          Selected Works
        </button>
      </motion.div>

      <div className="publications-content">
        {activeTab === 'recent' && renderPublications(recentPublications)}
        {activeTab === 'selected' && renderPublications(selectedPublications)}
      </div>
    </motion.div>
  );
};

export default Publications;
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Users, BookOpen } from 'lucide-react';
import { gcnCirculars as gcnData } from '../data/gcnCirculars';
import { mpecCirculars as mpecData } from '../data/mpecCirculars';

const Publications = () => {
  const [activeTab, setActiveTab] = useState('publications');
  const [circularTab, setCircularTab] = useState('gcn');
  const [gcnCirculars, setGcnCirculars] = useState([]);
  const [mpecCirculars, setMpecCirculars] = useState([]);
  const [loading, setLoading] = useState(true);

  const publications = [
    {
      title: "GRB 250704B: An Off-axis Short GRB with a Long-Lived Afterglow Plateau",
      authors: "Swain, Ahumada, Patil, Wagh et al.",
      journal: "ApJ",
      year: "2025",
      doi: "10.48550/arXiv.2509.02769",
      status: "submitted",
      abstract: "We present a detailed multi-wavelength afterglow study of the short GRB 250704B, extensively monitored in optical and near-infrared bands. Its afterglow displays an unusually long-duration plateau followed by an achromatic break and a steep decline, deviating from canonical GRB afterglows. While long plateaus are often explained by central engine activity, we find that for GRB 250704B, an energy injection model requires unreasonable parameters. The afterglow is better explained by an off-axis power-law structured jet with a narrow core () viewed at a modest angle (). A comparison with GRB 170817A shows that both events are consistent with the off-axis structured jet scenario, where the shape of the light curve is governed primarily by the geometry of the jet and the viewing angle rather than the energetics, microphysical parameters, or external density. Our results underscore the importance of incorporating the jet structure in GRB modeling."
    }
  ];

  // Load data directly from imports
  useEffect(() => {
    console.log('🔄 Loading circulars from imported data...');

    // Process GCN data
    const processedGcnData = gcnData.map(item => ({
      id: item.id,
      title: item.title,
      date: item.date,
      url: `https://gcn.nasa.gov/circulars/${item.id}`
    }));

    // Process MPEC data
    const processedMpecData = mpecData.map(item => ({
      name: item.name,
      title: item.name,
      url: item.link
    }));

    console.log('✅ GCN data loaded:', processedGcnData.length, 'items');
    console.log('✅ MPEC data loaded:', processedMpecData.length, 'items');

    setGcnCirculars(processedGcnData);
    setMpecCirculars(processedMpecData);
    setLoading(false);

    console.log('🎉 All circulars loaded successfully!');
  }, []);

  const renderPublications = (publications) => {
    return publications.map((pub, index) => (
      <motion.div
        key={index}
        className="publication-card card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        <div className="pub-header">
          <h3 className="pub-title">{pub.title}</h3>
          {pub.status && (
            <span className={`pub-status ${pub.status}`}>
              {pub.status === 'submitted' ? 'Submitted' : 'Published'}
            </span>
          )}
        </div>
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

  const renderGCNCirculars = (circulars) => {
    return (
      <div className="circulars-grid">
        {circulars.map((circular, index) => (
          <motion.div
            key={index}
            className="circular-card-compact card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
          >
            <div className="circular-header-compact">
              <span className="circular-tag gcn-tag">GCN</span>
              <h4 className="circular-title-compact">{circular.title}</h4>
            </div>
            <p className="circular-date-compact">
              <Calendar size={14} />
              {circular.date}
            </p>
            <div className="circular-actions-compact">
              <a href={circular.url} className="btn-compact circular-btn" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={14} />
                GCN {circular.id}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  const renderMinorPlanetCirculars = (circulars) => {
    return (
      <div className="circulars-grid">
        {circulars.map((circular, index) => (
          <motion.div
            key={index}
            className="circular-card-compact card mpec-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
          >
            <div className="circular-header-compact">
              <span className="circular-tag mpc-tag">MPEC</span>
              <h4 className="circular-title-compact">{circular.title}</h4>
            </div>
            <div className="circular-actions-compact">
              <a href={circular.url} className="btn-compact circular-btn" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={14} />
                {circular.name}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    );
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
            <h3>1</h3>
            <p>Total Publications</p>
          </div>
          <div className="stat-card">
            <h3>{gcnCirculars.length + mpecCirculars.length}</h3>
            <p>Number of Circulars</p>
          </div>
          <div className="stat-card">
            <h3>2</h3>
            <p>Citations</p>
          </div>
          <div className="stat-card">
            <h3>1</h3>
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
          className={`tab-button ${activeTab === 'publications' ? 'active' : ''}`}
          onClick={() => setActiveTab('publications')}
        >
          Publications
        </button>
        <button
          className={`tab-button ${activeTab === 'circulars' ? 'active' : ''}`}
          onClick={() => setActiveTab('circulars')}
        >
          Circulars
        </button>
      </motion.div>

      <div className="publications-content">
        {activeTab === 'publications' && (
          <div>
            {renderPublications(publications)}
          </div>
        )}

        {activeTab === 'circulars' && (
          <div>
            <motion.div
              className="circular-subtabs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <button
                className={`subtab-button ${circularTab === 'gcn' ? 'active' : ''}`}
                onClick={() => setCircularTab('gcn')}
              >
                GCN Circulars
              </button>
              <button
                className={`subtab-button ${circularTab === 'mpc' ? 'active' : ''}`}
                onClick={() => setCircularTab('mpc')}
              >
                Minor Planet Center
              </button>
            </motion.div>

            <div className="circulars-content">
              {loading ? (
                <div className="loading-message">Loading circulars...</div>
              ) : (
                <>
                  {circularTab === 'gcn' && (
                    gcnCirculars.length > 0 ? renderGCNCirculars(gcnCirculars) :
                      <div className="no-data-message">No GCN circulars found. Check console for errors.</div>
                  )}
                  {circularTab === 'mpc' && (
                    mpecCirculars.length > 0 ? renderMinorPlanetCirculars(mpecCirculars) :
                      <div className="no-data-message">No MPEC circulars found. Check console for errors.</div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Publications;
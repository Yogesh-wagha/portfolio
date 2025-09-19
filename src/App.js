import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ConstellationNav from './components/ConstellationNav';
import StarField from './components/StarField';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Home';
import About from './pages/About';
import Publications from './pages/Publications';
import Gallery from './pages/Gallery';
import Conferences from './pages/Conferences';
import Events from './pages/Events';
import CV from './pages/CV';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'publications':
        return <Publications />;
      case 'gallery':
        return <Gallery />;
      case 'conferences':
        return <Conferences />;
      case 'events':
        return <Events />;
      case 'cv':
        return <CV />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <StarField theme={theme} />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
      {/* Show constellation navigation */}
      <ConstellationNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* Show page content only when not on home */}
      {currentPage !== 'home' && (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            className="page-wrapper"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      )}
      
      {/* Show home content when on home page */}
      {currentPage === 'home' && (
        <motion.div
          className="home-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Home />
        </motion.div>
      )}
    </div>
  );
}

export default App;
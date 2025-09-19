import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Andromeda Galaxy M31",
      description: "High-resolution image of our nearest galactic neighbor",
      category: "Deep Space",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Orion Nebula",
      description: "Star-forming region in the constellation Orion",
      category: "Nebulae",
      image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Saturn's Rings",
      description: "Detailed view of Saturn's magnificent ring system",
      category: "Planetary",
      image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Milky Way Core",
      description: "The galactic center as seen from Earth",
      category: "Deep Space",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "Eagle Nebula",
      description: "The famous 'Pillars of Creation' star formation region",
      category: "Nebulae",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Jupiter's Great Red Spot",
      description: "The massive storm system on Jupiter",
      category: "Planetary",
      image: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=800&h=600&fit=crop"
    }
  ];

  const categories = ['All', 'Deep Space', 'Nebulae', 'Planetary'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Astrophotography Gallery</h1>

      <motion.div
        className="gallery-filters"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <motion.div
        className="gallery-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="gallery-item"
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(item)}
            >
              <div className="gallery-image-container">
                <img src={item.image} alt={item.title} className="gallery-image" />
                <div className="gallery-overlay">
                  <ZoomIn size={24} />
                </div>
              </div>
              <div className="gallery-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="category-tag">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal for enlarged image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="image-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-modal"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <img src={selectedImage.image} alt={selectedImage.title} />
              <div className="modal-info">
                <h2>{selectedImage.title}</h2>
                <p>{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
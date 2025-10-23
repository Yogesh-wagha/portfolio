import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Camera } from 'lucide-react';

// Import your mobile photography images
import starryNight from '../assets/images/gallery/starry-night.jpg';
import meteorShower from '../assets/images/gallery/meteor-shower.jpg';
import moonPhoto from '../assets/images/gallery/moon-photo.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Mobile Photography Images - Your actual astrophotography
  const mobilePhotography = [
    {
      id: 1,
      title: "Starry Night Sky",
      description: "Night sky photography capturing the beauty of stars with silhouetted tree",
      category: "Mobile Photography",
      image: starryNight
    },
    {
      id: 2,
      title: "Meteor Streak",
      description: "Captured a meteor streak across the night sky during a meteor shower",
      category: "Mobile Photography",
      image: meteorShower
    },
    {
      id: 3,
      title: "Moon Close-up",
      description: "Detailed lunar surface captured through mobile phone telescope attachment",
      category: "Mobile Photography",
      image: moonPhoto
    }
  ];

  const categories = ['All', 'Mobile Photography', 'Professional Photography'];
  const [activeCategory, setActiveCategory] = useState('All');

  const getFilteredItems = () => {
    if (activeCategory === 'All') {
      return mobilePhotography;
    } else if (activeCategory === 'Mobile Photography') {
      return mobilePhotography;
    } else if (activeCategory === 'Professional Photography') {
      return []; // Empty array for now
    }
    return [];
  };

  const filteredItems = getFilteredItems();

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Gallery</h1>

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
        className="gallery-grid-custom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <AnimatePresence>
          {activeCategory === 'Professional Photography' ? (
            <motion.div
              className="coming-soon-message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Camera size={48} />
              <h3>Professional Photography</h3>
              <p>Come back soon for professional DSLR captures!</p>
            </motion.div>
          ) : (
            filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="gallery-item-custom"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(item)}
              >
                <div className="gallery-image-container-custom">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-image-custom"
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIExvYWRpbmc8L3RleHQ+PC9zdmc+';
                    }}
                  />
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
            ))
          )}
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
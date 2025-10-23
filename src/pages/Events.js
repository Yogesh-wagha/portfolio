import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Star } from 'lucide-react';

// Import images directly from src/assets
import vigyanSamagamImg from '../assets/images/vigyan-samagam-2019.jpg';

const Events = () => {
  // Debug: Check PUBLIC_URL
  console.log('PUBLIC_URL:', process.env.PUBLIC_URL);
  console.log('Full image path:', `${process.env.PUBLIC_URL}/images/events/vigyan-samagam-2019.jpg`);
  // const upcomingEvents = [
  //   {
  //     title: "Public Lecture: The Search for Life Beyond Earth",
  //     date: "2024-10-15",
  //     time: "7:00 PM",
  //     location: "University Auditorium",
  //     type: "Public Lecture",
  //     description: "Join me for an engaging discussion about the latest discoveries in exoplanet research and the ongoing search for extraterrestrial life."
  //   },
  //   {
  //     title: "Graduate Student Seminar Series",
  //     date: "2024-10-22",
  //     time: "3:00 PM",
  //     location: "Physics Department",
  //     type: "Academic Seminar",
  //     description: "A technical presentation on stellar evolution models for graduate students and faculty."
  //   },
  //   {
  //     title: "Astronomy Night at the Observatory",
  //     date: "2024-11-05",
  //     time: "8:00 PM",
  //     location: "University Observatory",
  //     type: "Public Outreach",
  //     description: "Stargazing event with telescope observations and informal discussions about current astronomical research."
  //   }
  // ];

  const outreachEvents = [
    {
      title: "Vigyan Samagam Mega Science Exhibition",
      date: "1st June, 2019",
      duration: "7 days",
      location: "Mumbai",
      type: "Science Exhibition",
      description: "Volunteered for 7 days representing the LIGO-India team at this mega science exhibition. Engaged with visitors about gravitational wave detection and LIGO's groundbreaking discoveries.",
      attendance: "200,000+ visitors",
      role: "LIGO-India Representative",
      hasPhoto: true,
      photoPath: vigyanSamagamImg
    },
    {
      title: "Technovanza - LIGO-India Outreach",
      date: "11th Jan, 2024",
      duration: "2 days",
      location: "VJTI, Mumbai",
      type: "Technical Festival",
      description: "Represented LIGO-India at Technovanza, one of India's premier technical festivals. Conducted interactive sessions about gravitational wave astronomy and LIGO's scientific achievements.",
      attendance: "Festival attendees",
      role: "LIGO-India Representative",
      hasPhoto: false
    },
    {
      title: "Techfest - LIGO-India & Daksha Booth",
      date: "17th Dec, 2024",
      duration: "2 days",
      location: "IIT Bombay",
      type: "Technical Festival",
      description: "Represented both LIGO-India and Daksha projects at Asia's largest science and technology festival. Showcased cutting-edge research in gravitational wave detection and space-based astronomy missions.",
      attendance: "180,000+ visitors",
      role: "LIGO-India & Daksha Representative",
      hasPhoto: false,
      // photoPath: `${process.env.PUBLIC_URL}/images/events/techfest-2024.jpg`
    }
  ];

  const speakingEvents = [
    {
      title: "Careers in Astronomy",
      date: "7th Aug, 2025",
      location: "IIT Bombay",
      organizer: "Krittika Astro Club",
      type: "Career Talk",
      description: "Delivered a talk about career opportunities in astronomy and astrophysics research for undergraduate students.",
      youtubeLink: "https://youtu.be/7rjXMuidHvg?si=hs5UYPEtToWYeNj2", // Replace with actual link
      hasVideo: true
    }
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const renderOutreachCard = (event, index) => (
    <motion.div
      key={index}
      className="event-card card"
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

      {event.hasPhoto && (
        <div className="event-photo">
          <img
            src={event.photoPath}
            alt={event.title}
            className="event-image"
            onLoad={() => console.log(`✅ Image loaded: ${event.photoPath}`)}
            onError={(e) => {
              console.error(`❌ Image failed to load: ${event.photoPath}`);
              // Show a placeholder or hide the image
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
              e.target.style.display = 'block';
            }}
          />
        </div>
      )}

      <div className="event-details">
        <div className="detail-item">
          <Calendar size={16} />
          <span>{event.date}</span>
        </div>
        <div className="detail-item">
          <Clock size={16} />
          <span>{event.duration}</span>
        </div>
        <div className="detail-item">
          <MapPin size={16} />
          <span>{event.location}</span>
        </div>
        <div className="detail-item">
          <Users size={16} />
          <span>{event.attendance}</span>
        </div>
        <div className="detail-item">
          <Star size={16} />
          <span>{event.role}</span>
        </div>
      </div>

      <p className="event-description">{event.description}</p>
    </motion.div>
  );

  const renderSpeakingCard = (event, index) => (
    <motion.div
      key={index}
      className="event-card card"
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
          <span>{event.date}</span>
        </div>
        <div className="detail-item">
          <MapPin size={16} />
          <span>{event.location}</span>
        </div>
        <div className="detail-item">
          <Users size={16} />
          <span>{event.organizer}</span>
        </div>
      </div>

      <p className="event-description">{event.description}</p>

      {event.hasVideo && (
        <a
          href={event.youtubeLink}
          className="btn event-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on YouTube
        </a>
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

      {/* Upcoming Events - Commented out for future use
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
      */}

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2>Public Outreach Activities</h2>
        <div className="events-grid">
          {outreachEvents.map((event, index) =>
            renderOutreachCard(event, index)
          )}
        </div>
      </motion.div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2>Speaking Engagements</h2>
        <div className="events-grid">
          {speakingEvents.map((event, index) =>
            renderSpeakingCard(event, index)
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Events;
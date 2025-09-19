import React from 'react';
import { motion } from 'framer-motion';
import { Download, GraduationCap, Briefcase, Award, BookOpen } from 'lucide-react';

const CV = () => {
  const education = [
    {
      degree: "Ph.D. in Astrophysics",
      institution: "[University Name]",
      year: "2008",
      details: "Dissertation: 'Stellar Evolution in Close Binary Systems'"
    },
    {
      degree: "M.S. in Physics",
      institution: "[University Name]",
      year: "2004",
      details: "Thesis: 'Computational Models of Stellar Atmospheres'"
    },
    {
      degree: "B.S. in Physics, Magna Cum Laude",
      institution: "[University Name]",
      year: "2002",
      details: "Minor in Mathematics, Phi Beta Kappa"
    }
  ];

  const experience = [
    {
      position: "Professor of Astrophysics",
      institution: "[Current University]",
      period: "2018 - Present",
      details: [
        "Lead research group of 8 graduate students and 3 postdocs",
        "Principal Investigator on $2.5M NSF grant",
        "Published 25+ peer-reviewed papers"
      ]
    },
    {
      position: "Associate Professor",
      institution: "[Previous University]",
      period: "2012 - 2018",
      details: [
        "Developed new course curriculum for undergraduate astronomy",
        "Established international collaboration with ESO",
        "Mentored 15 graduate students to completion"
      ]
    },
    {
      position: "Postdoctoral Research Fellow",
      institution: "[Research Institute]",
      period: "2008 - 2012",
      details: [
        "Hubble Space Telescope Fellow",
        "Specialized in exoplanet detection methods",
        "Co-authored 18 publications"
      ]
    }
  ];

  const awards = [
    "Outstanding Faculty Award (2023)",
    "NASA Early Career Investigator Award (2019)",
    "American Astronomical Society Pierce Prize (2017)",
    "Hubble Fellowship (2008-2011)",
    "Graduate Student Research Award (2007)"
  ];

  const skills = [
    "Observational Astronomy",
    "Data Analysis & Statistics",
    "Python, IDL, MATLAB",
    "Machine Learning",
    "Telescope Operations",
    "Grant Writing",
    "Scientific Writing",
    "Public Speaking"
  ];

  const handleDownload = () => {
    // In a real application, this would trigger a download of the actual CV PDF
    alert('CV download would start here. Please contact me directly for the latest version.');
  };

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="cv-header">
        <h1 className="page-title">Curriculum Vitae</h1>
        <motion.button
          className="download-btn btn"
          onClick={handleDownload}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Download size={20} />
          Download Full CV (PDF)
        </motion.button>
      </div>

      <div className="cv-content">
        <motion.div
          className="cv-section section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2>
            <GraduationCap size={24} />
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="cv-item">
              <div className="cv-item-header">
                <h3>{edu.degree}</h3>
                <span className="cv-year">{edu.year}</span>
              </div>
              <p className="cv-institution">{edu.institution}</p>
              <p className="cv-details">{edu.details}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="cv-section section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2>
            <Briefcase size={24} />
            Professional Experience
          </h2>
          {experience.map((exp, index) => (
            <div key={index} className="cv-item">
              <div className="cv-item-header">
                <h3>{exp.position}</h3>
                <span className="cv-period">{exp.period}</span>
              </div>
              <p className="cv-institution">{exp.institution}</p>
              <ul className="cv-details-list">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className="cv-grid">
          <motion.div
            className="cv-section section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2>
              <Award size={24} />
              Awards & Honors
            </h2>
            <ul className="awards-list">
              {awards.map((award, index) => (
                <li key={index}>{award}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="cv-section section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h2>
              <BookOpen size={24} />
              Key Skills
            </h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="cv-section section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <h2>Research Summary</h2>
          <p>
            My research focuses on understanding stellar evolution, particularly in binary star systems, 
            and the detection and characterization of exoplanets. I have extensive experience with 
            ground-based and space-based observations, computational modeling, and data analysis techniques. 
            My work has contributed to our understanding of how stars evolve, how planets form, and the 
            potential for life beyond our solar system.
          </p>
          <p>
            I am committed to excellence in both research and education, having mentored numerous students 
            and contributed to curriculum development. My outreach efforts aim to make astronomy accessible 
            to the broader public and inspire the next generation of scientists.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CV;
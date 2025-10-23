import { motion } from 'framer-motion';
import { Download, GraduationCap, Briefcase, Award, BookOpen } from 'lucide-react';

const CV = () => {
  const education = [
    {
      degree: "Ph.D. in Astrophysics (Pursuing)",
      institution: "Liverpool John Moores University",
      year: "Aug 2029 (Subjected to change)",
      details: "Dissertation: 'Time Domain Astronomy'"
    },
    {
      degree: "M.Sc. in Physics",
      institution: "Indian Institute of Technology Bombay",
      year: "Aug 2024",
      details: "Thesis: 'Transient Astronomy with the GROWTH-India Telescope'"
    },
    {
      degree: "B.Tech. in Mechanical Engineering",
      institution: "Veermata Jijabai Technological Institute, Mumbai",
      year: "Feb 2021 ",
      details: "BAJA SAEINDIA 2019, Enduro Student India 2019"
    }
  ];

  // const experience = [
  //   {
  //     position: "Professor of Astrophysics",
  //     institution: "[Current University]",
  //     period: "2018 - Present",
  //     details: [
  //       "Lead research group of 8 graduate students and 3 postdocs",
  //       "Principal Investigator on $2.5M NSF grant",
  //       "Published 25+ peer-reviewed papers"
  //     ]
  //   },
  //   {
  //     position: "Associate Professor",
  //     institution: "[Previous University]",
  //     period: "2012 - 2018",
  //     details: [
  //       "Developed new course curriculum for undergraduate astronomy",
  //       "Established international collaboration with ESO",
  //       "Mentored 15 graduate students to completion"
  //     ]
  //   },
  //   {
  //     position: "Postdoctoral Research Fellow",
  //     institution: "[Research Institute]",
  //     period: "2008 - 2012",
  //     details: [
  //       "Hubble Space Telescope Fellow",
  //       "Specialized in exoplanet detection methods",
  //       "Co-authored 18 publications"
  //     ]
  //   }
  // ];

  // const awards = [
  //   "Outstanding Faculty Award (2023)",
  //   "NASA Early Career Investigator Award (2019)",
  //   "American Astronomical Society Pierce Prize (2017)",
  //   "Hubble Fellowship (2008-2011)",
  //   "Graduate Student Research Award (2007)"
  // ];

  const researchProjects = [
    {
      title: "Transient Astronomy with GIT : Hunting NEOs",
      period: "May 2023 - Dec 2023",
      description: "During my master’s studies, I worked extensively in observational astrophysics, particularly the study of transient sources, using the GROWTH-India Telescope (GIT), which is part of the Global Relay of Observatories Watching Transients Happen (GROWTH) network. Under the guidance of Prof. Varun Bhalerao, my thesis focused on the detection of Near-Earth Objects (NEOs), such as asteroids and comets. I contributed to the development of Astreaks (K. Sharma et al., 2023), a software tool that automates astrometry and photometry of NEOs observed in non-sidereal mode. My work involved Python-based data analysis, astrometry, and photometry, enabling the submission of measured NEOs to the Minor Planet Center for validation and publication. In addition, as part of the ZTF ZStreaks collaboration, I actively scanned thousands of deep-learning–vetted streak candidates for potential NEOs and contributed to the detection of 36 NEOs. These experiences equipped me with key skills in image reduction, photometry, and astrometry, forming a strong foundation for my continued involvement in observational astronomy.",
      technologies: ["Python", "Photometry", "Astrometry", "Data Pipeline Development"]
    },
    {
      title: "Transient Astronomy with GIT : GRB Afterglows",
      period: "Jan 2024 - Present",
      description: "Motivated by an interest in high-energy astrophysics, I undertook a second master’s thesis project, also supervised by Prof. Varun Bhalerao, this time focusing on Gamma-Ray Burst (GRB) afterglows. The project began with reproducing light-curve modeling of previously studied GRBs from the group. I used Python-based tools such as AfterglowPy and Emcee, which implement Markov Chain Monte Carlo (MCMC) techniques for parameter estimation. By analyzing both X-ray and optical data, I fitted observational light curves to theoretical afterglow models to infer physical parameters of GRB environments. In collaboration with a graduate student (V. Swain), I worked on interpreting GRB light curves to derive insight into their source properties; this work recently led to a co-authored publication on GRB 250704B. I also contributed to electromagnetic follow-up of gravitational-wave events using GIT, where I employed an image subtraction pipeline to identify candidate optical counterparts. These efforts led to several GCN circulars and strengthened my expertise in high-energy astrophysics, time-domain astronomy, and Bayesian inference techniques for data analysis.",
      technologies: ["AfterglowPy", "Emcee", "MultiNest", "jetsimpy"]
    },
    {
      title: "LUMOS : Linear programming Utility for Multi-messenger Optical Scheduling",
      period: "Aug 2024 - May 2025",
      description: "After my master’s, I collaborated with Prof. Michael Coughlin (University of Minnesota) and Dr. Leo Singer (University of Maryland & NASA GSFC) to develop LUMOS, a Mixed Integer Linear Programming (MILP)-based scheduler for telescope follow-up of multi-messenger events such as gravitational-wave and neutrino alerts. I designed the scheduling framework to maximize probability-weighted sky coverage while incorporating revisit cadence and filter sequencing constraints to improve observational efficiency. Implemented using industry-grade solvers such as IBM CPLEX, LUMOS was benchmarked against GWEMOPT and produced significantly better schedules for nearly all skymaps tested. This work demonstrates practical applicability for wide-field survey facilities like ZTF and DECam, enabling more efficient real-time follow-up of transient astrophysical transients.",
      technologies: ["MILP", "Observation Schedules", "IBM-CPLEX"]
    }
  ];

  const skills = [
    "Observational Astronomy",
    "Data Analysis & Statistics",
    "Python",
    // "Machine Learning",
    "Telescope Operations",
    // "Grant Writing",
    "Scientific Writing",
    // "Public Speaking"
  ];

  const handleDownload = () => {
    // Direct link to Overleaf PDF
    window.open('https://drive.google.com/file/d/1w6dLFd1LE4JDk_xMiODlaF1-SObs6IIo/view?usp=sharing', '_blank');
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
        <motion.button
          className="download-btn btn cv-download-btn"
          onClick={handleDownload}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Download size={20} />
          Download CV     
        </motion.button>
        <h1 className="page-title cv-title-center">Curriculum Vitae</h1>
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

        {/* Professional Experience - Commented out for future use
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
        */}

        <motion.div
          className="cv-section section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2>
            <BookOpen size={24} />
            Research Projects
          </h2>
          {researchProjects.map((project, index) => (
            <div key={index} className="cv-item">
              <div className="cv-item-header">
                <h3>{project.title}</h3>
                <span className="cv-period">{project.period}</span>
              </div>
              <p className="cv-details">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="skill-tag-tech">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="cv-grid">
          {/* Awards & Honors - Commented out for future use
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
          */}

          <motion.div
            className="cv-section section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
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
            My research experience spans observational astronomy, transient follow-up, and algorithms
            for observation schedules. I have worked on identifying and characterising optical transients, 
            including NEOs and GRB afterglows, using image reduction, astrometry, photometry, and Bayesian modelling 
            techniques. I have also been involved in real-time follow-up of multi-messenger events and developed 
            optimisation algorithms for improving telescope scheduling and survey efficiency. This combination of 
            observational expertise and algorithmic development reflects my broader interest in bridging data 
            analysis with instrumentation-driven astronomy.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CV;
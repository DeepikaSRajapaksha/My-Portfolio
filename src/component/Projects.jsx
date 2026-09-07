import React, { useState } from 'react';
import '../css/Projects.css';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'My Portfolio: Showcasing Innovation and Design',
      image: require('../assets/img/My-portfolio.png'),
      description: `Welcome to my portfolio, where I share my passion for UI/UX design, front-end development, and software development. As a Computing and Information Systems student, I specialize in creating user-centric digital experiences that seamlessly blend functionality with aesthetics.

Throughout my projects, I focus on delivering intuitive designs that not only meet user needs but also enhance the overall experience. From designing innovative platforms like BINVESTO to developing dynamic, interactive web applications, I aim to create solutions that drive growth and improve user satisfaction.

Explore my portfolio to discover my journey in web development and design, and how I continuously refine my skills to craft effective, beautiful digital products.`,
      category: 'Website',
      githubLink: 'https://github.com/DeepikaRajapaksha/My-Portfolio',
    },

    {
      id: 2,
      title: 'BINVESTO: Bridging Businesses and Investors',
      image: require('../assets/img/ecommerce.png'),
      description: `BINVESTO is a digital platform designed to connect small-scale businesses in Sri Lanka with potential investors in a fast, secure, and efficient manner.

Key Features:

Simplified Investment Process: Businesses can create and publish investment ads, while investors can browse, filter, and respond seamlessly.

Comprehensive Support Services: Integrated tools like a Help Center and AI chatbot ensure smooth user experiences and satisfaction.

Empowering Growth: Focused on fostering economic development by bridging the gap between entrepreneurs and investors.

This project balances functionality and aesthetics to deliver an intuitive, visually engaging interface that supports both businesses and investors in achieving their goals.`,
      category: 'Figma Design',
      githubLink: 'https://www.behance.net/gallery/215612497/BINVESTO',
    },

    {
      id: 4,
      title: 'Re-Design Mobitel Selfcare App',
      image: require('../assets/img/Mobitel.png'),
      description: `Mobitel Selfcare App – Redesign

This project focuses on redesigning the Mobitel Selfcare App to improve usability and user experience. The previous design had issues with complex navigation, an overloaded dashboard, and lack of personalization.

Through user research, wireframing, prototyping, and usability testing, I developed a cleaner, more intuitive interface.

Key Improvements:

✅ Simplified navigation for better accessibility
✅ Clean and modern UI for improved readability
✅ Dark mode for enhanced user comfort
✅ Personalized dashboard with quick access to essential features`,
      category: 'Figma Design',
      githubLink: 'https://www.behance.net/gallery/219476403/Re-Design-Mobitel-Selfcare-App',
    },

    {
      id: 3,
      title: 'AgriZone: Revolutionizing Agricultural Trade',
      image: require('../assets/img/mobile_app.png'),
      description: `AgriZone is a Smart Agricultural Marketplace app designed to bridge the gap between farmers and buyers. By leveraging technology, this platform empowers farmers with real-time market data and predictive tools, enabling them to optimize crop sales and adopt sustainable practices.

Key Features:

Market Insights & Predictions: Provides farmers with real-time data on crop prices and demand, helping them determine the best time to sell.

Seamless Connections: Facilitates direct communication and transactions between farmers and buyers, fostering transparency and trust.

Sustainability Support: Encourages environmentally friendly farming practices through accessible resources and recommendations.

My Role:

Conducted comprehensive user research to understand the needs of farmers and buyers.

Designed an intuitive and user-friendly UI/UX that ensures a seamless user experience.

Focused on creating a visually appealing interface while maintaining functionality and clarity.

Impact:

AgriZone aims to transform the agricultural landscape by promoting smarter trade practices, reducing market inefficiencies, and strengthening producer-consumer relationships.`,
      category: 'App',
      githubLink: 'https://www.behance.net/gallery/215800165/AgriZone',
    },
  ];

  const categories = ['All', 'Figma Design', 'Website', 'App'];

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === 'All' ||
      project.category === selectedCategory
  );

  const visibleProjects = showMore
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="projects-section">

      {/* Background glow */}
      <div className="projects-glow projects-glow-one"></div>
      <div className="projects-glow projects-glow-two"></div>

      <div className="projects-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="projects-header">

          <div className="projects-label">
            <span className="projects-label-line"></span>
            <span>MY PROJECTS</span>
          </div>

          <h2 className="projects-title">
            Ideas transformed into
            <span> digital experiences.</span>
          </h2>

          <p className="projects-intro">
            A collection of projects where I combine creativity,
            technology, and user-centered thinking to build
            meaningful digital solutions.
          </p>

        </div>


        {/* =========================================
            CATEGORY FILTER
        ========================================= */}

        <div className="project-filters">

          {categories.map((category) => (
            <button
              key={category}
              className={`project-filter ${
                selectedCategory === category ? 'active' : ''
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setShowMore(false);
              }}
            >
              {category}
            </button>
          ))}

        </div>


        {/* =========================================
            PROJECT GRID
        ========================================= */}

        <div className="projects-grid">

          {visibleProjects.map((project, index) => (

            <article
              className="project-card"
              key={project.id}
              onClick={() => setSelectedProject(project)}
              style={{ '--project-index': index }}
            >

              {/* Image */}
              <div className="project-image-wrapper">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  draggable="false"
                />

                <div className="project-image-overlay"></div>

                <div className="project-number">
                  {String(project.id).padStart(2, '0')}
                </div>

                <div className="project-view">
                  <span>View Project</span>
                  <span className="project-arrow">↗</span>
                </div>

              </div>


              {/* Content */}
              <div className="project-content">

                <div className="project-category">
                  {project.category}
                </div>

                <h3 className="project-title">
                  {project.title}
                </h3>

                <div className="project-card-footer">

                  <span>EXPLORE PROJECT</span>

                  <span className="project-card-arrow">
                    →
                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* =========================================
            EMPTY STATE
        ========================================= */}

        {visibleProjects.length === 0 && (
          <div className="projects-empty">
            <span>NO PROJECTS FOUND</span>
          </div>
        )}


        {/* =========================================
            SHOW MORE
        ========================================= */}

        {filteredProjects.length > 3 && (
          <div className="projects-more">

            <button
              className="projects-more-button"
              onClick={() => setShowMore(!showMore)}
            >
              <span>
                {showMore ? 'Show Less' : 'Show More'}
              </span>

              <span className={`more-arrow ${showMore ? 'rotate' : ''}`}>
                ↓
              </span>
            </button>

          </div>
        )}


        {/* =========================================
            BOTTOM LINE
        ========================================= */}

        <div className="projects-bottom">

          <div className="projects-bottom-line"></div>

          <div className="projects-bottom-text">
            <span className="projects-status"></span>
            <span>DESIGN • DEVELOP • CREATE</span>
          </div>

          <div className="projects-bottom-line"></div>

        </div>

      </div>


      {/* =========================================
          PROJECT MODAL
      ========================================= */}

      {selectedProject && (

        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >

          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close */}
            <button
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project"
            >
              ×
            </button>


            {/* Modal image */}
            <div className="modal-image-wrapper">

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-project-image"
              />

            </div>


            {/* Modal content */}
            <div className="modal-content">

              <div className="modal-category">
                {selectedProject.category}
              </div>

              <h3>
                {selectedProject.title}
              </h3>

              <div className="modal-description">
                {selectedProject.description}
              </div>


              {selectedProject.githubLink && (

                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-view-button"
                >
                  <span>View Project</span>
                  <span>↗</span>
                </a>

              )}

            </div>

          </div>

        </div>

      )}

    </section>
  );
};

export default Projects;
import React from 'react';
import '../css/Home.css';

const Home = () => {
  return (
    <section className="home" id="top">

      {/* Background Effects */}
      <div className="home-glow home-glow-1"></div>
      <div className="home-glow home-glow-2"></div>

      <div className="home-orbit-bg orbit-bg-1"></div>
      <div className="home-orbit-bg orbit-bg-2"></div>

      {/* Small particles */}
      <div className="home-particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>


      <div className="home-container">

        {/* =====================================
            LEFT CONTENT
        ====================================== */}

        <div className="home-content">

          {/* Availability */}
          <div className="availability">
            <span className="availability-dot"></span>
            <span>Available for opportunities</span>
          </div>


          {/* Intro */}
          <div className="home-intro">
            <p className="hello-text">
              Hi, I'm
            </p>

            <h1>
              Deepika <span>Sewwandi</span>
            </h1>
          </div>


          {/* Main Heading */}
          <h2 className="home-title">
            Creating
            <span> Digital Experiences</span>
            <br />
            That Make an Impact.
          </h2>


          {/* Description */}
          <p className="home-description">
            I'm a Computing and Information Systems undergraduate with a passion
            for web development, problem solving and turning ideas
            into real digital solutions.
          </p>


          {/* Feature Info */}
          <div className="home-features">

            <div className="feature-item">
              <div className="feature-icon">⌘</div>
              <div>
                <strong>Information Systems</strong>
                <span>Undergraduate</span>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">&lt;/&gt;</div>
              <div>
                <strong>Full-Stack</strong>
                <span>Developer</span>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">♡</div>
              <div>
                <strong>UI/UX</strong>
                <span>Enthusiast</span>
              </div>
            </div>

          </div>


          {/* Buttons */}
          <div className="home-buttons">

            <a href="#projects" className="primary-btn">
              <span>View My Work</span>
              <span className="btn-arrow">↗</span>
            </a>

            <a href="#contact" className="secondary-btn">
              <span className="mail-icon">✉</span>
              <span>Contact Me</span>
            </a>

          </div>

        </div>


        {/* =====================================
            RIGHT PHOTO AREA
        ====================================== */}

        <div className="home-visual">

          {/* Outer orbit */}
          <div className="orbit orbit-outer"></div>

          {/* Middle orbit */}
          <div className="orbit orbit-middle"></div>

          {/* Inner glowing circle */}
          <div className="photo-ring"></div>


          {/* Decorative orbital line */}
          <div className="orbital-line orbital-line-1"></div>
          <div className="orbital-line orbital-line-2"></div>


          {/* =================================
              PHOTO
          ================================== */}

          <div className="photo-wrapper">

            {/* Replace this image */}
            <img
              src={require('../assets/img/my-image.jpeg')}
              alt="Deepika Sewwandi"
              className="profile-photo"
            />

          </div>


          {/* =================================
              TECHNOLOGY FLOATING CARDS
          ================================== */}

          <div className="tech-card tech-react">
            <div className="tech-icon react-icon">⚛</div>
            <span>React</span>
          </div>


          <div className="tech-card tech-js">
            <div className="tech-icon js-icon">JS</div>
            <span>JavaScript</span>
          </div>


          <div className="tech-card tech-css">
            <div className="tech-icon css-icon">3</div>
            <span>CSS</span>
          </div>


          <div className="tech-card tech-html">
            <div className="tech-icon html-icon">5</div>
            <span>HTML</span>
          </div>


          <div className="tech-card tech-node">
            <div className="tech-icon node-icon">N</div>
            <span>Node.js</span>
          </div>


          <div className="tech-card tech-figma">
            <div className="tech-icon figma-icon">F</div>
            <span>Figma</span>
          </div>


          {/* Small glowing sphere */}
          <div className="floating-sphere"></div>

        </div>

      </div>


      {/* =====================================
          SCROLL INDICATOR
      ====================================== */}

      <a href="#aboutme" className="scroll-indicator">

        <div className="mouse">
          <div className="mouse-wheel"></div>
        </div>

        <span>Scroll to explore</span>

        <div className="scroll-line"></div>

      </a>

    </section>
  );
};

export default Home;
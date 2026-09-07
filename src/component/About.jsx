import React from 'react';
import '../css/About.css';

const About = () => {
  return (
    <section className="about-section" id="aboutme">

      {/* Background glow */}
      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>


      <div className="about-container">

        {/* =========================================
            LEFT SIDE
           ========================================= */}

        <div className="about-content">

          <div className="about-label">
            <span className="about-label-line"></span>
            <span>ABOUT ME</span>
          </div>


          <h2 className="about-title">
            Turning ideas into
            <span> meaningful digital experiences.</span>
          </h2>


          <p className="about-description">
            I'm Deepika Sewwandi, a Computing and Information Systems undergraduate
            passionate about creating modern, meaningful, and
            user-focused digital experiences.
          </p>


          <p className="about-description">
            I enjoy working at the intersection of technology,
            creativity, and problem-solving. From designing
            intuitive interfaces to developing practical software
            solutions, I love transforming ideas into experiences
            that are both useful and visually engaging.
          </p>


          {/* Tags */}
          <div className="about-tags">

            <span>UI / UX</span>
            <span>Web Development</span>
            <span>Information Systems</span>
            <span>Creative Technology</span>

          </div>


          {/* Small quote */}
          <div className="about-quote">

            <span className="quote-line"></span>

            <p>
              "Always learning. Always creating.
              Always moving forward."
            </p>

          </div>

        </div>


        {/* =========================================
            RIGHT SIDE — MY APPROACH
        ========================================= */}

        <div className="about-visual">

        <div className="approach-card">

            {/* Card heading */}
            <div className="approach-header">

            <div>
                <span className="approach-mini-label">
                MY APPROACH
                </span>

                <h3>
                How I turn ideas
                <span>into solutions.</span>
                </h3>
            </div>

            <span className="approach-number">
                01—03
            </span>

            </div>


            {/* Journey */}
            <div className="approach-list">

            {/* 01 */}
            <div className="approach-item">

                <div className="approach-index">
                01
                </div>

                <div className="approach-line">
                <span></span>
                </div>

                <div className="approach-text">

                <span className="approach-label">
                    DISCOVER
                </span>

                <h4>
                    Understand
                    <span> the problem.</span>
                </h4>

                <p>
                    I begin by understanding people, requirements,
                    and the real problem behind an idea.
                </p>

                </div>

            </div>


            {/* 02 */}
            <div className="approach-item">

                <div className="approach-index">
                02
                </div>

                <div className="approach-line">
                <span></span>
                </div>

                <div className="approach-text">

                <span className="approach-label">
                    CREATE
                </span>

                <h4>
                    Design &
                    <span> build.</span>
                </h4>

                <p>
                    I combine technology, creativity, and thoughtful
                    design to transform ideas into practical solutions.
                </p>

                </div>

            </div>


            {/* 03 */}
            <div className="approach-item">

                <div className="approach-index">
                03
                </div>

                <div className="approach-line">
                <span></span>
                </div>

                <div className="approach-text">

                <span className="approach-label">
                    IMPROVE
                </span>

                <h4>
                    Learn &
                    <span> evolve.</span>
                </h4>

                <p>
                    Every project is an opportunity to learn,
                    improve, and create something better.
                </p>

                </div>

            </div>

            </div>


            {/* Bottom statement */}
            <div className="approach-footer">

            <span className="approach-footer-dot"></span>

            <p>
                Curious mind. Creative thinker. Continuous learner.
            </p>

            </div>


            {/* Decorative elements */}
            <div className="approach-decoration"></div>

        </div>

        </div>

      </div>
      
    </section>
  );
};

export default About;
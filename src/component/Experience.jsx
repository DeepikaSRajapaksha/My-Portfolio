import "../css/Experience.css";
import experience1 from "../assets/img/experince1.jpg";
import experience2 from "../assets/img/experince2.jpg";
import experience3 from "../assets/img/experince3.jpg";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        {/* =========================================
            LEFT SIDE - PHOTO COLLAGE
           ========================================= */}
        <div className="experience-visual">

          <div className="experience-glow"></div>

          {/* Decorative line */}
          <div className="experience-line"></div>

          {/* Photo 01 */}
          <div className="experience-photo experience-photo-1">
            <img
              src={experience2}
              alt="Experience"
              draggable="false"
            />

            <div className="photo-number">01</div>
          </div>

          {/* Photo 02 */}
          <div className="experience-photo experience-photo-2">
            <img
              src={experience1}
              alt="Experience"
              draggable="false"
            />

            <div className="photo-number">02</div>
          </div>

          {/* Photo 03 */}
          <div className="experience-photo experience-photo-3">
            <img
              src={experience3}
              alt="Experience"
              draggable="false"
            />

            <div className="photo-number">03</div>
          </div>

          {/* Small decorative elements */}
          <div className="experience-dot experience-dot-1"></div>
          <div className="experience-dot experience-dot-2"></div>

        </div>


        {/* =========================================
            RIGHT SIDE - CONTENT
           ========================================= */}
        <div className="experience-content">

          <div className="experience-label">
            <span className="label-line"></span>
            <span>EXPERIENCE</span>
          </div>

          <h2 className="experience-title">
            Building Ideas Into
            <span> Digital Experiences.</span>
          </h2>

          <p className="experience-intro">
            My experience is shaped by creating modern digital solutions,
            developing responsive interfaces, and transforming ideas into
            meaningful user experiences.
          </p>


          {/* Experience Item */}
          <div className="experience-item">

            <div className="experience-item-top">
              <div>
                <h3>Software Engineer Intern</h3>
                <p className="experience-company">
                  CodeAisys IT Solution - Matara
                </p>
              </div>

              <span className="experience-date">
                2025/02 — 2025/08
              </span>
            </div>

            <p className="experience-description">
              Worked on designing and developing web applications with a
              strong focus on performance, usability, and responsive design.
              Collaborated with team members to build reliable and
              user-friendly digital solutions.
            </p>

            <div className="experience-tags">
              <span>React.js</span>
              <span>Next.js</span>
              <span>Laravel</span>
              <span>PHP</span>
              <span>JavaScript</span>
            </div>

          </div>

          </div>

        </div>

    </section>
  );
};

export default Experience;
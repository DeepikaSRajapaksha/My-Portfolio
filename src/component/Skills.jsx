import React from 'react';

import htmlIcon from '../assets/img/html.png';
import cssIcon from '../assets/img/css.png';
import jsIcon from '../assets/img/js.png';
import reactIcon from '../assets/img/reactjs.png';
import nodeIcon from '../assets/img/node.png';
import mysqlIcon from '../assets/img/mysql.png';
import gitIcon from '../assets/img/git.png';
import firebaseIcon from '../assets/img/firebase.png';
import cIcon from '../assets/img/c.png';
import ccIcon from '../assets/img/cc.png';
import tpIcon from '../assets/img/tp.png';
import javaIcon from '../assets/img/java.png';
import phpIcon from '../assets/img/php.png';
import pythonIcon from '../assets/img/python.png';
import mongodbIcon from '../assets/img/mongodb.png';
import laravelIcon from '../assets/img/laravel.png';
import seleniumIcon from '../assets/img/selenium.png';
import postmanIcon from '../assets/img/postman.png';
import jnutIcon from '../assets/img/junit.png';
import phpunitIcon from '../assets/img/phpunit.png';
import vscodeIcon from '../assets/img/vscode.png';
import trelloIcon from '../assets/img/trello.png';
import figmaIcon from '../assets/img/figma.png';
import flutterIcon from '../assets/img/flutter.png';
import dartIcon from '../assets/img/dart.png';

import '../css/Skills.css';


const Skills = () => {

  const programming = [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'C', icon: cIcon },
    { name: 'C++', icon: ccIcon },
    { name: 'TypeScript', icon: tpIcon },
    { name: 'Java', icon: javaIcon },
    { name: 'PHP', icon: phpIcon },
    { name: 'Python', icon: pythonIcon },
  ];

  const databases = [
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'Firebase', icon: firebaseIcon },
    { name: 'MongoDB', icon: mongodbIcon },
  ];

  const development = [
    { name: 'React', icon: reactIcon },
    { name: 'Node.js', icon: nodeIcon },
    { name: 'Laravel', icon: laravelIcon },
  ];

  const testing = [
    { name: 'Selenium', icon: seleniumIcon },
    { name: 'Postman', icon: postmanIcon },
    { name: 'JUnit', icon: jnutIcon },
    { name: 'PHPUnit', icon: phpunitIcon },
  ];

  const tools = [
    { name: 'VS Code', icon: vscodeIcon },
    { name: 'Git', icon: gitIcon },
    { name: 'Figma', icon: figmaIcon },
    { name: 'Trello', icon: trelloIcon },
  ];

  const mobile = [
    { name: 'Flutter', icon: flutterIcon },
    { name: 'Dart', icon: dartIcon },
  ];


  const renderIcons = (items, type = '') => {
    return (
      <div className={`skill-icons ${type}`}>

        {items.map((skill) => (
          <div
            className="skill-icon-item"
            key={skill.name}
          >

            <div className="skill-icon-box">

              <img
                src={skill.icon}
                alt={skill.name}
                draggable="false"
              />

            </div>

            <span>
              {skill.name}
            </span>

          </div>
        ))}

      </div>
    );
  };


  return (

    <section
      id="skills"
      className="skills-section"
    >

      {/* Background effects */}
      <div className="skills-glow skills-glow-one"></div>
      <div className="skills-glow skills-glow-two"></div>


      <div className="skills-container">


        {/* =========================================
            HEADER
           ========================================= */}

        <div className="skills-header">

          <div className="skills-label">

            <span className="skills-label-line"></span>

            <span>MY SKILLS</span>

          </div>


          <h2 className="skills-title">

            Technologies I use to
            <span> build ideas.</span>

          </h2>


          <p className="skills-intro">

            A growing collection of technologies, tools,
            and frameworks I use to design, develop,
            test, and bring digital ideas to life.

          </p>

        </div>


        {/* =========================================
            SKILLS GRID
           ========================================= */}

        <div className="skills-grid">


          {/* =====================================
              PROGRAMMING
             ===================================== */}

          <div className="skill-card programming-card">

            <div className="skill-card-top">

              <div className="skill-card-number">
                01
              </div>

              <span className="skill-card-category">
                CORE
              </span>

            </div>


            <div className="skill-card-heading">

              <h3>
                Programming
                <span> Languages</span>
              </h3>

              <p>
                Languages I use to create logic,
                interfaces, and applications.
              </p>

            </div>


            {renderIcons(programming, 'programming-icons')}

          </div>


          {/* =====================================
              DATABASE
             ===================================== */}

          <div className="skill-card">

            <div className="skill-card-top">

              <div className="skill-card-number">
                02
              </div>

              <span className="skill-card-category">
                DATA
              </span>

            </div>


            <div className="skill-card-heading">

              <h3>
                Database
                <span> Technologies</span>
              </h3>

              <p>
                Working with structured and
                cloud-based data systems.
              </p>

            </div>


            {renderIcons(databases)}

          </div>


          {/* =====================================
              DEVELOPMENT
             ===================================== */}

          <div className="skill-card">

            <div className="skill-card-top">

              <div className="skill-card-number">
                03
              </div>

              <span className="skill-card-category">
                BUILD
              </span>

            </div>


            <div className="skill-card-heading">

              <h3>
                Development
                <span> Frameworks</span>
              </h3>

              <p>
                Frameworks and technologies for
                building modern applications.
              </p>

            </div>


            {renderIcons(development)}

          </div>


          {/* =====================================
              TESTING
             ===================================== */}

          <div className="skill-card">

            <div className="skill-card-top">

              <div className="skill-card-number">
                04
              </div>

              <span className="skill-card-category">
                QUALITY
              </span>

            </div>


            <div className="skill-card-heading">

              <h3>
                Automation
                <span> & Testing</span>
              </h3>

              <p>
                Tools I use to test, validate,
                and improve software quality.
              </p>

            </div>


            {renderIcons(testing)}

          </div>


          {/* =====================================
              TOOLS
             ===================================== */}

          <div className="skill-card">

            <div className="skill-card-top">

              <div className="skill-card-number">
                05
              </div>

              <span className="skill-card-category">
                WORKFLOW
              </span>

            </div>


            <div className="skill-card-heading">

              <h3>
                Tools &
                <span> Platforms</span>
              </h3>

              <p>
                Tools that support my development,
                design, and project workflow.
              </p>

            </div>


            {renderIcons(tools)}

          </div>


          {/* =====================================
              MOBILE
             ===================================== */}

          <div className="skill-card mobile-card">

            <div className="skill-card-top">

              <div className="skill-card-number">
                06
              </div>

              <span className="skill-card-category">
                MOBILE
              </span>

            </div>


            <div className="skill-card-heading">

              <h3>
                Mobile
                <span> Development</span>
              </h3>

              <p>
                Technologies for creating
                cross-platform mobile experiences.
              </p>

            </div>


            {renderIcons(mobile, 'mobile-icons')}

          </div>


        </div>


        {/* =========================================
            BOTTOM STATEMENT
           ========================================= */}

        <div className="skills-bottom">

          <div className="skills-bottom-line"></div>

          <div className="skills-bottom-content">

            <span className="skills-status"></span>

            <span>
              ALWAYS LEARNING • ALWAYS BUILDING
            </span>

          </div>

          <div className="skills-bottom-line"></div>

        </div>


      </div>

    </section>
  );
};


export default Skills;
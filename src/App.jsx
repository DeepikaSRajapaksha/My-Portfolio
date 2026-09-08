import React from 'react';
import AnimatedBackground from './component/AnimatedBackground';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Photo from './component/Photo';
import About from './component/About';
import Experience from './component/Experience';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
     <div id="top">

      <AnimatedBackground />

      <Navbar />

      <Home />

      <Photo />

      <About />

      <Experience />

      <Skills />

      <Projects />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;
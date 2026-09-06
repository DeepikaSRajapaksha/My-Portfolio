import React from 'react';
import AnimatedBackground from './component/AnimatedBackground';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Photo from './component/Photo';
import About from './component/About';

function App() {
  return (
     <div id="top">

      <AnimatedBackground />

      <Navbar />

      <Home />

      <Photo />

      <About />

    </div>
  );
}

export default App;
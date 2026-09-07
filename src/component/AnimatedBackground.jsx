import '../css/AnimatedBackground.css';

const AnimatedBackground = () => {
  const particles = Array.from({ length: 80 }, (_, index) => (
    <span
      key={index}
      className="full-page-particle"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${18 + Math.random() * 15}s`,
        animationDelay: `${Math.random() * -20}s`,
        width: `${1 + Math.random() * 2}px`,
        height: `${1 + Math.random() * 2}px`,
      }}
    />
  ));

  return (
    <div className="astro-background">

      {/* Cosmic Glows */}
      <div className="cosmic-glow glow-one"></div>
      <div className="cosmic-glow glow-two"></div>
      <div className="cosmic-glow glow-three"></div>

      {/* Full Page Moving Particles */}
      <div className="particles-container">
        {particles}
      </div>

      {/* Shooting Stars */}
      <div className="shooting-star shooting-one"></div>
      <div className="shooting-star shooting-two"></div>
       <div className="shooting-star shooting-three"></div>
      <div className="shooting-star shooting-four"></div>
      <div className="shooting-star shooting-five"></div>

    </div>
  );
};

export default AnimatedBackground;
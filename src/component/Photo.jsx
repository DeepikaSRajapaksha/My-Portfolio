import React from 'react';
import '../css/Photo.css';

const photos = [
  require('../assets/img/photo1.jpeg'),
  require('../assets/img/photo2.jpeg'),
  require('../assets/img/photo3.jpeg'),
  require('../assets/img/photo4.jpeg'),
  require('../assets/img/photo5.jpeg'),
  require('../assets/img/photo6.jpeg'),
  require('../assets/img/photo7.jpeg'),
  require('../assets/img/photo8.jpeg'),
];

const Photo = () => {
  /*
   * Duplicate the photos so the animation can loop
   * continuously without an empty space.
   */
  const reelPhotos = [...photos, ...photos];

  return (
    <section className="photo-reel-section">

      {/* Section heading */}
      <div className="photo-reel-heading">
        <span className="reel-line"></span>

        <p>MY MOMENTS</p>

        <span className="reel-line"></span>
      </div>


      {/* Reel */}
      <div className="photo-reel">

        <div className="photo-track">

          {reelPhotos.map((photo, index) => (
            <div
              className={`photo-card photo-card-${index % 6}`}
              key={index}
            >
              <img
                src={photo}
                alt={`Memory ${index + 1}`}
                draggable="false"
              />

              <div className="photo-overlay"></div>
            </div>
          ))}

        </div>

      </div>


      {/* Bottom description */}
      <div className="photo-reel-footer">
        <span className="footer-dot"></span>

        <span>Little moments • Beautiful memories • My journey</span>
      </div>

    </section>
  );
};

export default Photo;
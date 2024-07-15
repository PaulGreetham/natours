import React from 'react';
import './Stories.scss';

const Stories: React.FC = () => {
  return (
    <div className="stories">
      <h2>
        We make people genuinely happy
      </h2>
      <div className="story">
        <figure className="story-shape">
          <img src="../../assets/images/nat-8.jpg" alt="Person on a tour" className="story-image" />
          <figcaption className="story-caption">Mary Smith</figcaption>
        </figure>
        <div className="story-text">
          <h3>
            I had the best week ever with my family
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et justo pharetra, ultricies mi nec, ultricies mi nec.
          </p>
        </div>
      </div>
      <div className="story">
        <figure className="story-shape">
          <img src="https://images.unsplash.com/photo-1558981001-792f6e3b8e8a" alt="Person on a tour" className="story-image" />
          <figcaption className="story-caption">Jack Wilson</figcaption>
        </figure>
        <div className="story-text">
          <h3>
            WOW! My life is completely different now
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et justo pharetra, ultricies mi nec, ultricies mi nec.
          </p>
        </div>
      </div>
      <a href="/" className="stories-button">Read all stories &rarr;</a>
    </div>
  );
}

export default Stories;

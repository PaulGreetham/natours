import React from 'react';
import './Features.scss';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Features: React.FC = () => {
  return (
    <section className="features">
      <div className="row">
        <div className="feature-card" id="world">
          <FontAwesomeIcon icon={faGlobe} className="icon" />
          <h3>Explore the world</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus cupiditate expedita.</p>
        </div>

        <div className="feature-card" id="map">
          <FontAwesomeIcon icon={faMap} className="icon" />
          <h3>Meet nature</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis recusandae fuga magnam praesentium.</p>
        </div>

        <div className="feature-card" id="compass">
          <FontAwesomeIcon icon={faCompass} className="icon" />
          <h3>Find your way</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis ea magni repellat?</p>
        </div>

        <div className="feature-card" id="heart">
          <FontAwesomeIcon icon={faHeart} className="icon" />
          <h3>Live a healthier life</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, nemo! Iusto reiciendis laboriosam atque.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from 'react';
import './Tours.scss';

const Tours: React.FC = () => {
  return (
    <header className="tours">
      <h2>Most popular tours</h2>
      <div className="tour-cards">
        <div className="card" id="card-1">
          <div className="card-inner">
            <div className="card-front">
              <div className="card-picture">
                &nbsp;
              </div>
              <h4>
                <span>The Sea Explorer</span>
              </h4>
              <div className="card-details">
                <ul>
                  <li>3 day tour</li>
                  <li>Up to 30 people</li>
                  <li>2 tour guides</li>
                  <li>Sleep in cozy hotels</li>
                  <li>Difficulty: easy</li>
                </ul>
              </div>
            </div>
            <div className="card-back">
              <div className="card-back-container">
                <p className="card-back-text">Only</p>
                <p className="card-back-price">€295</p>
              </div>
              <a href="/" className="card-back-button">Book now!</a>
            </div>
          </div>
        </div>
        <div className="card" id="card-2">
          <div className="card-inner">
            <div className="card-front">
              Card 2
            </div>
            <div className="card-back">
              Back
            </div>
          </div>
        </div>
        <div className="card" id="card-3">
          <div className="card-inner">
            <div className="card-front">
              Card 3
            </div>
            <div className="card-back">
              Back
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Tours;

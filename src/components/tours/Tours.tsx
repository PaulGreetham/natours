import React from 'react';
import './Tours.scss';

const Tours: React.FC = () => {
  return (
    <header className="tours">
      <h2>Most popular tours</h2>
      <div className="tour-cards">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              Card 1
            </div>
            <div className="card-back">
              Back
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              Card 2
            </div>
            <div className="card-back">
              Back
            </div>
          </div>
        </div>
        <div className="card">
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

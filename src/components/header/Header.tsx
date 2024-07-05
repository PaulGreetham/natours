import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo-white.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-box">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-main">Outdoors</span>
          <span className="heading-sub">is where life happens</span>
        </h1>
        <a href="/" className="text-box-button">Discover our tours</a>
      </div>
    </header>
  );
};

export default Header;

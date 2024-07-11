import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import About from './components/about/About';
import Features from './components/features/Features';
import Tours from './components/tours/Tours';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Features />
      <Tours />
    </>
  );
}

export default App;

import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import About from './components/about/About';
import Features from './components/features/Features';
import Tours from './components/tours/Tours';
import Stories from './components/stories/Stories';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Features />
      <Tours />
      <Stories />
    </>
  );
}

export default App;

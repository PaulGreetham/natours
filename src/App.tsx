import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import About from './components/about/About';
import Features from './components/features/Features';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Features />
    </>
  );
}

export default App;

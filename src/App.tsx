import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import About from './components/about/About';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <About />
    </>
  );
}

export default App;

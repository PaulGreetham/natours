import React from 'react';
import './About.scss';
import photo1 from '../../assets/images/nat-1-large.jpg';
import photo2 from '../../assets/images/nat-2-large.jpg';
import photo3 from '../../assets/images/nat-3-large.jpg';

const About: React.FC = () => {
  return (
    <main className="about">
      <h2>Exciting tours for adventurous people</h2>
      <section className="info-section">
        <section className="info">
          <h3>You're going to fall in lover with nature</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti assumenda voluptates voluptas optio ratione, rem minus natus perspiciatis obcaecati harum consequatur, in ducimus illum distinctio earum ad dolores autem. Eius.</p>
          <h3>Live adventures like you never have before</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima id repellendus accusamus quasi quod libero doloribus consectetur, expedita magnam velit.</p>

          <a href="/" className="info-button">Learn more &rarr;</a>
        </section>
        <section className="info-images">
          <img src={photo1} alt="Photo-1" className="photo-1"/>
          <img src={photo2} alt="Photo-2" className="photo-2"/>
          <img src={photo3} alt="Photo-3" className="photo-3"/>
        </section>
      </section>
    </main>
  );
};

export default About;

import React from 'react';
import './HeroSection.css';
import DynamicLinkButton from '../DynamicLinkButton';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Добро пожаловать в мир красоты и блеска! Adornia</h1>
        <p className='hero_txt'> - ваш источник стильных и элегантных украшений.</p>
        <DynamicLinkButton to="/cart" text="Book Appointment" />
      </div>
    </section>
  );
};

export default HeroSection;

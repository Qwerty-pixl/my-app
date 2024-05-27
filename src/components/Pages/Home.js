import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Eng from '../eng/Eng';
import Card from '../Card/Card';
import Wedding from '../Wedding/Wedding';
import Slider from '../slider/Slider';

export default function Home() {
  const slides = [
    'https://via.placeholder.com/600x300/FF0000/FFFFFF?text=Slide+1',
    'https://via.placeholder.com/600x300/00FF00/FFFFFF?text=Slide+2',
    'https://via.placeholder.com/600x300/0000FF/FFFFFF?text=Slide+3',
  ];

  return (
    <div>
        <HeroSection />
        <Eng />
        <Card />
        <Wedding />
        <Slider slides={slides} />
    </div>
  );
}

import React from 'react';
import Slider from '../../components/Slider/Slider'; 
import Card from '../../components/Card/Card';
import Gallery from '../../components/Gallery/Gallery';
import styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
  return (
    <>
      <Slider />
      
      <Card
        title="Каюты"
        description="Три эксклюзивные и комфортабельные каюты Løvtag - Et, Ro и Ly..."
        image="/img/1.jpg"
        isReversed={true}
      />

      <Gallery images={['/img/im1.jpg', '/img/im2.jpg', '/img/im3.jpg']} />

      <Card
        title="Лес"
        description="Три эксклюзивные и комфортабельные каюты Løvtag - Et, Ro и Ly..."
        image="/img/map.jpg"
        isReversed={true}
      />
    </>
  );
};

// components/Slider/Slider.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './Slider.module.css';

const Slider: React.FC = () => {
  const slides = [
    { 
      title: 'Найдите покой в лесу',
      image: '/assets/images/Intro.jpg',
      text: 'Приезжайте и остановитесь в отеле Out Hut...'
    },
    // Остальные слайды
  ];

  return (
    <Swiper className={styles.swiper}>
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <div className={styles.slide}>
            <img src={slide.image} alt={slide.title} />
            <h2>{slide.title}</h2>
            <p>{slide.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
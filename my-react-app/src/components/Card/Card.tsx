// components/Card/Card.tsx
import React from 'react';
import styles from './Card.module.css';

// components/Card/Card.tsx
interface CardProps {
  title: string;
  description: string;
  image: string; // Добавьте это свойство
  isReversed?: boolean; // Сделайте опциональным или добавьте значение по умолчанию
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image, // Добавьте в деструктуризацию
  isReversed = false // Значение по умолчанию
}) => {
  return (
    <div className={`card ${isReversed ? 'reversed' : ''}`}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
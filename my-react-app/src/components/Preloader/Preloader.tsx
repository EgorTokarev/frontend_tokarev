// components/Preloader/Preloader.tsx
import React from 'react';
import styles from './Preloader.module.css';

const Preloader: React.FC = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.spinner}></div>
      <div className={styles.text}>Загрузка...</div>
    </div>
  );
};

export default Preloader;
// components/Gallery/Gallery.tsx
import React from 'react';
import styles from './Gallery.module.css';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <section className={styles.gallery}>
      <div className={styles.grid}>
        {images.map((imgSrc, index) => (
          <div key={index} className={styles.item}>
            <img
              src={imgSrc}
              alt={`Gallery image ${index + 1}`}
              className={styles.image}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
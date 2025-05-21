import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.information}>
        <h2 className={styles.information__title}>Информационная бюллетень</h2>
        <form className={styles.information__form}>
          <input 
            type="email" 
            placeholder="Email Address" 
            className={styles.information__input}
          />
          <button type="submit" className={styles.information__button}>
            <img src="/img/icons/arrow.svg" alt="Отправить" />
          </button>
        </form>
        <p className={styles.information__description}>
          Подпишитесь на нашу рассылку и получите 10% скидку на следующий заказ.
        </p>
        <p className={styles.information__copyright}>
          © 2024 Стеклянные хижины
        </p>
      </section>

      <section className={styles.documentationPayment}>
        <div className={styles.documentation}>
          {['ПРАВИЛА И УСЛОВИЯ', 'ПРАВИЛА ОТМЕНЫ БРОНИРОВАНИЯ', 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ'].map((link) => (
            <a key={link} href="#" className={styles.documentation__link}>{link}</a>
          ))}
        </div>
        
        <div className={styles.payment}>
          {['paypal', 'mastercard', 'visa', 'bank'].map((method) => (
            <img 
              key={method}
              src={`/img/icons/${method}.svg`} 
              alt={method} 
              className={styles.payment__icon}
            />
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
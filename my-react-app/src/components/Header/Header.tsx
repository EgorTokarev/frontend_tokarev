import { FC } from 'react';
import './Header.module.css';

interface HeaderProps {
  onOpenModal?: () => void;
}

const Header: FC<HeaderProps> = ({ onOpenModal }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/img/logo.jpg" alt="Логотип" />
      </div>
      <nav className="nav">
        <ul className="nav__list">
          {['Главная', 'Хижина', 'Территория', 'Бронирование', 'О нас', 'Вопросы'].map((item) => (
            <li key={item} className={`nav__item ${item === 'Главная' ? 'nav__item--active' : ''}`}>
              <a className="nav__link" href="#">{item}</a>
            </li>
          ))}
        </ul>
        <div className="nav_item--language">
          <img className="language" src="/img/2.jpg" alt="Язык" />
        </div>
        <div className="reservation">
          <button className="reservation__link" onClick={onOpenModal}>
            Забронировать сейчас
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { RiMenuFill } from 'react-icons/ri';
import { RxCross2 } from "react-icons/rx";
import { useDarkMode } from '../context/DarkModeContext';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoText, setLogoText] = useState('lebarrichello');
  const [blinking, setBlinking] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      addLetterT();
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const addLetterT = () => {
    if (!logoText.includes('t')) {
      setLogoText(logoText.slice(0, 2) + 't' + logoText.slice(2));
      setBlinking(true);

      setTimeout(() => {
        setBlinking(false);
        setTimeout(() => {
          setLogoText('lebarrichello');
        }, 1000);
      }, 5000);
    }
  };

  return (
    <header className={`container__header ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="header__logo-name">
        <h2>{"<"}</h2>
        <p className="logo-text">
          <span className={blinking ? 'blinking' : ''}>{logoText.charAt(0)}</span>
          <span className={blinking ? 'blinking' : ''}>{logoText.charAt(1)}</span>
          <span className={blinking ? 'blinking' : ''}>{logoText.charAt(2)}</span>
          {logoText.slice(3)}
        </p>
        <h2>{">"}</h2>
      </div>
      <nav className={`header__navigation-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="/about">Sobre</a>
        <a href="/project">Projetos</a>
        <a href="https://linkedin.com/in/lebarrichello" target="_blank" rel="noreferrer">
          Contato
        </a>
      </nav>
      <div className="header__toggle-theme" onClick={toggleDarkMode}>
        {isDarkMode ? <MdDarkMode className="icon" /> : <MdLightMode className="icon" />}
      </div>
      <div className="header__hamburger-menu" onClick={toggleMenu}>
        {isMenuOpen ? <RxCross2 className="icon" /> : <RiMenuFill className="icon" />}
      </div>
    </header>
  );
}

export default Header;

import React, { Component } from 'react';
import { RiMenuFill } from 'react-icons/ri';
import { RxCross2 } from "react-icons/rx";
import { MdDarkMode,MdLightMode } from "react-icons/md";

import '../styles/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false, // Adicione este estado
      logoText: 'lebarrichello',
      blinking: false,
      isDarkMode: false 
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  };

  toggleDarkMode = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.addLetterT();
    }, 20000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  addLetterT = () => {
    const { logoText } = this.state;

    if (!logoText.includes('t')) {
      this.setState({
        logoText: logoText.slice(0, 2) + 't' + logoText.slice(2),
        blinking: true
      });

      setTimeout(() => {
        this.setState({ blinking: false });
        setTimeout(() => {
          this.setState({ logoText: 'lebarrichello' });
        }, 1000);
      }, 5000);
    }
  };

  render() {
    const { isMenuOpen, logoText, blinking, isDarkMode } = this.state;

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
             <a href="#sobre">Sobre</a>
             <a href="#projetos">Projetos</a>
             <a href="https://linkedin.com/in/lebarrichello" target="_blank" rel="noreferrer">Contato</a>
        </nav>
        <div className="header__toggle-theme" onClick={this.toggleDarkMode}>
        {isDarkMode ? <MdDarkMode className="icon" /> : <MdLightMode className="icon"/> }
        </div>
        
        <div className="header__hamburger-menu" onClick={this.toggleMenu}>
          {this.state.isMenuOpen ? <RxCross2 className="icon"/> : <RiMenuFill className="icon"/>}
       </div>
      </header>
    );
  }
}

export default Header;

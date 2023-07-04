import React, { Component } from 'react';
import { RiMenuFill } from 'react-icons/ri';
import '../styles/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <header className="container__header">
        <div className="header__logo-name">
          <span>{"<"}</span>
          <p>lebarrichello</p>
          <span>{">"}</span>
        </div>
        <nav className={`header__navigation-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className="header__toogle-theme">light/dark theme </div>
        <div className="header__hamburger-menu" onClick={this.toggleMenu}>
          <RiMenuFill />
        </div>
      </header>
    );
  }
}

export default Header;

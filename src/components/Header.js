import React, { Component } from 'react';
import { RiMenuFill } from 'react-icons/ri';
import '../styles/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      logoText: 'lebarrichello',
      blinking: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
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
    const { isMenuOpen, logoText, blinking } = this.state;

    return (
      <header className="container__header">
        <div className="header__logo-name">
          <span>{"<"}</span>
          <p className="logo-text">
            <span className={blinking ? 'blinking' : ''}>{logoText.charAt(0)}</span>
            <span className={blinking ? 'blinking' : ''}>{logoText.charAt(1)}</span>
            <span className={blinking ? 'blinking' : ''}>{logoText.charAt(2)}</span>
            {logoText.slice(3)}
          </p>
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

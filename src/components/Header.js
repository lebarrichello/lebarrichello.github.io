import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
 
  render() {

    return (
<header className="container__header">
<div className="header__logo-name">
   <p>lebarrichello</p>
</div>
<div className="header__navigation-links">
    <nav>
        <p>Sobre</p>
        <p>Projetos</p>
        <p>Contato</p>
    </nav>
</div>
<div className="header__toogle-theme">light/dark theme </div>
</header>);
  }
}

export default Header;


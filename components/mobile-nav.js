import React from 'react';

export default function MobileNav() {
  return (
    <nav className="nav-mobile">
      <div className="nav-container">
        <a href="#" className="logo">
          <img src="static/img/logo.svg" alt="Logo" />
        </a>
        <div className="btns-wrap">
          <a href="https://app.clazbooks.com/login" className="link">
            Iniciar
          </a>
          <a href="https://app.clazbooks.com/register" className="btn">
            Registrar
          </a>
        </div>
      </div>
    </nav>
  );
}

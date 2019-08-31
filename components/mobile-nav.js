import React from 'react';
import Link from 'next/link';

export default function MobileNav() {
  return (
    <nav className="nav-mobile">
      <div className="nav-container">
        <a href="#" className="logo">
          <img src="static/img/logo.svg" alt="Logo" />
        </a>
        <div className="btns-wrap">
          <Link href="login">
            <a className="link">Iniciar</a>
          </Link>
          <Link href="register">
            <a className="btn">Registrar</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

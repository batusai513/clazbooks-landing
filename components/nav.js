import React from 'react';
import Link from 'next/link';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="part">
          <Link href="/">
            <a className="logo">
              <img src="static/img/logo.svg" alt="Logo" />
            </a>
          </Link>
        </div>
        <div className="part">
          <div className="socials">
            <a href="#" className="social-apple">
              <img src="static/img/socials/apple.svg" alt="App Store" />
            </a>
            <a href="#" className="social-google">
              <img src="static/img/socials/google.svg" alt="Play Market" />
            </a>
          </div>
        </div>
        <div className="part">
          <div className="btns-wrap">
            <a href="https://clazbooks.now.sh/login" className="link">
              Iniciar
            </a>
            <a href="https://clazbooks.now.sh/register" className="btn">
              Registrar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

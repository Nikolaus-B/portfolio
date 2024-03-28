import { useState } from 'react';
import './header.css';

export const Header = () => {
  const [toogle, setToogle] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Baliasevych
        </a>
        <div className={toogle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list">
            <li className="nav-item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-house-user nav-icon"></i>Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav-icon"></i>About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav-icon"></i>Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav-icon"></i>Services
              </a>
            </li>
            {/* <li className="nav-item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav-icon"></i>Portfolio
              </a>
            </li> */}
            <li className="nav-item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav-icon"></i>Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => setToogle(!toogle)}
          ></i>
        </div>

        <div className="nav__toogle" onClick={() => setToogle(!toogle)}>
          <i className="uil uil-apps "></i>
        </div>
      </nav>
    </header>
  );
};

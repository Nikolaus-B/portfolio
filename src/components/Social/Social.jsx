import React from 'react';
import './social.css';

export const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/mykola-baliasevych/"
        className="home__social-icon"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/mykola-baliasevych/"
        className="home__social-icon"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a href="https://github.com/Nikolaus-B" className="home__social-icon">
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

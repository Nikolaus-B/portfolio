import React from 'react';
import './social.css';

export const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/mykola-baliasevych/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/mykola-baliasevych/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/Nikolaus-B"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

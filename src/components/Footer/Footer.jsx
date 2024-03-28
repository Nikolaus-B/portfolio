import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h3 className="footer__title">Baliasevych</h3>
        <ul className="footer__list">
          <li className="footer__item">
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li className="footer__item">
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li className="footer__item">
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
          {/* <li className="footer__item">
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li> */}
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/mykola-baliasevych/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/Nikolaus-B"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mykola-baliasevych/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
        <p className="footer__copy">All right reserved®</p>
      </div>
    </footer>
  );
};

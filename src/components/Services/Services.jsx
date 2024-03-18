import './services.css';

import React, { useState } from 'react';

export const Services = () => {
  const [showModal, setShowModal] = useState(0);

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <p className="section__subtitle">What I offer</p>

      <div className="services__container container grid">
        <div className="services__content">
          <i className="uil uil-web-grid services__icon"></i>
          <h3 className="services__title">Developer</h3>

          <p className="services__button" onClick={() => setShowModal(1)}>
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </p>

          <div
            className={
              showModal === 1
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => setShowModal(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Developer</h3>
              <p className="services__modal-description">
                Can provide quality work to clients and companies
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Develop web application
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Develop web application
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Develop web application
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <i className="uil uil-arrow services__icon"></i>
          <h3 className="services__title">Developer</h3>

          <p className="services__button" onClick={() => setShowModal(2)}>
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </p>

          <div
            className={
              showModal === 2
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => setShowModal(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Developer</h3>
              <p className="services__modal-description">
                Can provide quality work to clients and companies
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Develop web application
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Develop web application
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Develop web application
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <i className="uil uil-edit services__icon"></i>
          <h3 className="services__title">Developer</h3>

          <p className="services__button" onClick={() => setShowModal(3)}>
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </p>

          <div
            className={
              showModal === 3
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => setShowModal(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Developer more</h3>
              <p className="services__modal-description">
                Can provide quality work to clients and companies
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Develop web application
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Develop web application
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Develop web application
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

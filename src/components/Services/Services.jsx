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
          <h3 className="services__title">Front-end</h3>

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
              <h3 className="services__modal-title">Front-end</h3>
              <p className="services__modal-description">
                Can provide quality work to clients and companies
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Proficiency in HTML, CSS, JavaScript, TypeScript and React.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Ability to create responsive and visually appealing user
                    interfaces.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Understanding of UI/UX principles and design patterns.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <i className="uil uil-arrow services__icon"></i>
          <h3 className="services__title">Back-end</h3>

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
              <h3 className="services__modal-title">Back-end</h3>
              <p className="services__modal-description">
                Can provide quality work to clients and companies
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Ability to build RESTful APIs for communication between
                    frontend and backend systems.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Knowledge of server-side programming language such as
                    Node.js.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Perform CRUD (Create, Read, Update, Delete) operations on
                    MongoDB collections using MongoDB
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <i className="uil uil-edit services__icon"></i>
          <h3 className="services__title">Employee</h3>

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
              <h3 className="services__modal-title">Employee</h3>
              <p className="services__modal-description">
                Can provide quality work to clients and companies
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Strong problem-solving skills and a willingness to tackle
                    challenges.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Effective communication and collaboration within a team
                    environment.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Adaptability to changing project requirements and deadlines.
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

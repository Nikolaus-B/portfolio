import { useState } from 'react';
import './qualification.css';

export const Qualification = () => {
  const [activeLine, setActiveLine] = useState(1);

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <p className="section__subtitle">My personal journey</p>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            onClick={() => setActiveLine(1)}
            className={`qualification__button button--flex ${
              activeLine === 1 ? 'qualification__active' : ''
            }`}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            onClick={() => setActiveLine(2)}
            className={`qualification__button button--flex ${
              activeLine === 2 ? 'qualification__active' : ''
            }`}
          >
            <i className="uil uil-briefcase qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={`qualification__content ${
              activeLine === 1 ? 'qualification__content-active' : ''
            }`}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">GoIT</h3>
                <p className="qualification__subtitle">Remote</p>
                <br />
                <p className="qualification__subtitle">Courses</p>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2023 - 2024
                </div>
              </div>
              <div>
                <div className="qualification__rounder"></div>
                <div className="qualification__line"></div>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <div className="qualification__rounder"></div>
                <div className="qualification__line"></div>
              </div>
              <div>
                <h3 className="qualification__title">Logos IT Academy</h3>
                <p className="qualification__subtitle">Lviv</p>
                <br />
                <p className="qualification__subtitle">Courses</p>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2018 - 2019
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div className="qualification__container">
                <h3 className="qualification__title">NULP</h3>
                <p className="qualification__subtitle">Lviv</p>
                <br />
                <p className="qualification__subtitle">Bachelor degree</p>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2018 - 2023
                </div>
              </div>
              <div>
                <div className="qualification__rounder"></div>
                <div className="qualification__line"></div>
              </div>
            </div>
          </div>
          <div
            className={`qualification__content ${
              activeLine === 2 ? 'qualification__content-active' : ''
            }`}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Kharkiv IT Cluster</h3>
                <p className="qualification__subtitle">Remote</p>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2024 - 2024
                </div>
              </div>
              <div>
                <div className="qualification__rounder"></div>
                <div className="qualification__line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

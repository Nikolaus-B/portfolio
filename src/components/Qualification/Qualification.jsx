import './qualification.css';

export const Qualification = () => {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <p className="section__subtitle">My personal journey</p>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active  button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase qualification__icon"></i>
            Sectification
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Applied Linguistic</h3>
                <p className="qualification__subtitle">NULP - Lviv</p>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2018 - 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

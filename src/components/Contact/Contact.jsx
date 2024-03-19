import './contact.css';

export const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <p className="section__subtitle">Contact me</p>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h4 className="contact__card-title">Email</h4>
              <p className="contact__card-data">baliasevych123@gmail.com</p>

              <a href="baliasevych123@gmail.com" className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-linkedin contact__card-icon"></i>

              <h4 className="contact__card-title">LinkedIn</h4>
              <p className="contact__card-data">Mykola Baliasevych</p>

              <a
                href="https://www.linkedin.com/in/mykola-baliasevych/"
                className="contact__button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-telegram contact__card-icon"></i>

              <h4 className="contact__card-title">Telegram</h4>
              <p className="contact__card-data">Click and lets talk</p>

              <a href="https://t.me/B_Mykolka" className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your projects</h3>

          <form className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Insert your project"
              />
            </div>
            <button className="button button--flex">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

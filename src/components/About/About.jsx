import './about.css';
import AboutImg from '../../assets/Mykola-photo.jpeg';
import CV from '../../assets/Mykola_Baliasevych_Dev.pdf';
import { Info } from 'components/Info/Info';

export const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="Mykola Baliasevych" className="about__img" />
        <div className="about__data">
          <Info />

          <p className="about__description">
            As a Front-End developer, I am passionate about crafting captivating
            web experiences that seamlessly blend functionality with aesthetic
            appeal. With a keen eye for detail and a deep understanding of UI/UX
            principles, I specialize in creating dynamic and user-friendly web
            pages.
            {/* <br /> My dedication to staying at the forefront of emerging
            technologies and my commitment to delivering exceptional results
            drive my continuous growth in this ever-evolving field. Through my
            work, I aim to not only meet but exceed the expectations of users,
            leaving a lasting impression with every interaction. */}
          </p>

          <a download="" href={CV} className="button button--flex">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

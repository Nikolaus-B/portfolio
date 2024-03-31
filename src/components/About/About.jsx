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
            Front-End developer, I create web pages with UI/UX user interface
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quod
            laborum rem ullam, similique praesentium, quo cumque tempore aliquid
            a voluptates sequi exercitationem?
          </p>

          <a download="" href={CV} className="button button--flex">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

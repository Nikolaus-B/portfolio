import { Data } from 'components/Data/Data';
import { Social } from 'components/Social/Social';
import './home.css';
import { ScrollDown } from 'components/ScrollDown/ScrollDown';

export const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="container grid home__container">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>

          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

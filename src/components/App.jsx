import { About } from './About/About';
import { GlobalStyle } from './GloabalStyle';
import { Header } from 'components/Header/Header';
import { Home } from 'components/Home/Home';

export const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
      <GlobalStyle />
    </div>
  );
};

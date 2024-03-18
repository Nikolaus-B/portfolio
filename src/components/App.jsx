import { About } from './About/About';
import { GlobalStyle } from './GloabalStyle';
import { Header } from './header/Header';
import { Home } from './Home/Home';

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

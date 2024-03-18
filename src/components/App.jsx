import { GlobalStyle } from './GloabalStyle';
import { Header } from './Header/Header';
import { Home } from './Home/Home';

export const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
      </main>
      <GlobalStyle />
    </div>
  );
};

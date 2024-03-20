import { About } from './About/About';
import { Contact } from './Contact/Contact';
import { Footer } from './Footer/Footer';
import { GlobalStyle } from './GloabalStyle';
import { Header } from './header/Header';
import { Home } from './Home/Home';
import { Qualification } from './Qualification/Qualification';
import { ScrollUp } from './ScrollUp/ScrollUp';
import { Services } from './Services/Services';
import { Skills } from './Skills/Skills';

export const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
      <GlobalStyle />
    </div>
  );
};

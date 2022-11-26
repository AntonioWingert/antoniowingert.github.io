import { HomeContainer } from '../styles/HomeStyles';

import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiencias from '../components/Experiencias';
import Conhecimentos from '../components/Conhecimentos';
import Footer from '../components/Footer';
import Projetos from '../components/Projetos';
import { FormContato } from '../components/FormContato';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experiencias />
        <Conhecimentos />
        <Projetos />
        <FormContato />
      </main>

      <Footer />
    </HomeContainer>
  );
}

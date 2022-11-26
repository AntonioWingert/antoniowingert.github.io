import Conhecimentos from "../src/components/Conhecimentos";
import Experiencias from "../src/components/Experiencias";
import Footer from "../src/components/Footer";
import { FormContato } from "../src/components/FormContato";
import Header from "../src/components/Header";
import HomeHero from "../src/components/HomeHero";
import Projetos from "../src/components/Projetos";
import { HomeContainer } from "../src/styles/HomeStyles";


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

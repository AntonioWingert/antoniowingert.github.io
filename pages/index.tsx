import Head from "next/head";
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
      <Head>
      <title>Home | Meu portfólio</title>
        <meta
          name="description"
          content="Olá, me chamo Antonio, sou um desenvolvedor em desenvolvimento web, ainda estou cursando, porem pode acompanhar meus projetos por aqui, caso se sinta interessado, poderá entrar em contato comigo através das redes ou do formulário no site!"
        />
        <meta property="og:image" content="ogimage.jpeg" />
        <meta property="og:image:secure_url" content="ogimage.jpeg" />
        <meta name="twitter:image" content="ogimage.jpeg" />
        <meta name="twitter:image:src" content="ogimage.jpeg" />
        <meta
          property="og:description"
          content="Olá, me chamo Antonio, sou um desenvolvedor em desenvolvimento web, ainda estou cursando, porem pode acompanhar meus projetos por aqui, caso se sinta interessado, poderá entrar em contato comigo através das redes ou do formulário no site!"
        />
      </Head>
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

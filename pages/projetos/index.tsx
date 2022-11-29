import Head from "next/head";
import Header from "../../src/components/Header";
import ProjetoItem from "../../src/components/ProjetoItem";
import HandleDocument from "../../src/services/HandleDocument";
import { ProjetosContainer } from "../../src/styles/ProjetosStyles";

export default function Projetos() {
  const projetos = HandleDocument();

  return (
    <ProjetosContainer>
      <Head>
        <title>Projetos | Meu portfólio</title>
          <meta
            name="description"
            content="Essa pagina foi desenvolvida com o proposito de englobar meus projetos feitos até hoje, com o intuito de acompanhar minha evolução!"
          />
          <meta property="og:image" content="ogimage.jpeg" />
          <meta property="og:image:secure_url" content="ogimage.jpeg" />
          <meta name="twitter:image" content="ogimage.jpeg" />
          <meta name="twitter:image:src" content="ogimage.jpeg" />
          <meta
            property="og:description"
            content="Essa pagina foi desenvolvida com o proposito de englobar meus projetos feitos até hoje, com o intuito de acompanhar minha evolução!"
          />
      </Head>
      <Header />
      <main className="container">
       {
       projetos?.map(projeto => (
        <ProjetoItem
        key={projeto.slug}
        imgUrl={projeto.thumbnail}
        slug={projeto.slug}
        title={projeto.title}
        type={projeto.type}
        />
       ))
       }
      </main>
    </ProjetosContainer>
  );
}

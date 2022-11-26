import Header from "../../src/components/Header";
import ProjetoItem from "../../src/components/Projetos/ProjetoItemHome";
import { ProjetosContainer } from "../../src/styles/ProjetosStyles";

export default function Projetos() {
  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
        <ProjetoItem
          slug="project-timer"
          img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"          type="App"
          title="Timer"
        />
        <ProjetoItem
          slug="project-pokedex"
          img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"             type="App"
          title="Pokédex"
        />
        <ProjetoItem
          slug="project-pizzaria"
          img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"             type="Website"
          title="Projeto Pizzaria"
        />
      </main>
    </ProjetosContainer>
  );
}

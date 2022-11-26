import Header from '../../components/Header';
import timerImage from '../../assets/timer-image.jpeg';
import pizzaria from '../../assets/project-pizzaria.jpeg'
import projectPokedex from '../../assets/project-pokedex.jpeg'
import ProjetoItem from '../../components/ProjetoItem';
import { ProjetosContainer } from '../../styles/ProjetosStyles';

export default function Projetos() {
  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
        <ProjetoItem
          slug="project-timer"
          imgUrl={timerImage}
          type="App"
          title="Timer"
        />
        <ProjetoItem
          slug="project-pokedex"
          imgUrl={projectPokedex}
          type="App"
          title="Pokédex"
        />
        <ProjetoItem
          slug="project-pizzaria"
          imgUrl={pizzaria}
          type="Website"
          title="Projeto Pizzaria"
        />
      </main>
    </ProjetosContainer>
  );
}

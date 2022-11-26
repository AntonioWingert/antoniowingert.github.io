import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItemHome';
import timerImage from '../../assets/timer-image.jpeg';
import pizzaria from '../../assets/project-pizzaria.jpeg'
import projectPokedex from '../../assets/project-pokedex.jpeg'
import { Container } from './styles';

function Projetos() {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />
      <section>
        <ProjetoItem
          key="timer"
          img={timerImage}
          title="Timer"
          type="App"
          slug="project-timer"
        />
        <ProjetoItem
          key="pokedex"
          img={projectPokedex}
          title="Pokédex"
          type="App"
          slug="project-pokedex"
        />
        <ProjetoItem
          key="pizzaria"
          img={pizzaria}
          title="Pizzaria Wingert"
          type="Website"
          slug="project-pizzaria"
        />
=      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;

import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItemHome';
import { Container } from './styles';

function Projetos() {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />
      <section>
        <ProjetoItem
          key="timer"
          img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"             title="Timer"
          type="App"
          slug="project-timer"
        />
        <ProjetoItem
          key="pokedex"
          img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"             title="Pokédex"
          type="App"
          slug="project-pokedex"
        />
        <ProjetoItem
          key="pizzaria"
          img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"             title="Pizzaria Wingert"
          type="Website"
          slug="project-pizzaria"
        />
=      </section>
      <button type="button">
        <Link href="/projetos">
          Ver todos os projetos
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;

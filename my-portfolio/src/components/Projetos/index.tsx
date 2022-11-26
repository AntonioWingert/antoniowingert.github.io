import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItemHome';
import picture from '../../assets/timer-image.jpeg';
import { Container } from './styles';

function Projetos() {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />
      <section>
        <ProjetoItem
          key="project-test"
          img={picture}
          title="Timer"
          type="App"
          slug="project-timer"
        />
        <ProjetoItem
          key="project-test"
          img={picture}
          title="Timer"
          type="App"
          slug="project-timer"
        />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;

import Link from 'next/link';
import HandleDocument from '../../services/HandleDocument';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItemHome';
import { Container } from './styles';

function Projetos() {
  const projetos = HandleDocument();

  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />
      <section>
       {
       projetos?.slice(0, 3).map(projeto => (
        <ProjetoItem 
        key={projeto.slug}
        img={projeto.thumbnail}
        slug={projeto.slug}
        title={projeto.title}
        type={projeto.type}
        />
       ))
       }
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

import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="01 Ano" description="de experiência" />

      <section>
        <ExperienciaItem
          year="2017"
          title="Professor"
          description="Após me formar no ensino médio cursei um período de Matemática, onde lecionei em uma escola Pública."
        />
        <ExperienciaItem
          year="2019"
          title="Secretario"
          description="Durante 2018 a 2020 trabalhei em diversas áreas da educação municipal de minha cidade, atuando como auxiliar de escritório, a secretário de uma escola pública."
        />
        <ExperienciaItem
          year="2021"
          title="Estudante"
          description="Durante esse ano, estudei de forma individual os conteúdos de Front-End, focado em React e JS."
        />
        <ExperienciaItem
          year="2022"
          title="Estudante"
          description="Entrei na Trybe, onde estudo desde os fundamentos da Web, a Back-End, com foco em me tornar um desenvolvedor Full Stack."
        />
      </section>
    </Container>
  );
}

export default Experiencias;

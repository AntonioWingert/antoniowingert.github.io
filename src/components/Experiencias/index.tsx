import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="02 Anos" description="de experiência" />

      <section>
      <ExperienciaItem
          year="2019 - 2020"
          title="Secretario"
          description="Durante 2018 a 2020 trabalhei em diversas áreas da educação municipal de minha cidade, atuando como auxiliar de escritório, a secretário de uma escola pública."
        />
        <ExperienciaItem
          year="2021"
          title="FreeLancer"
          description="Durante esse ano, estudei de forma individual os conteúdos de Front-End, focado em React e JS, assim como inciei minha carreira como desenvolvedor freelancer."
        />
        <ExperienciaItem
          year="2022"
          title="FreeLancer e Estudante"
          description="Entrei na Trybe, onde estudo desde os fundamentos da Web, a Back-End, com foco em me tornar um desenvolvedor Full Stack."
        />
        <ExperienciaItem
          year="2023"
          title="FreeLancer e Estudante"
          description="Finalizando meus estudos na Trybe, possuo amplo conhecimento em React, TypeScript, banco de dados e Express, atualmente trabalhando como summer de instrução na Trybe."
        />
      </section>
    </Container>
  );
}

export default Experiencias;

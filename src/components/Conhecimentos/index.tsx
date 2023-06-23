import { SiNextdotjs, SiStyledcomponents, SiTypescript, SiJest, SiDocker, SiMysql } from 'react-icons/si';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title="Next" icon={<SiNextdotjs />} />
        <ConhecimentoItem title="Typescript" icon={<SiTypescript />} />
        <ConhecimentoItem title="CSSINJS" icon={<SiStyledcomponents />} />
        <ConhecimentoItem title="Docker" icon={<SiDocker />} />        
        <ConhecimentoItem title="MySql" icon={<SiMysql />} />
        <ConhecimentoItem title="Jest" icon={<SiJest />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;

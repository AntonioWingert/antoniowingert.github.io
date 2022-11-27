/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/perfil.png';
import Image from 'next/image';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <Image className='img' src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Antonio</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Antonio Bruno,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Wingert</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Função: <span className="blue">Estudante,</span>
            </div>
            <div>
              Empresa: <span className="blue">Trybe</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;

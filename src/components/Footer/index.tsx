import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai';
import { Container } from './styles';

function Footer() {
  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <a href="https://www.instagram.com/antoniobwingert/" target="_blank" rel='noreferrer'>
            <AiOutlineInstagram/>
          </a>
          <a href="https://github.com/antonioWingert" target="_blank" rel='noreferrer'>
            <AiOutlineGithub />
          </a>
          <a href="https://www.linkedin.com/in/antoniobrunowingert/" target="_blank" rel='noreferrer'>
            <AiFillLinkedin />
          </a>
        </section>
      </div>
    </Container>
  );
}

export default Footer;

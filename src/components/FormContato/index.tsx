import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

export function FormContato() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Quer entrar em
            <br />
            contato comigo?
          </>
        }
        description={
          <>
            Preencha o formulário abaixo que
            <br />
            irei retornar em breve!
          </>
        }
      />
      <Form />
    </Container>
  );
}

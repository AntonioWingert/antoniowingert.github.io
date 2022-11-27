import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  return (
    <FormContainer>
      <Input placeholder="Nome" required />
      <Input placeholder="E-mail" required />
      <TextArea required placeholder="Mensagem" />
      <button type="submit">ENVIAR</button>
    </FormContainer>
  );
}

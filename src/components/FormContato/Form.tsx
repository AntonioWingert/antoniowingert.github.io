import { FormEvent, use, useState } from 'react';
import { FormContainer, Input, TextArea } from './styles';
import emailjs from "emailjs-com";
import toast from 'react-hot-toast';
import theme from '../../styles/theme';

export default function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);

  emailjs.init('Ia4HyCrKPe3CSMohW')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if(loading) return;

    if(!nome.trim() || !email.trim() || !mensagem.trim()) {
      toast('Preencha todos os campos para enviar sua mensagem!', {
        style: {
          background: theme.error,
          color: '#fff',
          fontWeight: 700,
        }
      });
      return;
    }


    emailjs.sendForm('gmailMessage', 'template_nzbnu8k', event.target, 'Ia4HyCrKPe3CSMohW')

    .then((result) => {
        setLoading(true)
        toast('Mensagem enviada com sucesso!', {
          style: {
            background: theme.secondary,
            color: '#fff',
            fontWeight: 700,
          }
        }); 
        setNome('');
        setMensagem('');
        setEmail('');
    })
    .catch((error) => {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
        style: {
          background: theme.error,
          color: '#fff',
          fontWeight: 700,
        }
      }); 
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    }) 

  }

  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
      <Input 
        placeholder="Nome" 
        name='nome'
        value={nome}
        onChange={({target}) => setNome(target.value)}
        />
      <Input 
        placeholder="E-mail" 
        name='email'
        value={email}
        onChange={({target}) => setEmail(target.value)}
        />
      <TextArea 
        name='mensagem'
        value={mensagem}
        onChange={({target}) => setMensagem(target.value)}
        placeholder="Mensagem" 
        />
      <button 
      disabled={loading}
      type="submit">ENVIAR</button>
    </FormContainer>
  );
}

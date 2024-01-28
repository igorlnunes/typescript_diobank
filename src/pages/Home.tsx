import styled from 'styled-components';
import { Card } from '../components/Card';
import { useContext, useState } from 'react';
import { Center, Input } from '@chakra-ui/react';
import { ButtonCustom } from '../components/Button/ButtonCustom';
import { login } from '../services/login';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../components/AppContext';
import { changeLocalStorage } from '../services/storage';

const Home = () => {
  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  font-family: MuseoModerno, sans-serif;
  color: #041014;
  `;

  const [email, setEmail] = useState<string>('');
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const validateUser = async (email: string) => {
    const loggedIn = await login(email);

    if (!loggedIn) {
      return alert('E-mail inválido')
    }

    setIsLoggedIn(true);
    changeLocalStorage({ login: true });
    navigate('/conta/1');
  }

  return (
    <Card>
      <Center>
        <Title>
          Faça o login - Junte-se ao novo!
        </Title>
      </Center>
      <Input placeholder="E-mail" value={email} onChange={(event) => setEmail(event.target.value)} width={'75%'} />
      <Input placeholder="Digite sua senha" type='password' width={'75%'} />
      <ButtonCustom title='Enviar!' event={() => validateUser(email)} />
    </Card>
  )
}

export default Home;
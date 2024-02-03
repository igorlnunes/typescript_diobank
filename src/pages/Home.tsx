import styled from 'styled-components';
import { Card } from '../components/Card';
import { useContext } from 'react';
import { Center, Input } from '@chakra-ui/react';
import { ButtonCustom } from '../components/ButtonCustom';
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

  const { user, password, setUser, setPassword, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email: string, password: string) => {
    const loggedIn = await login(email, password);

    if (!loggedIn) {
      return alert('E-mail e/ou senha inválido(s)')
    }

    changeLocalStorage({ login: true, user: email, password: password });
    setIsLoggedIn(true);
    navigate('/conta/1');
  }

  return (
    <Card>
      <Center>
        <Title>
          Faça o login - Junte-se ao novo!
        </Title>
      </Center>
      <Input placeholder="E-mail" value={user} onChange={(event) => setUser(event.target.value)} width={'75%'} />
      <Input placeholder="Digite sua senha" value={password} type='password' onChange={(event) => setPassword(event.target.value)} width={'75%'} />
      <ButtonCustom title='Enviar!' event={() => validateUser(user, password)} />
    </Card>
  )
}

export default Home;
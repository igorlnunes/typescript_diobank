import styled from 'styled-components';
import { Card } from '../components/Card';
import { useState } from 'react';
import { Center, Input } from '@chakra-ui/react';
import { ButtonCustom } from '../components/Button/ButtonCustom';
import { login } from '../services/login';

const Home = () => {
  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  font-family: MuseoModerno, sans-serif;
  color: #041014;
  `;

  const [email, setEmail] = useState<string>('');

  return (
    <Card>
      <Center>
        <Title>
          Faça o login - Junte-se ao novo!
        </Title>
      </Center>
      <Input placeholder="E-mail" value={email} onChange={(event) => setEmail(event.target.value)} width={'75%'} />
      <Input placeholder="Digite sua senha" width={'75%'} />
      <ButtonCustom title='Enviar!' event={() => login(email)} />
    </Card>
  )
}

export default Home;
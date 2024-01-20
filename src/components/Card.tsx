import { Box, Center, Input } from '@chakra-ui/react'
import { Header } from './Header/Header'
import { ButtonCustom } from './Button/ButtonCustom'
import { login } from '../services/login'
import styled from 'styled-components'

export const Card = () => {
  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  font-family: MuseoModerno, sans-serif;
  color: #041014;
`;

  return (
    <>
      <Header />
      <Box height={'100vh'} backgroundColor='#041014' padding={'20px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Box backgroundColor='#145369' borderRadius='25px' padding='15px' gap={'15px'} height={'40vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} width={'50%'} marginTop={'0.25rem'}>
          <Center>
            <Title>
              Faça o login - Junte-se ao novo!

            </Title>
          </Center>
          <Input placeholder="E-mail" width={'75%'} />
          <Input placeholder="Digite sua senha" width={'75%'} />
          <ButtonCustom title='Enviar!' event={login} />
          <Center>

          </Center>
        </Box>
      </Box>

    </>
  )
}
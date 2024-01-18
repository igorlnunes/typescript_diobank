import {
  Center,
  ChakraProvider,
  Input,
  Box,
} from '@chakra-ui/react'
import { login } from './services/login';
import { Header } from './components/Header/Header';
import { ButtonCustom } from './components/Button/ButtonCustom';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <ButtonCustom title='Enviar!' event={login} />
          <Center>

          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;

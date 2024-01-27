import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Conta from './pages/Conta';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout';
import ContaInfo from './pages/ContaInfo';
import { AppContextProvider } from './components/AppContext';

function App() {
  return (
    <AppContextProvider>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={<Conta />} />
            <Route path='/infoconta' element={<ContaInfo />} />
          </Routes>
        </Layout>
      </ChakraProvider>
    </AppContextProvider>
  );
}

export default App;

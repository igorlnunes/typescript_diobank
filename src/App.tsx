import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout';
import { AppContextProvider } from './components/AppContext';
import MainRoutes from './routes';
import { createLocalStorage, getAllLocalStorage } from './services/storage';

function App() {

  !getAllLocalStorage() && createLocalStorage();

  return (
    <AppContextProvider>
      <ChakraProvider>
        <Layout>
          <MainRoutes />
        </Layout>
      </ChakraProvider>
    </AppContextProvider>
  );
}

export default App;

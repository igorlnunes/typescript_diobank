import { Center, SimpleGrid, Spinner } from '@chakra-ui/react';
import CardInfo from '../components/CardInfo';
import { useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../components/AppContext';

interface IUserData {
  email: string,
  password: string,
  name: string,
  balance: number,
  id: string
}

const Conta = () => {
  const [userData, setUserData] = useState<null | IUserData>();
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(AppContext);

  !isLoggedIn && navigate('/')



  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api;
      setUserData(data);
    }

    getData();

    if (userData && id !== userData.id) {
      navigate('/');

    }
  }, []);

  const actualData = new Date();


  return (
    <Center>
      <SimpleGrid columns={2} spacing={4}>
        {
          userData === undefined || userData === null ?
            (
              <Center>
                <Spinner size={'xl'} color="#ffffff" />
              </Center>
            ) :
            (
              <>
                <CardInfo mainContent={`Bem-vinda ${userData?.name}`} content={`${actualData.getDate()}/${actualData.getMonth() + 1}/${actualData.getFullYear()} - ${actualData.getHours()}:${actualData.getMinutes() + 1}`} />
                <CardInfo mainContent={`Saldo:`} content={`R$ ${userData.balance}`} />
                <CardInfo mainContent='Informações da conta:' content='Clique aqui' rte='/infoconta' />

              </>
            )
        }
      </SimpleGrid>
    </Center>
  )
}

export default Conta;
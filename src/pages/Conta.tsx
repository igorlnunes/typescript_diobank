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

  const actualData = new Date();


  if (userData && id !== userData.id) {
    navigate('/');

  }


  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api;
      setUserData(data);
    }

    getData();
  }, [])


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
                <CardInfo mainContent={`Bem-vinda ${userData?.name}`} content={`${actualData.getDay() + 21}/${actualData.getMonth() + 1}/${actualData.getFullYear()} - ${actualData.getHours()}:${actualData.getMinutes()}`} />
                <CardInfo mainContent={`Saldo:`} content={`R$ ${userData.balance}`} />

              </>
            )
        }
      </SimpleGrid>
    </Center>
  )
}

export default Conta;
import { Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Card } from '../components/Card';
import { Link } from 'react-router-dom';

interface IUserData {
  email: string,
  password: string,
  name: string,
  balance: number,
  id: string
}

const ContaInfo = () => {
  const [accountInfo, setAccountInfo] = useState<any>({});


  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api;
      setAccountInfo(data);
    }

    getData();

  }, []);
  return (
    <Card display={'flex'} flexDirection={'column'} color={'#fff'}>
      <Text fontSize='2xl' fontWeight='bold' fontFamily={'MuseoModerno'} alignSelf={'center'}>
        Informações da conta:
      </Text>
      <Text fontSize='1.5rem' color={'#fff'} fontFamily={'MuseoModerno'} alignSelf={'center'}>
        <Text>
          Nome: {accountInfo?.name}
        </Text>
        <Text fontSize='1rem'>
          E-mail: {accountInfo?.email}
        </Text>
      </Text>
      <Text fontSize='1.0rem' color={'#041014'} fontFamily={'MuseoModerno'} alignSelf={'center'} marginTop={'0.5rem'}>
        <Link to={'/'}>
          Voltar
        </Link>
      </Text>
    </Card>
  )
}

export default ContaInfo;
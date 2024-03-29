import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ICardInfo {
  mainContent: string,
  content: string,
  rte?: string

}

const CardInfo = ({ mainContent, content, rte }: ICardInfo) => {
  const Title4 = styled.h4`
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  font-family: MuseoModerno, sans-serif;
  color: #145369;
  `;

  return (
    <Box
      backgroundColor="#2596be"
      minHeight="120px"
      padding={8}
      borderRadius="25px"
    >
      <Title4>
        {mainContent}
      </Title4>
      {
        rte === undefined || null ? (
          <Text fontSize='xl' fontFamily='MuseoModerno' display='flex' justifyContent='center' alignItems='center'>
            {content}
          </Text>
        ) : (
          <Link to={`${rte}`}>
            <Text fontSize='xl' fontFamily='MuseoModerno' display='flex' justifyContent='center' alignItems='center'>
              {content}
            </Text>
          </Link>
        )
      }
    </Box>
  )
}

export default CardInfo;
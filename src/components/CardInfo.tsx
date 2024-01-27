import { Box, Text } from '@chakra-ui/react';
import styled from 'styled-components';

interface ICardInfo {
  mainContent: string,
  content: string
}

const CardInfo = ({ mainContent, content }: ICardInfo) => {
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
      <Text fontSize='xl' fontFamily='MuseoModerno' display='flex' justifyContent='center' alignItems='center'>
        {content}
      </Text>
    </Box>
  )
}

export default CardInfo;
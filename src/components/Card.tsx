import { Box } from '@chakra-ui/react';
export const Card = ({ children }: any) => {

  return (
    <Box backgroundColor='#145369' borderRadius='25px' padding='15px' gap={'15px'} height={'40vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} width={'50%'} marginTop={'0.25rem'}>
      {children}
    </Box>
  )
}
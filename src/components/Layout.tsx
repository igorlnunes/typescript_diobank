import { Box } from '@chakra-ui/react'
import { Header } from "./Header/Header"

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Box height={'100vh'} backgroundColor='#041014' padding={'20px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        {children}
      </Box>
    </>
  )
}

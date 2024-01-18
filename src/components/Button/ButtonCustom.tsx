import { Button } from '@chakra-ui/react';

interface IButton {
  title: string;
  event: () => void
}

export const ButtonCustom = ({ title, event }: IButton) => {
  return (
    <Button colorScheme='messenger' onClick={event}>
      {title}
    </Button>
  );

}
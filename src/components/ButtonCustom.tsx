import { Button } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

interface IButton {
  title: string;
  event: MouseEventHandler;
}

export const ButtonCustom = ({ title, event }: IButton) => {
  return (
    <Button colorScheme='messenger' onClick={event}>
      {title}
    </Button>
  );

}
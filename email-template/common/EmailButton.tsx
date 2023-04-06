import { Button } from '@react-email/button';

import type { ReactChildren } from '../../models/common';

import { button } from '../styles';

export const EmailButton = ({ children }: ReactChildren) => {
  return (
    <Button style={button} href="#">
      {children}
    </Button>
  );
};

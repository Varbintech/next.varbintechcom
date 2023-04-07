import { Button } from '@react-email/button';

import type { ReactChildren } from '../../models/common';

import { button } from '../styles';

export const EmailButton = ({ children }: ReactChildren) => {
  return (
    <Button pX={20} pY={14} style={button} href="#">
      {children}
    </Button>
  );
};

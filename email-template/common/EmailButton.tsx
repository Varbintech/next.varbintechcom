import { Button } from '@react-email/button';

import type { ReactChildren } from '../../models/common';

import { button } from '../styles';

interface EmailButtonProps extends ReactChildren {
  href: string;
}

export const EmailButton = ({ children, href }: EmailButtonProps) => {
  return (
    <Button pX={20} pY={14} style={button} href={href} target="_blank" rel="noreferrer">
      {children}
    </Button>
  );
};

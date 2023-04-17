import { Heading } from '@react-email/heading';

import type { ReactChildren } from '../../models/common';

import { heading } from '../styles';

export const EmailHeading = ({ children }: ReactChildren) => {
  return (
    <Heading as="h2" style={heading}>
      {children}
    </Heading>
  );
};

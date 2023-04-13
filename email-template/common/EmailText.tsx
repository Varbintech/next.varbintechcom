import { Text } from '@react-email/text';

import type { ReactChildren } from '../../models/common';

import { paragraph } from '../styles';

export const EmailText = ({ children }: ReactChildren) => {
  return <Text style={paragraph}>{children}</Text>;
};

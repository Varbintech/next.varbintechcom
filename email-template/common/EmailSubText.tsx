import { Text } from '@react-email/text';

import type { ReactChildren } from '../../models/common';

import { subParagraph } from '../styles';

export const EmailSubText = ({ children }: ReactChildren) => {
  return <Text style={subParagraph}>{children}</Text>;
};

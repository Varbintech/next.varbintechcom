import { Text } from '@react-email/text';
import { Link } from '@react-email/link';
import { Img } from '@react-email/img';

import { footerSubParagraph, footerParagraph } from '../styles';

export const EmailFooterText = () => {
  return (
    <Text style={footerSubParagraph}>
      Sent with <Img src="/images/heart.jpg" width="12" height="12" alt="heart emoji" /> from
      <Link href="#"><Img src="/images/logo-small.jpg" height="24" alt="Varbintech logo" /></Link> <br />
      <br />
      To inspire powerful conversations and collaborations worldwide. Together we can change the
      world with creativity. <br />
      <br />
      Copyright 2023 - <span style={footerParagraph}>Varbintech</span>
    </Text>
  );
};

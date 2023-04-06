import { Section } from '@react-email/section';
import { Img } from '@react-email/img';

import { logo } from '../styles';

export const EmailLogo = () => {
  return (
    <Section style={logo}>
      <Img src="/images/logo.jpg" alt="Varbintech logo"  />
    </Section>
  );
};

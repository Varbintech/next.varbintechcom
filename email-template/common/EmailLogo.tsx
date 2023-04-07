import { Section } from '@react-email/section';
import { Link } from '@react-email/link';
import { Img } from '@react-email/img';

import { logo } from '../styles';

export const EmailLogo = () => {
  return (
    <Section style={logo}>
      <Link href="#">
        <Img src="/images/logo.jpg" alt="Varbintech logo" />
      </Link>
    </Section>
  );
};

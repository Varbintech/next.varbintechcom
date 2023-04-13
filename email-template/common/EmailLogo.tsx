import { Section } from '@react-email/section';
import { Link } from '@react-email/link';
import { Img } from '@react-email/img';

import { logo } from '../styles';

export const EmailLogo = () => {
  return (
    <Section style={logo}>
      <Link
        href="https://varbintech.com"
        aria-label="Varbintech Home Page"
        target="_blank"
        rel="noreferrer"
      >
        <Img
          src="https://res.cloudinary.com/dlxpwfaic/image/upload/v1681315440/varbintech/vt-logo-black_j8a90o.jpg"
          alt="Varbintech logo in header"
          width="61"
          height="36"
        />
      </Link>
    </Section>
  );
};

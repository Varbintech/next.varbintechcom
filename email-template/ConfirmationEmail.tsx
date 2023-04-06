import { Html } from '@react-email/html';
import { Body } from '@react-email/body';
import { Container } from '@react-email/container';
import { Hr } from '@react-email/hr';

import { Settings } from '../constants/settings';

import { EmailHead } from './common/EmailHead';
import { EmailLogo } from './common/EmailLogo';
import { EmailHeading } from './common/EmailHeading';
import { EmailText } from './common/EmailText';
import { EmailSubText } from './common/EmailSubText';
import { EmailButton } from './common/EmailButton';
import { EmailFooterText } from './common/EmailFooterText';

import { container, hr, main, paragraph } from './styles';

export function ConfirmationEmail() {
  return (
    <Html lang="en">
      <EmailHead>{Settings.Title}</EmailHead>
      <Body style={main}>
        <Container style={container}>
          <EmailLogo />
          <EmailHeading>Congratulation!</EmailHeading>
          <EmailSubText>
            Your account is now <span style={paragraph}>approved</span> and you can access your
            dashboard now!
          </EmailSubText>
          <EmailButton>Go to dashboard</EmailButton>
          <Hr style={hr} />
          <EmailText>
            Thanks for reading, <br />
            Varbintech
          </EmailText>
          <Hr style={hr} />
          <EmailFooterText />
        </Container>
      </Body>
    </Html>
  );
}
export default ConfirmationEmail;

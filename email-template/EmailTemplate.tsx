import { Html } from '@react-email/html';
import { Body } from '@react-email/body';
import { Container } from '@react-email/container';
import { Hr } from '@react-email/hr';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';

import { Settings } from '../constants/settings';

import { EmailHead } from './common/EmailHead';
import { EmailLogo } from './common/EmailLogo';
import { EmailHeading } from './common/EmailHeading';
import { EmailText } from './common/EmailText';
import { EmailSubText } from './common/EmailSubText';
import { EmailButton } from './common/EmailButton';
import { EmailFooterText } from './common/EmailFooterText';

import { container, hr, main, paragraph, titleParagraph } from './styles';

export interface TextSection {
  title: string;
  text: string;
}

interface EmailTemplateProps {
  headTitle: string;
  buttonText: string;
  subHeadConfirmation?: boolean;
  textSection?: Array<TextSection>;
}

export const EmailTemplate = ({
  headTitle,
  buttonText,
  subHeadConfirmation,
  textSection,
}: EmailTemplateProps) => {
  return (
    <Html lang="en">
      <EmailHead>{Settings.Title}</EmailHead>
      <Body style={main}>
        <Container style={container}>
          <EmailLogo />
          <EmailHeading>{headTitle}</EmailHeading>
          {subHeadConfirmation ? (
            <EmailSubText>
              Your account is now <span style={paragraph}>approved</span> and you can access your
              dashboard now!
            </EmailSubText>
          ) : null}
          {textSection
            ? textSection.map((item, index) => {
                return (
                  <Section key={index} style={{ marginBottom: '4px' }}>
                    <Text style={titleParagraph}>{item.title}</Text>
                    <Text style={paragraph}>{item.text}</Text>
                  </Section>
                );
              })
            : null}
          <EmailButton>{buttonText}</EmailButton>
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
};
export default EmailTemplate;

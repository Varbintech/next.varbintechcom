import { storiesOf } from '@storybook/react';

import { confirmationEmail } from './mocks/confirmation';
import { contactFormEmail } from './mocks/contact-form';

import EmailTemplate from './EmailTemplate';

storiesOf('App/EmailTemplates', module)
  .add('Confirmation', () => (
    <EmailTemplate
      headTitle={confirmationEmail.headTitle}
      buttonText={confirmationEmail.buttonText}
      subHeadConfirmation
    />
  ))
  .add('Contact form', () => (
    <EmailTemplate
      headTitle={contactFormEmail.headTitle}
      buttonText={contactFormEmail.buttonText}
      textSection={contactFormEmail.textSection}
    />
  ));

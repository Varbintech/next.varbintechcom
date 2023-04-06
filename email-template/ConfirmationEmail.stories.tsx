import { storiesOf } from '@storybook/react';

import { render } from '@react-email/render';

import ConfirmationEmail from './ConfirmationEmail';

const html = render(<ConfirmationEmail />, {
  pretty: true,
  /* plainText: true, */
});

export const Template = () => {
  return <>{html}</>;
};

storiesOf('App/EmailTemplates/Confirmation', module).add('Default', () => <Template />);

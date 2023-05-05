import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CookiePopup from './CookiePopup';

const onConfirm = (...args: any) => {
  action('onConfirm button was clicked')(...args);
};

storiesOf('App/CommonComponents/CookiePopup', module)
  .add('Default', () => <CookiePopup onConfirm={onConfirm} />);

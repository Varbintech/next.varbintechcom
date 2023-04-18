import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DialogCheckout from './DialogCheckout';

const onClose = (...args: any) => {
  action('Close button was clicked')(...args);
};

storiesOf('App/Dialog/CustomServices', module).add('Default', () => (
  <DialogCheckout onClose={onClose} />
));

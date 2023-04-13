import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DialogCustomServices from './DialogCustomServices';

const onClose = (...args: any) => {
  action('Close button was clicked')(...args);
};

storiesOf('App/Dialog/CustomServices', module).add('Default', () => (
  <DialogCustomServices onClose={onClose} />
));

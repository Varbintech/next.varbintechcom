import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DialogCheckout from './DialogCheckout';

/**
 * Testing the checkout
 *
 * https://docs.lemonsqueezy.com/guides/developer-guide/testing-going-live#testing-the-checkout
 */

const onClose = (...args: any) => {
  action('Close button was clicked')(...args);
};

storiesOf('App/Dialog/Checkout', module).add('Default', () => (
  <DialogCheckout
    onClose={onClose}
    checkoutSrc={String(process.env.NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_TEST_URL_QUARTER)}
  />
));

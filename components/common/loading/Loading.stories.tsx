import { storiesOf } from '@storybook/react';

import Loading from './Loading';

storiesOf('App/CommonComponents/Loading', module)
  .add('Default', () => <Loading />)
  .add('Full Width', () => <Loading fullWidth />);

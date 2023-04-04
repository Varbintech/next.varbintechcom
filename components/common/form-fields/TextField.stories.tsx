import { storiesOf } from '@storybook/react';

import TextField from './TextField';

storiesOf('App/CommonComponents/TextField', module)
  .add('text success', () => <TextField value="TextField" success />)
  .add('text error', () => <TextField value="TextField" error />);

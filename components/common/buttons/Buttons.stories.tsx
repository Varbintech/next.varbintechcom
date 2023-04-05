import { storiesOf } from '@storybook/react';

import Button from './Button';
import ButtonClose from './ButtonClose';
import ButtonLink from './ButtonLink';

storiesOf('App/CommonComponents/Buttons', module)
  .add('text', () => (
    <Button variant="text">
      Button text
    </Button>
  ))
  .add('contained', () => (
    <Button>
      Button contained
    </Button>
  ))
  .add('outlined', () => <Button variant="outlined">Button outlined</Button>)
  .add('contained info', () => (
    <Button color="info">
      Button contained info
    </Button>
  ))
  .add('outlined info', () => (
    <Button variant="outlined" color="info">
      Button outlined info
    </Button>
  ))
  .add('button icon close', () => (
    <ButtonClose />
  ))
  .add('button nextLink', () => (
    <ButtonLink />
  ));

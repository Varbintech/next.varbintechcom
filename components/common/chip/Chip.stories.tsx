import { storiesOf } from '@storybook/react';

import Chip from './Chip';

storiesOf('App/CommonComponents/Chip', module)
  .add('chip link', () => <Chip label="tag.name" component="a" href="#" />)
  .add('chip text', () => <Chip label="tag.name" />);

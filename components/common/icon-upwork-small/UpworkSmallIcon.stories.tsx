import { storiesOf } from '@storybook/react';

import UpworkSmallIcon from './UpworkSmallIcon';

storiesOf('App/CommonComponents/Logos/Upwork', module).add('Short', () => (
  <UpworkSmallIcon sx={{ width: '54px', height: '54px' }} />
));

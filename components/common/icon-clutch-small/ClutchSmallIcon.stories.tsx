import { storiesOf } from '@storybook/react';

import ClutchSmallIcon from './ClutchSmallIcon';

storiesOf('App/CommonComponents/Logos/Clutch', module).add('Short', () => (
  <ClutchSmallIcon sx={{ width: '57px', height: '57px' }} />
));

import { storiesOf } from '@storybook/react';

import { socialIcons } from '../../../mocks/social-icons';

import SocialIcons from './SocialIcons';

storiesOf('App/CommonComponents/SocialIcons', module)
  .add('Default', () => <SocialIcons data={socialIcons} />)
  .add('inverse color', () => <SocialIcons data={socialIcons} inverseColor />);

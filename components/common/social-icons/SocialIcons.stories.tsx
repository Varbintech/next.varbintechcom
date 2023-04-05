import { storiesOf } from '@storybook/react';

import SocialIcons from './SocialIcons';

const mockSocialIcons = [
  {
    id: 0,
    socialTitle: 'Reddit',
    socialLink: '#',
    socialIcon: 'redditIcon',
    socialBorderRadius: '',
    socialAriaLabel: 'Read more about Varbintech on Reddit',
  },
  {
    id: 1,
    socialTitle: 'GitHub',
    socialLink: '#',
    socialIcon: 'gitHubIcon',
    socialBorderRadius: '',
    socialAriaLabel: 'Read more about Varbintech on GitHub',
  },
  {
    id: 2,
    socialTitle: 'LinkedIn',
    socialLink: '#',
    socialIcon: 'linkedInIcon',
    socialBorderRadius: '2px',
    socialAriaLabel: 'Read more about Varbintech on LinkedIn',
  },
  {
    id: 3,
    socialTitle: 'Twitter',
    socialLink: '#',
    socialIcon: 'twitterIcon',
    socialBorderRadius: '',
    socialAriaLabel: 'Read more about Varbintech on Twitter',
  },
  {
    id: 4,
    socialTitle: 'Upwork',
    socialLink: '#',
    socialIcon: 'upworkIcon',
    socialBorderRadius: '2px',
    socialAriaLabel: 'Read more about Varbintech on Upwork',
  },
  {
    id: 5,
    socialTitle: 'Clutch',
    socialLink: '#',
    socialIcon: 'clutchIcon',
    socialBorderRadius: '',
    socialAriaLabel: 'Read more about Varbintech on Clutch',
  },
  {
    id: 6,
    socialTitle: 'Facebook',
    socialLink: '#',
    socialIcon: 'facebookIcon',
    socialBorderRadius: '',
    socialAriaLabel: 'Read more on Facebook',
  },
];

storiesOf('App/CommonComponents/SocialIcons', module)
  .add('Default', () => <SocialIcons data={mockSocialIcons} />)
  .add('inverse color', () => <SocialIcons data={mockSocialIcons} inverseColor />);

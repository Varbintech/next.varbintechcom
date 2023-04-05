import type { FC } from 'react';

import Stack from '@mui/material/Stack';
import type { LinkProps } from '@mui/material/Link';
import RedditIcon from '@mui/icons-material/Reddit';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import type { SocialIcon } from '../../../models';

import ClutchSmallIcon from '../icon-clutch-small/ClutchSmallIcon';
import UpworkSmallIcon from '../icon-upwork-small/UpworkSmallIcon';

import { SocialLink, SocialRedditLink } from './styled-components';

interface SocialIconsProps {
  data: Array<SocialIcon>;
  inverseColor?: boolean;
}

const icons: Record<string, JSX.Element> = {
  redditIcon: <RedditIcon sx={{ fontSize: '20px' }} />,
  gitHubIcon: <GitHubIcon sx={{ fontSize: '28px' }} />,
  facebookIcon: <FacebookIcon sx={{ fontSize: '32px' }} />,
  linkedInIcon: <LinkedInIcon sx={{ fontSize: '32px' }} />,
  twitterIcon: <TwitterIcon sx={{ fontSize: '26px' }} />,
  upworkIcon: <UpworkSmallIcon />,
  clutchIcon: <ClutchSmallIcon />,
};

const SocialIcons: FC<SocialIconsProps> = ({ data, inverseColor }) => {
  return (
    <Stack direction="row" spacing={3}>
      {data.map(icon => {
        if (!icon.socialLink) {
          return null;
        }

        const commonProps: LinkProps = {
          href: icon.socialLink,
          underline: 'none',
          target: '_blank',
          rel: 'noreferrer',
          'aria-label': icon.socialAriaLabel,
          sx: { borderRadius: icon.socialBorderRadius },
        };

        if (icon.socialTitle === 'Reddit') {
          return (
            <SocialRedditLink
              key={icon.id}
              {...commonProps}
              className={inverseColor ? 'inverse-color' : ''}
            >
              {icons[icon.socialIcon]}
            </SocialRedditLink>
          );
        }

        return (
          <SocialLink
            key={icon.id}
            {...commonProps}
            className={inverseColor ? 'inverse-color' : ''}
          >
            {icons[icon.socialIcon]}
          </SocialLink>
        );
      })}
    </Stack>
  );
};

export default SocialIcons;

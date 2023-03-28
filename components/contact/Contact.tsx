import type { FC } from 'react';

import Image from 'next/image';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import RedditIcon from '@mui/icons-material/Reddit';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import type { SocialIcon } from '../../models';

import RectangleBoxWhiteIcon from '../common/icon-rectangle-box/RectangleBoxWhiteIcon';
import RectangleLeftFillIcon from '../common/icon-rectangle-left-fill/RectangleLeftFillIcon';
import ClutchSmallIcon from '../common/icon-clutch-small/ClutchSmallIcon';
import UpworkSmallIcon from '../common/icon-upwork-small/UpworkSmallIcon';

import {
  IconLeftContainer,
  PageContainer,
  ContactContainer,
  ContactMainContainer,
  ContactImageContainer,
  ContactEmail,
  ContactText,
  ImageWrapper,
  ContactRedditLink,
  ContactLink,
  ContactIconContainer,
} from './styled-components';

import contactBg from '../../public/contact-bg.webp';

interface ContactProps {
  data: Array<SocialIcon>;
}

const icons: Record<string, JSX.Element> = {
  redditIcon: <RedditIcon sx={{ fontSize: '20px' }} />,
  gitHubIcon: <GitHubIcon sx={{ fontSize: '28px' }} />,
  linkedInIcon: <LinkedInIcon sx={{ fontSize: '32px' }} />,
  twitterIcon: <TwitterIcon sx={{ fontSize: '26px' }} />,
  upworkIcon: <UpworkSmallIcon />,
  clutchIcon: <ClutchSmallIcon />,
};

const Contact: FC<ContactProps> = ({ data }) => {
  return (
    <PageContainer id="services">
      <IconLeftContainer>
        <RectangleLeftFillIcon />
      </IconLeftContainer>

      <Container maxWidth="lg">
        <ContactContainer direction={{ xs: 'column', md: 'row-reverse' }}>
          <ContactImageContainer>
            <ImageWrapper>
              <Image
                src={contactBg}
                alt="Contact the Varbintech team, and you will have the answer in less than 24 hour"
              />
            </ImageWrapper>
          </ContactImageContainer>
          <ContactMainContainer>
            <div>
              <ContactEmail variant="h3">contact@varbintech.com</ContactEmail>

              <ContactText>
                Take the next step towards achieving your goals by leveraging our top-notch
                experience with a proven record
              </ContactText>
              <ContactIconContainer>
                <RectangleBoxWhiteIcon />
              </ContactIconContainer>
            </div>

            <Stack direction="row" spacing={3}>
              {data.map(icon => {
                if (!icon.socialLink) {
                  return null;
                }

                if (icon.socialTitle === 'Reddit') {
                  return (
                    <ContactRedditLink
                      key={icon.id}
                      href={icon.socialLink}
                      underline="none"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Read more about Varbintech on ${icon.socialTitle}`}
                      sx={{ borderRadius: icon.socialBorderRadius }}
                    >
                      {icons[icon.socialIcon]}
                    </ContactRedditLink>
                  );
                }

                return (
                  <ContactLink
                    key={icon.id}
                    href={icon.socialLink}
                    underline="none"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Read more about Varbintech on ${icon.socialTitle}`}
                    sx={{ borderRadius: icon.socialBorderRadius }}
                  >
                    {icons[icon.socialIcon]}
                  </ContactLink>
                );
              })}
            </Stack>
          </ContactMainContainer>
        </ContactContainer>
      </Container>
    </PageContainer>
  );
};

export default Contact;

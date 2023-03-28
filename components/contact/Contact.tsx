import Image from 'next/image';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import RedditIcon from '@mui/icons-material/Reddit';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import { Settings } from '../../constants/settings';

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

const Contact = () => {
  return (
    <PageContainer id="services">
      <IconLeftContainer>
        <RectangleLeftFillIcon />
      </IconLeftContainer>

      <Container maxWidth="lg">
        <ContactContainer direction={{ xs: 'column', md: 'row-reverse' }}>
          <ContactImageContainer>
            <ImageWrapper>
              <Image src={contactBg} alt="Contact the Varbintech team, and you will have the answer in less than 24 hour" />
            </ImageWrapper>
          </ContactImageContainer>
          <ContactMainContainer>
            <div>
              <ContactEmail variant="h3">contact@varbintech.com</ContactEmail>

              <ContactText>
                Take the next step towards achieving your goals by leveraging our top-notch experience with a proven record
              </ContactText>
              <ContactIconContainer>
                <RectangleBoxWhiteIcon />
              </ContactIconContainer>
            </div>

            <Stack direction="row" spacing={3}>
              <ContactRedditLink
                href={Settings.RedditLink}
                underline="none"
                target="_blank"
                rel="noreferrer"
                aria-label="Read more about Varbintech on Reddit"
              >
                <RedditIcon sx={{ fontSize: '20px' }} />
              </ContactRedditLink>

              <ContactLink
                href={Settings.GitHubLink}
                underline="none"
                target="_blank"
                rel="noreferrer"
                aria-label="Read more about Varbintech on GitHub"
              >
                <GitHubIcon sx={{ fontSize: '26px' }} />
              </ContactLink>

              <ContactLink
                href={Settings.LinkedInLink}
                underline="none"
                target="_blank"
                rel="noreferrer"
                aria-label="Read more about Varbintech on LinkedIn"
                sx={{ borderRadius: '2px' }}
              >
                <LinkedInIcon sx={{ fontSize: '26px' }} />
              </ContactLink>

              <ContactLink
                href={Settings.TwitterLink}
                underline="none"
                target="_blank"
                rel="noreferrer"
                aria-label="Read more about Varbintech on Twitter"
              >
                <TwitterIcon sx={{ fontSize: '26px' }} />
              </ContactLink>
              <ContactLink
                href={Settings.UpworkLink}
                underline="none"
                target="_blank"
                rel="noreferrer"
                aria-label="Read more about Varbintech on Upwork"
                sx={{ borderRadius: '2px' }}
              >
                <UpworkSmallIcon />
              </ContactLink>

              <ContactLink
                href={Settings.ClutchLink}
                underline="none"
                target="_blank"
                rel="noreferrer"
                aria-label="Read more about Varbintech on Clutch"
              >
                <ClutchSmallIcon />
              </ContactLink>
            </Stack>
          </ContactMainContainer>
        </ContactContainer>
      </Container>
    </PageContainer>
  );
};

export default Contact;

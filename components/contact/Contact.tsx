import type { FC } from 'react';

import Image from 'next/image';

import Container from '@mui/material/Container';

import type { SocialIcon } from '../../models';

import RectangleBoxWhiteIcon from '../common/icon-rectangle-box/RectangleBoxWhiteIcon';
import RectangleLeftFillIcon from '../common/icon-rectangle-left-fill/RectangleLeftFillIcon';
import SocialIcons from '../common/social-icons/SocialIcons';

import {
  IconLeftContainer,
  PageContainer,
  ContactContainer,
  ContactMainContainer,
  ContactImageContainer,
  ContactEmail,
  ContactText,
  ImageWrapper,
  ContactIconContainer,
} from './styled-components';

import contactBg from '../../public/contact-bg.webp';

interface ContactProps {
  data: Array<SocialIcon>;
}

const Contact: FC<ContactProps> = ({ data }) => {
  return (
    <PageContainer>
      <IconLeftContainer>
        <RectangleLeftFillIcon />
      </IconLeftContainer>

      <Container maxWidth="lg">
        <ContactContainer direction={{ xs: 'column', md: 'row-reverse' }}>
          <ContactImageContainer>
            <ImageWrapper>
              <Image
                unoptimized
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

            <SocialIcons data={data} inverseColor />
          </ContactMainContainer>
        </ContactContainer>
      </Container>
    </PageContainer>
  );
};

export default Contact;

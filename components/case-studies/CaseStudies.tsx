import type { FC } from 'react';

import Image from 'next/image';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import Chip from '../../components/common/chip/Chip';
import Button from '../../components/common/buttons/Button';
import Feedback from '../../components/common/feedback/Feedback';
import RectangleIcon from '../../components/common/icon-rectangle/RectangleIcon';

import {
  PageContainer,
  PageLightContainer,
  ImageContainer,
  ChipContainer,
  TextContainer,
  ListContainer,
  ImageWrapper,
  IconContainer,
  IconLeftContainer,
} from './styled-components';

interface CaseStudiesProps {
  leftImageFirst: boolean;
  leftImageSecond: boolean;
}

const CaseStudies: FC<CaseStudiesProps> = props => {
  const { leftImageFirst, leftImageSecond } = props;

  return (
    <>
      <PageContainer>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', md: leftImageFirst ? 'row' : 'row-reverse' }}
            spacing={{ xs: '35px', lg: '95px' }}
          >
            <ImageContainer>
              <ImageWrapper>
                <Image
                  fill
                  src="/project1.png"
                  alt="The final result of cooperation between TIN and the Varbintech Team for the Strasbourg directory project"
                />
                {leftImageFirst ? (
                  <IconLeftContainer>
                    <RectangleIcon />
                  </IconLeftContainer>
                ) : (
                  <IconContainer>
                    <RectangleIcon />
                  </IconContainer>
                )}
              </ImageWrapper>
            </ImageContainer>

            <TextContainer>
              <Typography
                variant="h2"
                marginBottom={1}
                sx={{ fontSize: { xs: '24px', lg: '32px' } }}
              >
                TIN - Strasbourg directory
              </Typography>
              <Typography>
                The global retail platform for products from the past, present, and future. It
                provides over 2M listings from streetwear and designer brands with flexible filters
                and a top-notch user experience.
              </Typography>
              <ChipContainer>
                <Chip label="Wordpress" href="#" component="a" />
                <Chip label="Front-end" href="#" component="a" />
                <Chip label="Backend" href="#" component="a" />
                <Chip label="Team augmentation" href="#" component="a" />
                <Chip label="Code review" href="#" component="a" />
              </ChipContainer>
              <Typography variant="h6">Results:</Typography>
              <ListContainer>
                <li>3+ years of cooperation with successfully implemented all needed features</li>
                <li>4.9 rating on App Store</li>
              </ListContainer>
              <Button href="#">View full case study</Button>
            </TextContainer>
          </Stack>
          <Feedback
            text="The latest version of the portal looks great and works great. Awesome job"
            name="Gene Foo"
            src="/photo2.png"
            company="Director at"
            companyLink="TIN"
          />
        </Container>
      </PageContainer>
      <PageLightContainer>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', md: leftImageSecond ? 'row' : 'row-reverse' }}
            spacing={{ xs: '35px', lg: '95px' }}
          >
            <ImageContainer>
              <ImageWrapper>
                <Image
                  fill
                  src="/project2.png"
                  alt="The final result of cooperation between Digital Toucan and the Varbintech Team for the OKR for Jira project"
                />
                {leftImageSecond ? (
                  <IconLeftContainer>
                    <RectangleIcon />
                  </IconLeftContainer>
                ) : (
                  <IconContainer>
                    <RectangleIcon />
                  </IconContainer>
                )}
              </ImageWrapper>
            </ImageContainer>

            <TextContainer>
              <Typography
                variant="h2"
                marginBottom={1}
                sx={{ fontSize: { xs: '24px', lg: '32px' } }}
              >
                Digital Toucan - OKR for Jira
              </Typography>
              <Typography>
                The global retail platform for products from the past, present, and future. It
                provides over 2M listings from streetwear and designer brands with flexible filters
                and a top-notch user experience.
              </Typography>
              <ChipContainer>
                <Chip label="Wordpress" href="#" component="a" />
                <Chip label="Front-end" href="#" component="a" />
                <Chip label="Backend" href="#" component="a" />
                <Chip label="Team augmentation" href="#" component="a" />
                <Chip label="Code review" href="#" component="a" />
              </ChipContainer>
              <Typography variant="h6">Results:</Typography>
              <ListContainer>
                <li>3+ years of cooperation with successfully implemented all needed features</li>
                <li>4.9 rating on App Store</li>
              </ListContainer>
              <Button href="#">View full case study</Button>
            </TextContainer>
          </Stack>
          <Feedback
            text="Vitalii and Varbintech are amazing software developers. Vitalii was hired to help us with one layer of one of our products. Over a year of fantastic collaboration, Vitalii helped us grow the team by 5 people contributing to all aspects of 3 products that our company has. Entire Varbintech is very professional, people are very friendly, yet approachable. They have strong technical skills, quality oriented mindset and communicate fluently and directly. It's been absolute pleasure to work with them. They helped make our products better and teams stronger. Thanks!"
            name="Filip Rogaczewski"
            src="/photo1.png"
            company="Product Director & Co-Founder"
          />
        </Container>
      </PageLightContainer>
    </>
  );
};

export default CaseStudies;

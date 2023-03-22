import type { FC } from 'react';

import Image from 'next/image';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import type { CaseStudy } from '../../models';

import RectangleIcon from '../common/icon-rectangle/RectangleIcon';
import Feedback from '../common/feedback/Feedback';
import CaseStudyContent from './CaseStudyContent';

import { PageLightContainer, ImageContainer, ImageWrapper, IconLeftContainer } from './styled-components';

const CaseStudyOdd: FC<{ data: CaseStudy }> = ({ data }) => {
  return (
    <PageLightContainer key={data.id}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: '35px', lg: '95px' }}>
          <ImageContainer>
            <ImageWrapper>
              <Image fill src={data.projectImage} alt={data.projectImageAlt} />
              <IconLeftContainer>
                <RectangleIcon />
              </IconLeftContainer>
            </ImageWrapper>
          </ImageContainer>

          <CaseStudyContent data={data} />
        </Stack>

        <Feedback
          text={data.feedback.text}
          name={data.feedback.name}
          src={data.feedback.src}
          company={data.feedback.company}
          companyName={data.feedback.companyName}
          companyLinkHref={data.feedback.companyLinkHref}
          linkedInLink={data.feedback.linkedInLink}
        />
      </Container>
    </PageLightContainer>
  );
};

export default CaseStudyOdd;

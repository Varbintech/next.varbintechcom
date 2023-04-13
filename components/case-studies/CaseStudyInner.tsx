import type { FC } from 'react';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import type { CaseStudy } from '../../models';

import Feedback from '../common/feedback/Feedback';
import ChipGroup from '../common/chip/ChipGroup';
// import ButtonLink from '../common/buttons/ButtonLink';
import RectangleIcon from '../common/icon-rectangle/RectangleIcon';

import {
  PageContainer,
  ImageContainer,
  ChipContainer,
  TextContainer,
  ListContainer,
  ImageWrapper,
  IconContainer,
  IconLeftContainer,
} from './styled-components';

interface CaseStudyInnerProps {
  direction: 'row' | 'row-reverse';
  data: CaseStudy;
}

const CaseStudyInner: FC<CaseStudyInnerProps> = ({ direction, data }) => {
  const {
    // id,
    projectImage,
    projectImageAlt,
    projectTitle,
    projectDescription,
    projectTags,
    results,
    feedback,
  } = data;

  return (
    <PageContainer className={direction === 'row' ? 'lightBackground' : ''}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: direction }}
          spacing={{ xs: '35px', lg: '95px' }}
          marginBottom={{ xs: '48px', lg: '100px' }}
        >
          <ImageContainer>
            <ImageWrapper>
              <span className="inner-wrapper">
                {/* eslint-disable @next/next/no-img-element */}
                <img
                  loading="lazy"
                  sizes={projectImage.sizes}
                  srcSet={projectImage.srcSet}
                  alt={projectImageAlt}
                  width={projectImage.width}
                  height={projectImage.height}
                />
              </span>

              {direction === 'row' ? (
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
            <Typography variant="h2" marginBottom={1} sx={{ fontSize: { xs: '24px', lg: '32px' } }}>
              {projectTitle}
            </Typography>

            {projectDescription.map((description, descriptionIndex) => {
              return (
                <Typography key={descriptionIndex} gutterBottom>
                  {description}
                </Typography>
              );
            })}

            <ChipContainer>
              <ChipGroup data={projectTags} />
            </ChipContainer>

            {results.length ? (
              <>
                <Typography variant="h6" component="p">
                  Results:
                </Typography>

                <ListContainer>
                  {results.map((result, resultIndex) => (
                    <li key={resultIndex}>{result}</li>
                  ))}
                </ListContainer>
              </>
            ) : null}

            {/* @TODO Uncomment after Headless CMS */}
            {/* <ButtonLink href={`/case-studies/${id}`}>View full case study</ButtonLink> */}
          </TextContainer>
        </Stack>

        <Feedback {...feedback} />
      </Container>
    </PageContainer>
  );
};

export default CaseStudyInner;

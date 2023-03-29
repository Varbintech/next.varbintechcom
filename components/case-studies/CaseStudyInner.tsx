import type { FC } from 'react';

import Image from 'next/image';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import type { CaseStudy } from '../../models';

import Feedback from '../common/feedback/Feedback';
import Chip, { type ChipProps } from '../common/chip/Chip';
// import Button from '../common/buttons/Button';
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
        <Stack direction={{ xs: 'column', md: direction }} spacing={{ xs: '35px', lg: '95px' }}>
          <ImageContainer>
            <ImageWrapper>
              <span className="inner-wrapper">
                <Image
                  priority
                  alt={projectImageAlt}
                  src={projectImage.name}
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
              {projectTags.map((tag, tagIndex) => {
                const additionalProps: Pick<ChipProps, 'component' | 'href'> = tag.link
                  ? {
                      href: tag.link,
                      component: 'a',
                    }
                  : {};

                return <Chip {...additionalProps} key={tagIndex} label={tag.name} />;
              })}
            </ChipContainer>

            {results.length ? (
              <>
                <Typography variant="h6" component="p">Results:</Typography>

                <ListContainer>
                  {results.map((result, resultIndex) => (
                    <li key={resultIndex}>{result}</li>
                  ))}
                </ListContainer>
              </>
            ) : null}

            {/* @TODO Uncomment when case study is ready */}
            {/* <Button href="#">View full case study</Button> */}
          </TextContainer>
        </Stack>

        <Feedback {...feedback} />
      </Container>
    </PageContainer>
  );
};

export default CaseStudyInner;

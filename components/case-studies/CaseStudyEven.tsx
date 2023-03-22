import type { FC } from 'react';

import Image from 'next/image';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import type { CaseStudy } from '../../models';

import Chip from '../common/chip/Chip';
// import Button from '../common/buttons/Button';
import Feedback from '../common/feedback/Feedback';
import RectangleIcon from '../common/icon-rectangle/RectangleIcon';

import {
  PageContainer,
  ImageContainer,
  ChipContainer,
  TextContainer,
  ListContainer,
  ImageWrapper,
  IconContainer,
} from './styled-components';

const CaseStudyEven: FC<{ data: CaseStudy }> = ({ data }) => {
  return (
    <PageContainer key={data.id}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row-reverse' }}
          spacing={{ xs: '35px', lg: '95px' }}
        >
          <ImageContainer>
            <ImageWrapper>
              <Image
                fill
                src={data.projectImage}
                alt={data.projectImageAlt}
              />
              <IconContainer>
                <RectangleIcon />
              </IconContainer>
            </ImageWrapper>
          </ImageContainer>

          <TextContainer>
            <Typography
              variant="h2"
              marginBottom={1}
              sx={{ fontSize: { xs: '24px', lg: '32px' } }}
            >
              {data.projectTitle}
            </Typography>

            {data.projectDescription.map((description, descriptionIndex) => {
              return (
                <Typography key={descriptionIndex} gutterBottom={descriptionIndex > data.projectDescription.length - 1}>
                  {description}
                </Typography>
              );
            })}

            <ChipContainer>
              {data.projectTags.map((tag, tagIndex) => (
                <Chip key={tagIndex} label={tag.name} href={tag.link} component="a" />
              ))}
            </ChipContainer>

            <Typography variant="h6">Results:</Typography>

            <ListContainer>
              {data.results.map((result, resultIndex) => (
                <li key={resultIndex}>{result}</li>
              ))}
            </ListContainer>

            {/* @TODO Uncomment when case study is ready */}
            {/* <Button href="#">View full case study</Button> */}
          </TextContainer>
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
    </PageContainer>
  );
};

export default CaseStudyEven;

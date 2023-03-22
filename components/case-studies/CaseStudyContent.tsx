import type { FC } from 'react';

import Image from 'next/image';

import Typography from '@mui/material/Typography';

import type { CaseStudy } from '../../models';

import Chip from '../common/chip/Chip';
// import Button from '../common/buttons/Button';
import RectangleIcon from '../common/icon-rectangle/RectangleIcon';

import {
  ImageContainer,
  ChipContainer,
  TextContainer,
  ListContainer,
  ImageWrapper,
  IconContainer,
} from './styled-components';

const CaseStudyContent: FC<{ data: CaseStudy }> = ({ data }) => {
  return (
    <>
      <ImageContainer>
        <ImageWrapper>
          <Image fill src={data.projectImage} alt={data.projectImageAlt} />
          <IconContainer>
            <RectangleIcon />
          </IconContainer>
        </ImageWrapper>
      </ImageContainer>

      <TextContainer>
        <Typography variant="h2" marginBottom={1} sx={{ fontSize: { xs: '24px', lg: '32px' } }}>
          {data.projectTitle}
        </Typography>

        {data.projectDescription.map((description, descriptionIndex) => {
          return (
            <Typography key={descriptionIndex} gutterBottom>
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
    </>
  );
};

export default CaseStudyContent;

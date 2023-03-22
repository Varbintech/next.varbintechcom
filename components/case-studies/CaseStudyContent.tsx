import type { FC } from 'react';

import Image from 'next/image';

import Typography from '@mui/material/Typography';

import type { CaseStudy } from '../../models';

import Chip, { type ChipLinkProps } from '../common/chip/Chip';
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
          <span className="inner-wrapper">
            <Image fill src={data.projectImage} alt={data.projectImageAlt} />
          </span>

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
          {data.projectTags.map((tag, tagIndex) => {
            const additionalProps: Pick<ChipLinkProps, 'component' | 'href'> = tag.link ? {
              href: tag.link,
              component: 'a',
            } : {};

            return (
              <Chip {...additionalProps} key={tagIndex} label={tag.name} />
            );
          })}
        </ChipContainer>

        {data.results.length
          ? (
            <>
              <Typography variant="h6">Results:</Typography>

              <ListContainer>
                {data.results.map((result, resultIndex) => (
                  <li key={resultIndex}>{result}</li>
                ))}
              </ListContainer>
            </>
          )
          : null
        }

        {/* @TODO Uncomment when case study is ready */}
        {/* <Button href="#">View full case study</Button> */}
      </TextContainer>
    </>
  );
};

export default CaseStudyContent;

import type { FC } from 'react';

import Typography from '@mui/material/Typography';

import type { CaseStudy } from '../../models';

import Chip from '../common/chip/Chip';
// import Button from '../common/buttons/Button';

import { ChipContainer, TextContainer, ListContainer } from './styled-components';

const CaseStudyContent: FC<{ data: CaseStudy }> = ({ data }) => {
  return (
    <>
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

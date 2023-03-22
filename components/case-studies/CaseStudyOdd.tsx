import type { FC } from 'react';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import type { CaseStudy } from '../../models';

import Feedback from '../common/feedback/Feedback';
import CaseStudyContent from './CaseStudyContent';

import { PageLightContainer } from './styled-components';

const CaseStudyOdd: FC<{ data: CaseStudy }> = ({ data }) => {
  return (
    <PageLightContainer key={data.id}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: '35px', lg: '95px' }}>
          <CaseStudyContent data={data} />
        </Stack>

        <Feedback {...data.feedback} />
      </Container>
    </PageLightContainer>
  );
};

export default CaseStudyOdd;

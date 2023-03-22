import type { FC } from 'react';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import type { CaseStudy } from '../../models';

import Feedback from '../common/feedback/Feedback';
import CaseStudyContent from './CaseStudyContent';

import { PageContainer } from './styled-components';

const CaseStudyEven: FC<{ data: CaseStudy }> = ({ data }) => {
  return (
    <PageContainer key={data.id}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row-reverse' }} spacing={{ xs: '35px', lg: '95px' }}>
          <CaseStudyContent data={data} />
        </Stack>

        <Feedback {...data.feedback} />
      </Container>
    </PageContainer>
  );
};

export default CaseStudyEven;

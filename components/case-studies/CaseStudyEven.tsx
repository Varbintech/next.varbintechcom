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

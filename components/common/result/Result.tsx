import type { FC, ReactNode } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import type { ProjectResultInfo } from '../../../models';

/* import Feedback from '../feedback/Feedback'; */
import { PageContainer } from './styled-components';

interface ResultProps {
  data: {
    resultInfo: Array<ProjectResultInfo>;
    title?: string;
  };
}

interface ResultContainerProps {
  children: ReactNode;
}

export const ResultContainer = ({ children }: ResultContainerProps) => (
  <PageContainer>{children}</PageContainer>
);

const Result: FC<ResultProps> = ({ data }) => {
  const { resultInfo, title } = data;

  return (
    <ResultContainer>
      <Container maxWidth="lg">
        <Grid container spacing={3} columns={12} sx={{ marginBottom: { xs: '36px', lg: '58px' } }}>
          <Grid container item direction="column" xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
              {title || 'Results'}
            </Typography>
          </Grid>

          {resultInfo.map((item, index) => {
            return (
              <Grid key={index} container item direction="column" xs={4} md={3}>
                <Typography variant="h3" marginBottom={1.25}>
                  {item.name}
                </Typography>
                {item.text}
              </Grid>
            );
          })}
        </Grid>

        {/* <Feedback {...data.feedback} /> */}
      </Container>
    </ResultContainer>
  );
};

export default Result;

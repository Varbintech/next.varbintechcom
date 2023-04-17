import type { FC } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import type { CaseStudy } from '../../../models';

import Feedback from '../feedback/Feedback';
import { PageContainer } from './styled-components';

interface ResultProps {
  data: CaseStudy;
}

const Result: FC<ResultProps> = props => {
  const { data } = props;

  return (
    <PageContainer>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          columns={12}
          sx={{ marginBottom: { xs: '36px', lg: '58px' } }}
        >
          <Grid container item direction="column" xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
              Result
            </Typography>
          </Grid>
          {data.resultInfo.map((item, index) => {
            return (
              <Grid key={index} container item direction="column" xs={4} md={3}>
                <Typography variant="h3" marginBottom={1.25}>{item.name}</Typography>
                {item.text}
              </Grid>
            );
          })}
        </Grid>
        <Feedback {...data.feedback} />
      </Container>
    </PageContainer>
  );
};

export default Result;

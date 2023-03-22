import type { FC } from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { PricingPlan } from '../../models';

import PlanItem from './PlanItem';

import { PageContainer } from './styled-components';

interface PricingPlanProps {
  data: Array<PricingPlan>;
}

const PricingPlan: FC<PricingPlanProps> = ({ data }) => {
  return (
    <PageContainer>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            marginBottom: { xs: '36px', lg: '58px' },
            fontSize: { xs: '32px', lg: '40px' },
          }}
        >
          Choose a plan that match your project
        </Typography>
        <Grid
          container
          spacing={{ xs: 3, lg: 3.75 }}
          columns={12}
          marginBottom={{ xs: '40px', lg: '30px' }}
        >
          {data.map(pricingPlan => {
            return (
              <Grid key={pricingPlan.id} item xs={12} md={4}>
                <PlanItem data={pricingPlan} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </PageContainer>
  );
};

export default PricingPlan;

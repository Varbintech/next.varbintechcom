import dynamic from 'next/dynamic';

import { type FC, useState } from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import type { PricingPlanItem, PlanType, ChackoutSrcList } from '../../models';
import Loading from '../common/loading/Loading';

import PlanItem from './PlanItem';
import CustomServices from './CustomServices';

import { PageContainer } from './styled-components';

interface PricingPlanProps {
  data: Array<PricingPlanItem>;
  checkoutSrcList: ChackoutSrcList;
}

const DynamicDialogCustomServices = dynamic(
  () => import('../dialogs/custom-services/DialogCustomServices'),
  {
    loading: () => <Loading />,
  },
);

const DynamicDialogCheckout = dynamic(() => import('../dialogs/checkout/DialogCheckout'), {
  loading: () => <Loading />,
});

const PricingPlan: FC<PricingPlanProps> = ({ data, checkoutSrcList }) => {
  const [showDialogCustomServices, setShowDialogCustomServices] = useState(false);
  const [showDialogCheckout, setShowDialogCheckout] = useState(false);
  const [checkoutSrc, setCheckoutSrc] = useState<string>('');

  const handleShowDialogCustomServices = (): void => {
    setShowDialogCustomServices(true);
  };

  const handleCloseDialogCustomServices = (): void => {
    setShowDialogCustomServices(false);
  };

  const handleShowDialogCheckout = (planType: PlanType): void => {
    setShowDialogCheckout(true);
    setCheckoutSrc(checkoutSrcList[planType]);
  };

  const handleCloseDialogCheckout = (): void => {
    setShowDialogCheckout(false);
  };

  return (
    <PageContainer id="pricing">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            marginBottom: { xs: '36px', lg: '58px' },
            fontSize: { xs: '32px', lg: '40px' },
          }}
        >
          Choose a plan that matches your project
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
                <PlanItem data={pricingPlan} onOpenCheckout={handleShowDialogCheckout} />
              </Grid>
            );
          })}
        </Grid>

        <CustomServices onOpenDialog={handleShowDialogCustomServices} />

        {showDialogCustomServices ? (
          <DynamicDialogCustomServices onClose={handleCloseDialogCustomServices} />
        ) : null}

        {showDialogCheckout ? (
          <DynamicDialogCheckout onClose={handleCloseDialogCheckout} checkoutSrc={checkoutSrc} />
        ) : null}
      </Container>
    </PageContainer>
  );
};

export default PricingPlan;

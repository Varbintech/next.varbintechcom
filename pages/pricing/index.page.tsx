import Box from '@mui/material/Box';

import HeroPricing from '../../components/hero/HeroPricing';
import HeadIndex from '../../components-pages/head/HeadIndex';
import PricingPlan from '../../components/pricing/PricingPlan';
import { DiscoverInner } from '../../components/discover/Discover';

import { pricingPlan, checkoutSrcList } from '../../mocks/pricing-plan';

import { MetaData } from '../../constants/meta';

export default function PricingPage() {
  return (
    <>
      <HeadIndex title={`Pricing | ${MetaData.IndexAuthor}`} />

      <>
        <HeroPricing centered />

        <PricingPlan data={pricingPlan} checkoutSrcList={checkoutSrcList} />

        <Box my={8}>
          <DiscoverInner />
        </Box>
      </>
    </>
  );
}

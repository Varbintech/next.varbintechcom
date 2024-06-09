import type { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

import HeroPricing from '../../components/hero/HeroPricing';
import HeadIndex from '../../components-pages/head/HeadIndex';

import { MetaData } from '../../constants/meta';

const BoxDynamic = dynamic(() => import('@mui/material/Box'));

const PricingPlanDynamic = dynamic(() => import('../../components/pricing/PricingPlan'));
const DiscoverInnerDynamic = dynamic(() =>
  import('../../components/discover/Discover').then(mod => mod.DiscoverInner),
);

export const getStaticProps: GetStaticProps<any> = async () => {
  const mocks = await import('../../mocks/pricing-plan');

  return {
    props: {
      pricingPlan: mocks.pricingPlan,
      checkoutSrcList: mocks.checkoutSrcList,
      className: '',
    },
  };
};

export default function PricingPage(props: any) {
  const { pricingPlan, checkoutSrcList } = props;

  return (
    <>
      <HeadIndex title={`Pricing | ${MetaData.IndexAuthor}`} />

      <>
        <HeroPricing centered />

        <PricingPlanDynamic data={pricingPlan} checkoutSrcList={checkoutSrcList} />

        <BoxDynamic my={8}>
          <DiscoverInnerDynamic />
        </BoxDynamic>
      </>
    </>
  );
}

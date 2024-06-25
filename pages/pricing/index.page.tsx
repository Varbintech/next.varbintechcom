import type { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

import HeroPricing from '../../components/hero/HeroPricing';
import HeadPricing from '../../components-pages/head/HeadCaseStudyDetails';

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
      <HeadPricing
        title={`Pricing | ${MetaData.IndexAuthor}`}
        keywords={MetaData.IndexKeywords}
        description="We help startups and businesses of all sizes create exceptional front-end solutions that stand out. From concept to launch, we've got you covered."
        image={MetaData.Image}
        imageAlt={MetaData.ImageAlt}
        imageWidth={1200}
        imageHeight={630}
        ogUrl={`${MetaData.Url}/pricing`}
      />

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

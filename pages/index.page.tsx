import HeadIndex from '../components-pages/head/HeadIndex';
import Hero from '../components/hero/Hero';
import CaseStudies from '../components/case-studies/CaseStudies';
import Services from '../components/services/Services';
import PricingPlan from '../components/pricing/PricingPlan';
import CustomServices from '../components/pricing/CustomServices';
import Discover from '../components/discover/Discover';
import СubeComponent from '../components/common/icon-rectangle-box/CubeComponent';

import { Settings } from '../constants/settings';

import { caseStudies } from '../mocks/case-study';
import { pricingPlan, checkoutSrcList } from '../mocks/pricing-plan';
import { services } from '../mocks/services';

export default function Home() {
  return (
    <>
      <HeadIndex />

      <>
        <Hero
          title="A development team with superpower"
          subtitle="We help startups and companies of all shapes and sizes to build high-quality Front-End
        solutions."
        />
        <CaseStudies data={caseStudies} />
        <СubeComponent isDarkTheme={Settings.DarkThemeAvailable} />
        <Services data={services} />
        <PricingPlan data={pricingPlan} checkoutSrcList={checkoutSrcList} />
        <CustomServices />
        <Discover />
      </>
    </>
  );
}

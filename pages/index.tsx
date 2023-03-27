import type { GetStaticProps } from 'next';

import Head from './components/Head';

import Main from '../components/common/Main';
import Navigation from '../components/common/navigation/Navigation';
import Hero from '../components/hero/Hero';
import CaseStudies from '../components/case-studies/CaseStudies';
import Services from '../components/services/Services';
import PricingPlan from '../components/pricing/PricingPlan';

import { caseStudies } from '../mocks/case-study';
import { pricingPlan } from '../mocks/pricing-plan';
import { services } from '../mocks/services';

import { Settings } from '../constants/settings';

export default function Home() {
  return (
    <>
      <Head />

      <Navigation />

      <Main>
        <Hero />
        <CaseStudies data={caseStudies} />
        <Services data={services} />
        <PricingPlan data={pricingPlan} />
      </Main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every `Settings.RevalidateTime` seconds
    revalidate: Settings.RevalidateTime, // In seconds
  };
};

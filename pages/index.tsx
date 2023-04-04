import type { GetStaticProps } from 'next';

import Head from './components/Head';

import Main from '../components/common/Main';
import Navigation from '../components/common/navigation/Navigation';
import Hero from '../components/hero/Hero';
import CaseStudies from '../components/case-studies/CaseStudies';
import Services from '../components/services/Services';
import PricingPlan from '../components/pricing/PricingPlan';
import Discover from '../components/discover/Discover';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import СubeComponent from '../components/common/icon-rectangle-box/CubeComponent';

import { caseStudies } from '../mocks/case-study';
import { pricingPlan } from '../mocks/pricing-plan';
import { services } from '../mocks/services';
import { socialIcons } from '../mocks/social-icons';
import { footerData } from '../mocks/footer-data';

import { Settings } from '../constants/settings';

export default function Home() {
  return (
    <>
      <Head />

      <Navigation />

      <Main>
        <Hero
          title="A development team with superpower"
          subtitle="We help startups and companies of all shapes and sizes to build high-quality Front-End
          solutions."
        />
        <CaseStudies data={caseStudies} />
        <СubeComponent />
        <Services data={services} />
        <PricingPlan data={pricingPlan} />
        <Discover />
        <Contact data={socialIcons} />
        <Footer data={footerData} />
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

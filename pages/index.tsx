import type { GetServerSideProps } from 'next';

import Head from './components/Head';

import Main from '../components/common/Main';
import Navigation from '../components/common/navigation/Navigation';
import Hero from '../components/hero/Hero';
import CaseStudies from '../components/case-studies/CaseStudies';
import Services from '../components/services/Services';

import { caseStudies } from '../mocks/case-study';
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
      </Main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    'Cache-Control',
    // @TODO think about stale-while-revalidate=${Settings.RevalidateTime}
    `public, max-age=${Settings.MaxAge}, immutable`,
  );

  return {
    props: {},
  };
};

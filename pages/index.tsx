import Head from './components/Head';
import Main from '../components/common/Main';

import Navigation from '../components/common/navigation/Navigation';
import Hero from '../components/hero/Hero';
import CaseStudies from '../components/case-studies/CaseStudies';

export default function Home() {
  return (
    <>
      <Head />

      <Navigation />

      <Main>
        <Hero />
        <CaseStudies />
      </Main>
    </>
  );
}

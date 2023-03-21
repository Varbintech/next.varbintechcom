import Head from './components/Head';
import Main from '../components/common/Main';

import Navigation from '../components/common/navigation/Navigation';
import Hero from '../components/hero/Hero';
import CaseStudies from '../components/case-studies/CaseStudies';
import Services from '../components/services/Services';

export default function Home() {
  return (
    <>
      <Head />

      <Navigation />

      <Main>
        <Hero />
        <CaseStudies leftImageFirst={false} leftImageSecond={true} />
        <Services />
      </Main>
    </>
  );
}

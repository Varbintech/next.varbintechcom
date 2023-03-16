import Head from './components/Head';
import Main from '../components/common/Main';

import Hero from 'components/hero/Hero';

export default function Home() {
  return (
    <>
      <Head />

      <Main>
        <Hero />
      </Main>
    </>
  );
}

import type { GetStaticProps } from 'next';

import Hero from '../../components/hero/Hero';
import TabsFilter from '../../components/common/tabsFilter/TabsFilter';
import CaseStudies from '../../components/case-studies/CaseStudies';

import { caseStudies } from '../../mocks/case-study';
import { tabsItems } from '../../mocks/tabs-items';

import { Settings } from '../../constants/settings';

const CaseStudiesPage = () => {
  return (
    <>
      <Hero
        small
        title="Case studies that we feel proud"
        subtitle="We help startups and companies of all shapes and sizes to build high-quality Front-End
        solutions."
      />
      <TabsFilter data={tabsItems} />
      <CaseStudies data={caseStudies} />
    </>
  );
};

export default CaseStudiesPage;

export const getStaticProps: GetStaticProps = async () => {
  if (process.env.NODE_ENV === 'production') {
    return { notFound: true };
  }

  return {
    props: {},
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every `Settings.RevalidateTime` seconds
    revalidate: Settings.RevalidateTime, // In seconds
  };
};

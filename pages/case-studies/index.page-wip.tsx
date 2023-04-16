import Hero from '../../components/hero/Hero';
import TabsFilter from '../../components/common/tabsFilter/TabsFilter';
import CaseStudies from '../../components/case-studies/CaseStudies';

import { caseStudies } from '../../mocks/case-study';
import { tabsItems } from '../../mocks/tabs-items';

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

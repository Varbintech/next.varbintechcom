import Head from '../components/Head';

import Main from '../../components/common/Main';
import Navigation from '../../components/common/navigation/Navigation';

import Hero from '../../components/hero/Hero';
import TabsFilter from '../../components/common/tabsFilter/TabsFilter';
import CaseStudies from '../../components/case-studies/CaseStudies';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
// import Questions from '../../components/questions/Questions';

import { caseStudies } from '../../mocks/case-study';
import { socialIcons } from '../../mocks/social-icons';
import { footerData } from '../../mocks/footer-data';
import { tabsItems } from '../../mocks/tabs-items';
// import { questions } from '../../mocks/questions';

const CaseStudiesPage = () => {
  return (
    <>
      <Head />

      <Navigation />

      <Main>
        <Hero
          small
          title="Case studies that we feel proud"
          subtitle="We help startups and companies of all shapes and sizes to build high-quality Front-End
          solutions."
        />
        <TabsFilter data={tabsItems} />
        <CaseStudies data={caseStudies} />
        {/* @TODO uncomment when FAQ ia ready */}
        {/* <Questions data={questions} /> */}
        <Contact data={socialIcons} />
        <Footer data={footerData} />
      </Main>
    </>
  );
};

export default CaseStudiesPage;

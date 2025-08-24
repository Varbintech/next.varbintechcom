import type { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

import HeadIndex from '../components-pages/head/HeadIndex';
import { CaseStudiesContainer } from '../components/case-studies/styled-components';

import { Settings } from '../constants/settings';
import { MetaData } from '../constants/meta';

import { useGenerateEventGa } from '../hooks/use-generate-event-ga';

import type { CaseStudyAllStaticProps, Service, PolicyLink } from '../models';

import { getStaticPropsCaseStudies } from '../utils/api.case-study';
import { getStaticPropsHireEngineersLinks } from '../utils/api.hire-engineers';
import { fetchStaticPagesPolicyLinks } from '../utils/api.static-page';

const BoxDynamic = dynamic(() => import('@mui/material/Box'));
const HeroDynamic = dynamic(() => import('../components/hero/Hero'));
const ImportantUpdateDynamic = dynamic(
  () => import('../components/common/important-update/ImportantUpdate'),
);
const ServicesDynamic = dynamic(() => import('../components/services/Services'));
const CustomServicesDynamic = dynamic(() => import('../components/pricing/CustomServices'));
const DiscoverDynamic = dynamic(() => import('../components/discover/Discover'));
const CubeComponentDynamic = dynamic(
  () => import('../components/common/icon-rectangle-box/CubeComponent'),
);
const CaseStudiesAllDynamic = dynamic(
  () => import('../components-pages/case-study/CaseStudiesAll'),
  {
    loading: () => <p>Loading...</p>,
  },
);

import JsonLdWebPage from '../components/json-ld/WebPage';
import JsonLdWebSite from '../components/json-ld/WebSite';
import JsonLdWebBreadcrumb from '../components/json-ld/Breadcrumb';

interface HomeStaticProps extends CaseStudyAllStaticProps {
  services: Array<Service>;
  policyLinks: Array<PolicyLink>;
}

export const getStaticProps: GetStaticProps<HomeStaticProps> = async () => {
  const caseStudies = await getStaticPropsCaseStudies(2);
  const hireEngineersLinks = await getStaticPropsHireEngineersLinks();
  const servicesMock = await import('../constants/services');
  const policyLinks = await fetchStaticPagesPolicyLinks();

  return {
    props: {
      ...caseStudies.props,
      services: servicesMock.services,
      className: '',
      hireEngineersLinks: hireEngineersLinks.props.data,
      policyLinks,
    },
  };
};

export default function Home(props: HomeStaticProps) {
  const {
    data: { lastCaseStudy, caseStudies },
    hireEngineersLinks,
    services,
  } = props;

  const handleUpdateLinkClick = useGenerateEventGa('link');

  return (
    <>
      <HeadIndex />

      <JsonLdWebSite />
      <JsonLdWebPage slug="/" description={MetaData.Description} name={MetaData.IndexAuthor} />
      <JsonLdWebBreadcrumb hireEngineersLinks={hireEngineersLinks} />

      <>
        <HeroDynamic
          title="A development team with superpower"
          subtitle={MetaData.Description}
          importantUpdateEl={
            <BoxDynamic mb={2}>
              <ImportantUpdateDynamic
                text="We posted a new case study:"
                linkText="Enjoy the reading here"
                linkUrl={`/case-studies/${lastCaseStudy.attributes.slug}`}
                id={`caseStudy_${lastCaseStudy.id}`}
                onGa={handleUpdateLinkClick}
              />
            </BoxDynamic>
          }
        />

        <CaseStudiesContainer>
          <CaseStudiesAllDynamic data={caseStudies} parentId="homePage" />
        </CaseStudiesContainer>

        <CubeComponentDynamic isDarkTheme={Settings.DarkThemeAvailable} />

        <ServicesDynamic data={services} />

        <BoxDynamic mt={{ xs: 9, md: 4 }}>
          <CustomServicesDynamic />
        </BoxDynamic>

        <DiscoverDynamic />
      </>
    </>
  );
}

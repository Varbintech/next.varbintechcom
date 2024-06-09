import type { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

import HeadIndex from '../components-pages/head/HeadIndex';
import { CaseStudiesContainer } from '../components/case-studies/styled-components';

import { Settings } from '../constants/settings';

import { useGenerateEventGa } from '../hooks/use-generate-event-ga';

import type { CaseStudyAllStaticProps, Service } from '../models';

import { getStaticPropsCaseStudies } from '../utils/api.case-study';

const BoxDynamic = dynamic(() => import('@mui/material/Box'));
const HeroDynamic = dynamic(() => import('../components/hero/Hero'));
const ImportantUpdateDynamic = dynamic(
  () => import('../components/common/important-update/ImportantUpdate'),
);
const ServicesDynamic = dynamic(() => import('../components/services/Services'));
const CustomServicesDynamic = dynamic(() => import('../components/pricing/CustomServices'));
const DiscoverDynamic = dynamic(() => import('../components/discover/Discover'));
const СubeComponentDynamic = dynamic(
  () => import('../components/common/icon-rectangle-box/CubeComponent'),
);
const CaseStudiesAllDynamic = dynamic(
  () => import('../components-pages/case-study/CaseStudiesAll'),
  {
    loading: () => <p>Loading...</p>,
  },
);

interface HomeStaticProps extends CaseStudyAllStaticProps {
  services: Array<Service>;
}

export const getStaticProps: GetStaticProps<HomeStaticProps> = async () => {
  const caseStudies = await getStaticPropsCaseStudies(2);
  const servicesMock = await import('../mocks/services');

  return {
    props: {
      ...caseStudies.props,
      services: servicesMock.services,
      className: '',
    },
  };
};

export default function Home(props: HomeStaticProps) {
  const {
    data: { lastCaseStudy, caseStudies },
    services,
  } = props;

  const handleUpdateLinkClick = useGenerateEventGa('link');

  return (
    <>
      <HeadIndex />

      <>
        <HeroDynamic
          title="A development team with superpower"
          subtitle="We help startups and companies of all shapes and sizes to build high-quality Front-End
        solutions."
          importantUpdateEl={
            <ImportantUpdateDynamic
              text="We posted a new case study "
              linkText="Enjoy the reading here"
              linkUrl={`/case-studies/${lastCaseStudy.attributes.slug}`}
              id={`caseStudy_${lastCaseStudy.id}`}
              onGa={handleUpdateLinkClick}
            />
          }
        />

        <CaseStudiesContainer>
          <CaseStudiesAllDynamic data={caseStudies} parentId="homePage" />
        </CaseStudiesContainer>

        <СubeComponentDynamic isDarkTheme={Settings.DarkThemeAvailable} />

        <ServicesDynamic data={services} />

        <BoxDynamic mt={{ xs: 9, md: 4 }}>
          <CustomServicesDynamic />
        </BoxDynamic>

        <DiscoverDynamic />
      </>
    </>
  );
}

import type { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

import Box from '@mui/material/Box';

import HeadIndex from '../components-pages/head/HeadIndex';
import Hero from '../components/hero/Hero';
import Services from '../components/services/Services';
import CustomServices from '../components/pricing/CustomServices';
import Discover from '../components/discover/Discover';
import СubeComponent from '../components/common/icon-rectangle-box/CubeComponent';
import ImportantUpdate from '../components/common/important-update/ImportantUpdate';
import { CaseStudiesContainer } from '../components/case-studies/styled-components';

import { Settings } from '../constants/settings';

import { services } from '../mocks/services';

import type { CaseStudyAllStaticProps, Service } from '../models';

import { getStaticPropsCaseStudies } from '../utils/api.case-study';

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

  return {
    props: {
      ...caseStudies.props,
      services,
      className: '',
    },
  };
};

export default function Home(props: HomeStaticProps) {
  const {
    data: { lastCaseStudy, caseStudies },
    services,
  } = props;

  return (
    <>
      <HeadIndex />

      <>
        <Hero
          title="A development team with superpower"
          subtitle="We help startups and companies of all shapes and sizes to build high-quality Front-End
        solutions."
          importantUpdateEl={
            <ImportantUpdate
              text="We posted a new case study "
              linkText="Enjoy the reading here"
              linkUrl={`/case-studies/${lastCaseStudy.attributes.slug}`}
            />
          }
        />

        <CaseStudiesContainer>
          <CaseStudiesAllDynamic data={caseStudies} />
        </CaseStudiesContainer>

        <СubeComponent isDarkTheme={Settings.DarkThemeAvailable} />

        <Services data={services} />

        <Box mt={{ xs: 9, md: 4 }}>
          <CustomServices />
        </Box>

        <Discover />
      </>
    </>
  );
}

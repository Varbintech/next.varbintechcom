import Box from '@mui/material/Box';

import HeadIndex from '../components-pages/head/HeadIndex';
import Hero from '../components/hero/Hero';
import CaseStudies from '../components/case-studies/CaseStudies';
import Services from '../components/services/Services';
import CustomServices from '../components/pricing/CustomServices';
import Discover from '../components/discover/Discover';
import СubeComponent from '../components/common/icon-rectangle-box/CubeComponent';

import { Settings } from '../constants/settings';

import { caseStudies } from '../mocks/case-study';
import { services } from '../mocks/services';

export default function Home() {
  return (
    <>
      <HeadIndex />

      <>
        <Hero
          title="A development team with superpower"
          subtitle="We help startups and companies of all shapes and sizes to build high-quality Front-End
        solutions."
        />
        <CaseStudies data={caseStudies} />
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

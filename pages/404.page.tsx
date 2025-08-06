import type { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { useGenerateEventGa } from '../hooks/use-generate-event-ga';

import Button from '../components/common/buttons/Button';
import HeadIndex from '../components-pages/head/HeadIndex';

import { CaseStudiesContainer } from '../components/case-studies/styled-components';
const HeroDynamic = dynamic(() => import('../components/hero/Hero'));
const ImportantUpdateDynamic = dynamic(
  () => import('../components/common/important-update/ImportantUpdate'),
);
const CaseStudiesAllDynamic = dynamic(
  () => import('../components-pages/case-study/CaseStudiesAll'),
  {
    loading: () => <p>Loading...</p>,
  },
);

import { Settings } from '../constants/settings';
import { getStaticPropsCaseStudies } from '../utils/api.case-study';
import type { CaseStudyAllStaticProps } from '../models';

export const getStaticProps: GetStaticProps<CaseStudyAllStaticProps> = async () => {
  const caseStudies = await getStaticPropsCaseStudies(2);

  return {
    props: {
      ...caseStudies.props,
      className: '',
    },
  };
};

export default function NotFound(props: CaseStudyAllStaticProps) {
  const {
    data: { caseStudies },
  } = props;

  const handleButtonClick = useGenerateEventGa('button');

  return (
    <>
      <HeadIndex follow={false} />

      <HeroDynamic
        small
        title="Oops! Something went wrong 😀"
        subtitle="Take a look at our case studies or book a call with us."
      />

      <Divider sx={{ marginBottom: 2 }} />

      <Stack direction="row" spacing={3} justifyContent="center" sx={{ marginBottom: 2 }}>
        <Button
          id="reserveASpotNotFound"
          size="large"
          target="_blank"
          href={Settings.CalendlyLink}
          onClick={handleButtonClick}
        >
          Book a call
        </Button>
      </Stack>

      <Divider sx={{ marginBottom: 2 }} />

      <CaseStudiesContainer>
        <CaseStudiesAllDynamic data={caseStudies} parentId="notFound" />
      </CaseStudiesContainer>

      <Stack
        direction={{
          xs: 'column',
          md: 'row',
        }}
        spacing={{
          xs: -1,
          md: 0,
        }}
        justifyContent="center"
        alignItems="center"
        sx={{ marginBottom: 4 }}
      >
        <Box
          sx={{
            marginBottom: {
              xs: 0,
              md: -2,
            },
          }}
        >
          <ImportantUpdateDynamic
            labelText="We are always happy to catch up"
            text=""
            linkText=""
            linkUrl=""
          />
        </Box>

        <Button
          id="reserveASpotNotFound"
          target="_blank"
          href={Settings.CalendlyLink}
          onClick={handleButtonClick}
        >
          Request a demo
        </Button>
      </Stack>
    </>
  );
}

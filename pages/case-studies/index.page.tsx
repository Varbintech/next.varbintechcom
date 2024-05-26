import type { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

import Hero from '../../components/hero/Hero';
import HeadCaseStudies from '../../components-pages/head/HeadCaseStudyDetails';
import { CaseStudiesContainer } from '../../components/case-studies/styled-components';
const CaseStudiesAllDynamic = dynamic(
  () => import('../../components-pages/case-study/CaseStudiesAll'),
  {
    loading: () => <p>Loading...</p>,
  },
);

import { MetaData } from '../../constants/meta';
import type { CaseStudyAllStaticProps } from '../../models';

import { getStaticPropsCaseStudies } from '../../utils/api.case-study';

export const getStaticProps: GetStaticProps<CaseStudyAllStaticProps> = async () =>
  await getStaticPropsCaseStudies();

const CaseStudiesPage = (props: CaseStudyAllStaticProps) => {
  const {
    data: { caseStudies, baseUrl, socialShareButtons },
  } = props;

  return (
    <>
      <HeadCaseStudies
        title={`Case studies that we feel proud | ${MetaData.IndexAuthor}`}
        description="We help startups and companies of all shapes and sizes to build high-quality Front-End solutions."
        keywords="case studies, front-end, web development, web design, front-end development, front-end design, front-end solutions, front-end services, front-end company, front-end agency, front-end development company, front-end development agency, front-end development services, front-end development solutions, front-end development case studies, front-end design case studies, front-end services case studies, front-end company case studies, front-end agency case studies, front-end development company case studies, front-end development agency case studies, front-end development services case studies, front-end development solutions case studies"
        image={MetaData.ImageCaseStudies}
        imageAlt={MetaData.ImageAltCaseStudies}
        ogUrl={`${baseUrl}/case-studies`}
        ogType={MetaData.IndexType}
      />

      <Hero
        small
        title="Case Studies that We Feel Proud"
        subtitle="We help startups and companies of all shapes and sizes to build high-quality Front-End
        solutions."
        socialIcons={socialShareButtons}
      />

      <CaseStudiesContainer>
        <CaseStudiesAllDynamic data={caseStudies} />
      </CaseStudiesContainer>
    </>
  );
};

export default CaseStudiesPage;

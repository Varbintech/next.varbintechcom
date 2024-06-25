import type { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

import HeadCaseStudies from '../../components-pages/head/HeadCaseStudyDetails';
import { CaseStudiesContainer } from '../../components/case-studies/styled-components';

const HeroDynamic = dynamic(() => import('../../components/hero/Hero'));
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
        description="Discover Varbintech's front-end development case studies. See successful projects in React, Angular, and Next.js for various industries."
        keywords="Front-end development case studies, Outsourced front-end development, Front-end development services, React case studies, Angular development projects, Next.js development examples, SaaS front-end solutions, Web application development"
        image={MetaData.ImageCaseStudies}
        imageAlt={MetaData.ImageAltCaseStudies}
        ogUrl={`${baseUrl}/case-studies`}
        ogType={MetaData.IndexType}
      />

      <HeroDynamic
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

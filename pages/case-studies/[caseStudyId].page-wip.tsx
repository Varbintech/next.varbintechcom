import { useRouter } from 'next/router';
import type { GetStaticProps } from 'next';

import Container from '@mui/material/Container';

import { useWindowLocation } from '../../hooks/use-window-location';

import { Settings } from '../../constants/settings';

import { caseStudies } from '../../mocks/case-study';

import type { CaseStudyStrapi, ResponseData } from '../../models';

import HeroDetails from '../../components/hero/HeroDetails';
import ImageWrapperComponent from '../../components/common/image-wrapper/ImageWrapper';
import FullInfoColumn from '../../components/common/full-info-column/FullInfoColumn';
import TextColumn from '../../components/common/text-column/TextColumn';
import ImagesColumn from '../../components/common/images-column/ImagesColumn';
import Result from '../../components/common/result/Result';
import CaseStudyNextItem from '../../components/case-studies/CaseStudyNextItem';

import { socialShareButtons } from '../../constants/social-share-buttons';

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.API_URL}/case-studies`);
  const caseStudies = (await res.json()) as ResponseData<CaseStudyStrapi>;

  const paths = caseStudies.data.map((item: CaseStudyStrapi) => ({
    params: {
      caseStudyId: item.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ data: CaseStudyStrapi }> = async ({ params }) => {
  const res = await fetch(
    `${process.env.API_URL}/case-studies?filters[slug][$eq]=${params?.caseStudyId}&populate=*`,
  );
  const json = (await res.json()) as { data: Array<CaseStudyStrapi> };

  console.warn('getStaticProps: ', json.data[0]);

  return {
    props: {
      data: json.data[0],
    },
  };
};

const CaseStudyDetailPage = (props: { data: CaseStudyStrapi }) => {
  const {
    query: { caseStudyId },
    isReady,
    asPath,
  } = useRouter();

  console.warn('CaseStudyDetailPage: ', props.data.attributes);

  const location = useWindowLocation(isReady);

  const data = caseStudies.find(item => item.id === Number(caseStudyId));

  const pageLink = (location?.origin && new URL(asPath, location?.origin).href) || '';

  const randomCaseStudy =
    caseStudies[Number(caseStudyId) + 1] ||
    caseStudies[Math.floor(Math.random() * caseStudies.length)];

  if (data) {
    return (
      <>
        <HeroDetails
          centered
          bgColored
          title={data.projectTitle}
          projectTags={data.projectTags}
          projectSocialIcons={socialShareButtons(pageLink)}
          isDarkTheme={Settings.DarkThemeAvailable}
        />
        <Container
          maxWidth="lg"
          sx={{
            marginTop: { xs: '-90px', md: '-160px' },
            marginBottom: { xs: '42px', md: '112px' },
          }}
        >
          <ImageWrapperComponent data={data.projectImage} largeWithBorder />
        </Container>
        <FullInfoColumn data={data.projectFullInfo} />
        <Container maxWidth="lg">
          {data &&
            data.projectDetails.map((item, index) => {
              if (item.label === 'TEXT') {
                return <TextColumn key={index} data={item} />;
              }

              if (item.label === 'IMAGE') {
                return <ImagesColumn key={index} data={item} />;
              }

              return null;
            })}
        </Container>

        <Result data={data} />

        <CaseStudyNextItem title={randomCaseStudy.projectTitle} id={randomCaseStudy.id} />
      </>
    );
  }

  return null;
};

export default CaseStudyDetailPage;

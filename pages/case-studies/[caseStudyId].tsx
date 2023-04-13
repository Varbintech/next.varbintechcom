import type { GetStaticProps, GetStaticPaths } from 'next';

import { useRouter } from 'next/router';

import HeroDetails from '../../components/hero/HeroDetails';
import ImageWrapperComponent from '../../components/common/image-wrapper/ImageWrapper';
import FullInfoColumn from '../../components/common/full-info-column/FullInfoColumn';
import TextColumn from '../../components/common/text-column/TextColumn';
import ImagesColumn from '../../components/common/images-column/ImagesColumn';
import Result from '../../components/common/result/Result';
import CaseStudyNextItem from '../../components/case-studies/CaseStudyNextItem';

import { caseStudies } from '../../mocks/case-study';

import { useWindowLocation } from '../../hooks/use-window-location';

import { Settings } from '../../constants/settings';

const CaseStudyDetailPage = () => {
  const {
    query: { caseStudyId },
    isReady,
    asPath,
  } = useRouter();
  const location = useWindowLocation(isReady);

  const data = caseStudies.find(item => item.id === Number(caseStudyId));

  const pageLink = location?.origin && new URL(asPath, location?.origin).href;
  const projectSocialIcons = [
    {
      id: 0,
      socialTitle: 'Facebook',
      socialLink: `https://www.facebook.com/sharer/sharer.php?u=${pageLink}%2F&amp;src=sdkpreparse`,
      socialIcon: 'facebookIcon',
      socialBorderRadius: '',
      socialAriaLabel: 'Share on Facebook',
    },
    {
      id: 1,
      socialTitle: 'LinkedIn',
      socialLink: `https://linkedin.com/shareArticle?url=${pageLink}`,
      socialIcon: 'linkedInIcon',
      socialBorderRadius: '2px',
      socialAriaLabel: 'Share on LinkedIn',
    },
    {
      id: 2,
      socialTitle: 'Twitter',
      socialLink: `https://twitter.com/intent/tweet?text=${pageLink}`,
      socialIcon: 'twitterIcon',
      socialBorderRadius: '',
      socialAriaLabel: 'Share on Twitter',
    },
  ];

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
          projectSocialIcons={projectSocialIcons}
        />
        <ImageWrapperComponent data={data.projectImage} />
        <FullInfoColumn data={data.projectFullInfo} />
        {data.projectDetails.map((item, index) => {
          if (item.label === 'TEXT') {
            return <TextColumn key={index} data={item} />;
          }
          if (item.label === 'IMAGE') {
            return <ImagesColumn key={index} data={item} />;
          }

          return null;
        })}
        <Result data={data} />
        <CaseStudyNextItem title={randomCaseStudy.projectTitle} id={randomCaseStudy.id} />
      </>
    );
  }

  return null;
};

export default CaseStudyDetailPage;

export const getStaticProps: GetStaticProps = async () => {
  if (process.env.NODE_ENV === 'production') {
    return { notFound: true };
  }

  return {
    props: {},
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every `Settings.RevalidateTime` seconds
    revalidate: Settings.RevalidateTime, // In seconds
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  if (process.env.NODE_ENV === 'production') {
    return {
      paths: [], // @TODO replace with real data when Headless CMS is ready
      fallback: false,
    };
  }

  const paths = caseStudies.map(({ id }) => ({
    params: { caseStudyId: String(id) },
  }));

  return {
    paths,
    fallback: false,
  };
};

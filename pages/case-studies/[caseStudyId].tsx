import { useRouter } from 'next/router';

import HeroDetails from '../../components/hero/HeroDetails';
import ImageWrapperComponent from '../../components/common/image-wrapper/ImageWrapper';
import FullInfoColumn from '../../components/common/full-info-column/FullInfoColumn';
import TextColumn from '../../components/common/text-column/TextColumn';
import ImagesColumn from '../../components/common/images-column/ImagesColumn';
import Result from '../../components/common/result/Result';
import NextPage from '../../components/common/next-page/NextPage';

import { caseStudies } from '../../mocks/case-study';

const CaseStudyDetailPage = () => {
  const router = useRouter();
  const caseStudyId = router.query.caseStudyId;

  const data = caseStudies.find(item => item.id === Number(caseStudyId));

  const pageLink = `https://5f9731df.next-varbintechcom.pages.dev${router.asPath}`;
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

  return (
    <>
      {data ? (
        <HeroDetails
          centered
          bgColored
          title={data.projectTitle}
          projectTags={data.projectTags}
          projectSocialIcons={projectSocialIcons}
        />
      ) : null}
      {data ? <ImageWrapperComponent data={data.projectImage} /> : null}
      {data ? <FullInfoColumn data={data.projectFullInfo} /> : null}
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
      {data ? <Result data={data} /> : null}
      <NextPage />
    </>
  );
};

export default CaseStudyDetailPage;

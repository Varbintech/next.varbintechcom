import { useRouter } from 'next/router';

import Container from '@mui/material/Container';

import HeroDetails from '../../components/hero/HeroDetails';
import ImageWrapperComponent from '../../components/common/image-wrapper/ImageWrapper';
import FullInfoColumn from '../../components/common/full-info-column/FullInfoColumn';
import TextColumn from '../../components/common/text-column/TextColumn';
import ImagesColumn from '../../components/common/images-column/ImagesColumn';
import Result from '../../components/common/result/Result';
import NextPage from '../../components/common/next-page/NextPage';

import { caseStudies } from '../../mocks/case-study';

import { socialShareButtons } from '../../utils/socialShareButtons';

const CaseStudyDetailPage = () => {
  const router = useRouter();
  const caseStudyId = router.query.caseStudyId;

  const data = caseStudies.find(item => item.id === Number(caseStudyId));

  const pageLink = `https://5f9731df.next-varbintechcom.pages.dev${router.asPath}`;

  return (
    <>
      {data ? (
        <HeroDetails
          centered
          bgColored
          title={data.projectTitle}
          projectTags={data.projectTags}
          projectSocialIcons={socialShareButtons(pageLink)}
        />
      ) : null}
      {data ? <ImageWrapperComponent data={data.projectImage} /> : null}
      {data ? <FullInfoColumn data={data.projectFullInfo} /> : null}
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
      {data ? <Result data={data} /> : null}
      <NextPage />
    </>
  );
};

export default CaseStudyDetailPage;

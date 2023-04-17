import { useRouter } from 'next/router';

import Container from '@mui/material/Container';

import { useWindowLocation } from '../../hooks/use-window-location';

import { caseStudies } from '../../mocks/case-study';

import HeroDetails from '../../components/hero/HeroDetails';
import ImageWrapperComponent from '../../components/common/image-wrapper/ImageWrapper';
import FullInfoColumn from '../../components/common/full-info-column/FullInfoColumn';
import TextColumn from '../../components/common/text-column/TextColumn';
import ImagesColumn from '../../components/common/images-column/ImagesColumn';
import Result from '../../components/common/result/Result';
import CaseStudyNextItem from '../../components/case-studies/CaseStudyNextItem';

import { socialShareButtons } from '../../utils/socialShareButtons';

const CaseStudyDetailPage = () => {
  const {
    query: { caseStudyId },
    isReady,
    asPath,
  } = useRouter();
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

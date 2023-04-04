import { useRouter } from 'next/router';

//import Feedback from '../../components/common/feedback/Feedback';
import NextPage from '../../components/common/next-page/NextPage';

const CaseStudyDetailPage = () => {
  const router = useRouter();
  const caseStudyId = router.query.caseStudyId;

  return (
    <>
      <NextPage />
      {/* <Feedback /> */}
    </>
  );
};

export default CaseStudyDetailPage;

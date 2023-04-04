import { useRouter } from 'next/router';

const CaseStudyDetailPage = () => {
  const router = useRouter();
  const caseStudyId = router.query.caseStudyId;

  return <h1>The Detail Page {caseStudyId}</h1>;
};

export default CaseStudyDetailPage;

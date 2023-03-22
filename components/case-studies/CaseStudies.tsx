import type { FC } from 'react';

import type { CaseStudy } from '../../models';

import CaseStudyOdd from './CaseStudyOdd';
import CaseStudyEven from './CaseStudyEven';

interface CaseStudiesProps {
  data: Array<CaseStudy>;
}

const CaseStudies: FC<CaseStudiesProps> = ({ data }) => {
  return (
    <>
      {data.map((caseStudy, caseStudyIndex) => {
        if (caseStudyIndex % 2 === 0) {
          return <CaseStudyEven key={caseStudy.id} data={caseStudy} />;
        }

        return <CaseStudyOdd key={caseStudy.id} data={caseStudy}/>;
      })}
    </>
  );
};

export default CaseStudies;

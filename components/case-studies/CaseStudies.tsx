import type { FC } from 'react';

import type { CaseStudy } from '../../models';

import CaseStudyInner from './CaseStudyInner';

interface CaseStudiesProps {
  data: Array<CaseStudy>;
}

const CaseStudies: FC<CaseStudiesProps> = ({ data }) => {
  return (
    <div id="caseStudies">
      {data.map((caseStudy, caseStudyIndex) => {
        const direction = (caseStudyIndex % 2 === 0) ? 'row-reverse' : 'row';

        return <CaseStudyInner key={caseStudy.id} data={caseStudy} direction={direction} />;
      })}
    </div>
  );
};

export default CaseStudies;

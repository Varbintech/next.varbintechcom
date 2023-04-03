import type { FC } from 'react';

import type { CaseStudy } from '../../models';

import CaseStudyInner from './CaseStudyInner';
import { CaseStudiesContainer } from './styled-components';

interface CaseStudiesProps {
  data: Array<CaseStudy>;
}

const CaseStudies: FC<CaseStudiesProps> = ({ data }) => {
  return (
    <CaseStudiesContainer id="caseStudies">
      {data.map((caseStudy, caseStudyIndex) => {
        const direction = caseStudyIndex % 2 === 0 ? 'row-reverse' : 'row';

        return <CaseStudyInner key={caseStudy.id} data={caseStudy} direction={direction} />;
      })}
    </CaseStudiesContainer>
  );
};

export default CaseStudies;

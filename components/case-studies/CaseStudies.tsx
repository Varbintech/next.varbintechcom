import type { FC } from 'react';

import type { CaseStudy } from '../../models';

import RectangleBoxIcon from '../common/icon-rectangle-box/RectangleBoxIcon';

import CaseStudyInner from './CaseStudyInner';
import { BoxIconContainer, CaseStudiesContainer } from './styled-components';

interface CaseStudiesProps {
  data: Array<CaseStudy>;
  secondary?: boolean;
}

const CaseStudies: FC<CaseStudiesProps> = ({ data, secondary }) => {
  return (
    <CaseStudiesContainer id="caseStudies">
      {data.map((caseStudy, caseStudyIndex) => {
        const direction = caseStudyIndex % 2 === 0 ? 'row-reverse' : 'row';

        return <CaseStudyInner key={caseStudy.id} data={caseStudy} direction={direction} />;
      })}
      {!secondary ? (
        <BoxIconContainer>
          <RectangleBoxIcon />
        </BoxIconContainer>
      ) : null}
    </CaseStudiesContainer>
  );
};

export default CaseStudies;

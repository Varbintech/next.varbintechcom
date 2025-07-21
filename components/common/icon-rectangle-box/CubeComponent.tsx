import RectangleBoxIcon from './RectangleBoxIcon';
import RectangleBoxIconInverse from './RectangleBoxIconInverse';

import { CubeContainerStyled } from './styled-components';

interface CubeComponentProps {
  isDarkTheme?: boolean;
}

const CubeComponent = ({ isDarkTheme }: CubeComponentProps) => {
  return (
    <CubeContainerStyled>
      {isDarkTheme ? <RectangleBoxIconInverse /> : <RectangleBoxIcon />}
    </CubeContainerStyled>
  );
};

export default CubeComponent;

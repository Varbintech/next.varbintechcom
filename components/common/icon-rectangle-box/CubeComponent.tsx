import RectangleBoxIcon from './RectangleBoxIcon';
import RectangleBoxIconInverse from './RectangleBoxIconInverse';

import { СubeContainerStyled } from './styled-components';

interface СubeComponentProps {
  isDarkTheme?: boolean;
}

const СubeComponent = ({ isDarkTheme }: СubeComponentProps) => {
  return (
    <СubeContainerStyled>
      {isDarkTheme ? <RectangleBoxIconInverse /> : <RectangleBoxIcon />}
    </СubeContainerStyled>
  );
};

export default СubeComponent;

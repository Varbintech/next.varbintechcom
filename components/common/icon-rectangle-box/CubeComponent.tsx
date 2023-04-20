import { useTheme } from '@mui/material/styles';

import RectangleBoxIcon from './RectangleBoxIcon';
import RectangleBoxIconInverse from './RectangleBoxIconInverse';

import { СubeContainerStyled } from './styled-components';

const СubeComponent = () => {
  const isDarkTheme = useTheme().palette.mode === 'dark';

  return (
    <СubeContainerStyled>
      {isDarkTheme ? <RectangleBoxIconInverse /> : <RectangleBoxIcon />}
    </СubeContainerStyled>
  );
};

export default СubeComponent;

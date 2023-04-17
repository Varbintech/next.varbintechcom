import { useTheme } from '@mui/material/styles';

import LogoBlackIcon from '../icon-logo/LogoBlackIcon';
import LogoWhiteIcon from '../icon-logo/LogoWhiteIcon';

import { LogoContainer } from './styled-components';

const SiteLogo = () => {
  const isDarkTheme = useTheme().palette.mode === 'dark';

  return (
    <LogoContainer href="/" aria-label="Varbintech logo">
      {isDarkTheme ? <LogoWhiteIcon /> : <LogoBlackIcon />}
    </LogoContainer>
  );
};

export default SiteLogo;

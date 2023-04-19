import { useTheme } from '@mui/material/styles';

import LogoIcon from '../icon-logo/LogoIcon';

import { LogoContainer } from './styled-components';

const SiteLogo = () => {
  const isDarkTheme = useTheme().palette.mode === 'dark';

  return (
    <LogoContainer href="/" aria-label="Varbintech logo">
      <LogoIcon isDarkTheme={isDarkTheme} />
    </LogoContainer>
  );
};

export default SiteLogo;

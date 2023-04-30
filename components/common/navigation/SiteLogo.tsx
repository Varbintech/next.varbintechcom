import type { MouseEventHandler } from 'react';

import { useTheme } from '@mui/material/styles';

import LogoIcon from '../icon-logo/LogoIcon';

import { LogoContainer } from './styled-components';

interface SiteLogoProps {
  onGa: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  id?: string;
}

const SiteLogo = ({ onGa, id }: SiteLogoProps) => {
  const isDarkTheme = useTheme().palette.mode === 'dark';

  return (
    <LogoContainer href="/" aria-label="Varbintech logo" onClick={onGa} id={id || 'siteLogoLink'}>
      <LogoIcon isDarkTheme={isDarkTheme} />
    </LogoContainer>
  );
};

export default SiteLogo;

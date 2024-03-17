import type { MouseEventHandler } from 'react';

import LogoIcon from '../icon-logo/LogoIcon';

import { LogoContainer } from './styled-components';

interface SiteLogoProps {
  onGa: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  id?: string;
  isDarkTheme?: boolean;
}

const SiteLogo = ({ onGa, id, isDarkTheme }: SiteLogoProps) => {
  return (
    <LogoContainer href="/" aria-label="Varbintech logo" onClick={onGa} id={id || 'siteLogoLink'}>
      <LogoIcon isDarkTheme={isDarkTheme} />
    </LogoContainer>
  );
};

export default SiteLogo;

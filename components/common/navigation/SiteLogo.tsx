import LogoBlackIcon from '../icon-logo/LogoBlackIcon';

import { LogoContainer } from './styled-components';

const SiteLogo = () => {
  return (
    <LogoContainer href="/" aria-label="Varbintech logo">
      <LogoBlackIcon />
    </LogoContainer>
  );
};

export default SiteLogo;

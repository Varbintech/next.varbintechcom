import Image from 'next/image';

import Link from '@mui/material/Link';

import tinLogo from '../../public/TIN-logo.webp';
import musicscoodleLogo from '../../public/musicscoodle-project/musicscoodle-logo.webp';

import DTIcon from '../common/icon-dt/DTIcon';
import LeewayIcon from '../common/icon-leeway/LeewayIcon';

import { FixedBottomContainer, ScrollContainer, LogoContainer } from './styled-components';

const Logos = () => {
  return (
    <FixedBottomContainer
      sx={{
        height: {
          xs: 'auto',
          sm: '70px',
        },
      }}
    >
      <ScrollContainer
        display={{
          xs: 'grid',
          sm: 'flex',
        }}
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        spacing={{
          xs: 2,
          sm: 13.75,
        }}
        sx={{
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
        }}
      >
        <LogoContainer>
          <Link
            href="https://www.tin.info"
            underline="none"
            target="_blank"
            rel="noreferrer"
            aria-label="Read more about The Intelligent Network"
          >
            <Image src={tinLogo} alt="The Intelligent Network logo" />
          </Link>
        </LogoContainer>

        <LogoContainer>
          <Link
            href="https://digitaltoucan.com"
            underline="none"
            target="_blank"
            rel="noreferrer"
            aria-label="Read more about Digital Toucan"
          >
            <DTIcon aria-label="Digital Toucan logo" width="64" sx={{ width: 'auto' }} />
          </Link>
        </LogoContainer>

        <LogoContainer>
          <Link
            href="https://www.musicscoodle.com"
            underline="none"
            target="_blank"
            rel="noreferrer"
            aria-label="Read more about MusicScoodle"
          >
            <Image src={musicscoodleLogo} alt="MusicScoodle logo" />
          </Link>
        </LogoContainer>
        <LogoContainer>
          <Link
            href="https://leeway.tech"
            underline="none"
            target="_blank"
            rel="noreferrer"
            aria-label="Read more about Leeway"
          >
            <LeewayIcon sx={{ width: 'auto' }} aria-label="Leeway logo" />
          </Link>
        </LogoContainer>
      </ScrollContainer>
    </FixedBottomContainer>
  );
};

export default Logos;

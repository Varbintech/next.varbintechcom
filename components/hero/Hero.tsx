import Image from 'next/image';

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import UpworkIcon from 'components/common/icon-upwork/UpworkIcon';
import ClutchIcon from 'components/common/icon-clutch/ClutchIcon';

import placeholderLogo from '../../public/PlaceholderLogo.png';
import placeholderLogo1 from '../../public/PlaceholderLogo1.png';
import placeholderLogo2 from '../../public/PlaceholderLogo2.png';

import {
  UpdateLabel,
  PageContainer,
  FixedBottomContainer,
  ScrollContainer,
  ScrollContainerDublicate,
} from './styled-components';

function Hero() {
  return (
    <PageContainer>
      <Container maxWidth="lg">
        <Typography align="center" sx={{ marginBottom: { xs: 4, md: 2 } }}>
          <UpdateLabel>Update</UpdateLabel> Data export & import, relations reordering, audit logs{' '}
          <Link href="#" variant="body1">
            More v4.4 updates
          </Link>
        </Typography>
        <Typography
          variant="h1"
          align="center"
          sx={{ marginBottom: { md: 3 }, fontSize: { xs: '3em', md: '3.5em' } }}
        >
          A development team with superpower
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ marginBottom: 4 }}>
          We help startups and companies of all shapes and sizes to build high-quality Front-End
          solutions.
        </Typography>
        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          sx={{ marginBottom: { xs: '100px', md: '58px' } }}
        >
          <Button variant="contained">Let’s discuss</Button>
          <Button variant="outlined">Let’s discuss</Button>
        </Stack>

        <Divider sx={{ marginBottom: 2 }}>
          <Typography variant="overline">RECOGNIZED BY:</Typography>
        </Divider>
        <Stack direction="row" spacing={3} justifyContent="center">
          <UpworkIcon sx={{ width: 'auto' }} />
          <ClutchIcon sx={{ width: 'auto' }} />
        </Stack>
      </Container>
      <FixedBottomContainer>
        <ScrollContainer direction="row" spacing={13.75}>
          <Image src={placeholderLogo} alt="logo" />
          <Image src={placeholderLogo1} alt="logo1" />
          <Image src={placeholderLogo2} alt="logo2" />
        </ScrollContainer>
        <ScrollContainerDublicate direction="row" spacing={13.75}>
          <Image src={placeholderLogo} alt="logo" />
          <Image src={placeholderLogo1} alt="logo1" />
          <Image src={placeholderLogo2} alt="logo2" />
        </ScrollContainerDublicate>
      </FixedBottomContainer>
    </PageContainer>
  );
}

export default Hero;

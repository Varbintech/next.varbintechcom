import Image from 'next/image';

import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import UpworkIcon from '../../components/common/icon-upwork/UpworkIcon';
import ClutchIcon from '../../components/common/icon-clutch/ClutchIcon';
import Button from '../../components/common/buttons/Button';
import BoxIcon from '../../components/common/icon-box/BoxIcon';
import TriangleIcon from 'components/common/icon-triangle/TriangleIcon';
import RectangleLeftIcon from '../../components/common/icon-rectangle-left/RectangleLeftIcon';
import RectangleRightIcon from '../../components/common/icon-rectangle-right/RectangleRightIcon';
import Navigation from '../../components/common/navigation/Navigation';

import placeholderLogo from '../../public/PlaceholderLogo.png';
import placeholderLogo1 from '../../public/PlaceholderLogo1.png';
import placeholderLogo2 from '../../public/PlaceholderLogo2.png';

import {
  UpdateLabel,
  PageContainer,
  FixedBottomContainer,
  ScrollContainer,
  ScrollContainerDublicate,
  RectangleLeftIconContainer,
  RectangleRightIconContainer,
  BoxIconContainer,
  TriangleIconContainer,
  TitleTypography,
  SubTitleTypography,
} from './styled-components';

function Hero() {
  return (
    <PageContainer>
      <RectangleLeftIconContainer>
        <RectangleLeftIcon />
      </RectangleLeftIconContainer>
      <RectangleRightIconContainer>
        <RectangleRightIcon />
      </RectangleRightIconContainer>
      <Container maxWidth="lg" sx={{position: 'relative'}}>
        <Navigation />
        <BoxIconContainer>
          <BoxIcon />
        </BoxIconContainer>
        <TriangleIconContainer>
          <TriangleIcon />
        </TriangleIconContainer>
        <Typography align="center" sx={{ marginBottom: { xs: 3.5, md: 2 } }}>
          <UpdateLabel>Update</UpdateLabel> Data export & import, relations reordering, audit logs{' '}
          <Link href="#" variant="body1">
            More v4.4 updates
          </Link>
        </Typography>
        <TitleTypography variant="h1" align="center">
          A development team with superpower
        </TitleTypography>
        <SubTitleTypography variant="subtitle1" align="center">
          We help startups and companies of all shapes and sizes to build high-quality Front-End
          solutions.
        </SubTitleTypography>
        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          sx={{ marginBottom: { xs: '100px', md: '58px' } }}
        >
          <Button>Let’s discuss</Button>
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

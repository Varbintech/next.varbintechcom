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
import UpdateLabel from '../../components/common/update-label/UpdateLabel';

import { Settings } from '../../constants/settings';

import placeholderLogo from '../../public/PlaceholderLogo.png';
import placeholderLogo1 from '../../public/PlaceholderLogo1.png';
import placeholderLogo2 from '../../public/PlaceholderLogo2.png';

import {
  PageContainer,
  FixedBottomContainer,
  ScrollContainer,
  RectangleLeftIconContainer,
  RectangleRightIconContainer,
  BoxIconContainer,
  TriangleIconContainer,
  TitleTypography,
  SubTitleTypography,
  FirstItem,
} from './styled-components';

const Hero = () => {
  return (
    <PageContainer>
      <RectangleLeftIconContainer>
        <RectangleLeftIcon />
      </RectangleLeftIconContainer>
      <RectangleRightIconContainer>
        <RectangleRightIcon />
      </RectangleRightIconContainer>
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          marginBottom: '116px',
          paddingTop: { xs: '160px', lg: '270px' },
        }}
      >
        <BoxIconContainer>
          <BoxIcon />
        </BoxIconContainer>
        <TriangleIconContainer>
          <TriangleIcon />
        </TriangleIconContainer>
        <Typography align="center" sx={{ marginBottom: { xs: 3.5, md: 2 } }}>
          <UpdateLabel>Update</UpdateLabel>
          Data export & import, relations reordering, audit logs{' '}
          <Link href="#s" variant="caption">
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
          <Typography variant="overline" textTransform="uppercase">recognized by:</Typography>
        </Divider>
        <Stack direction="row" spacing={3} justifyContent="center">
          <Link href={Settings.UpworkLink} target="_blank" rel="noreferrer">
            <UpworkIcon sx={{ width: '88px' }} />
          </Link>

          <Link href={Settings.ClutchLink} target="_blank" rel="noreferrer">
            <ClutchIcon sx={{ width: '57px' }} />
          </Link>
        </Stack>
      </Container>
      <FixedBottomContainer>
        <ScrollContainer direction="row" spacing={13.75}>
          <FirstItem src={placeholderLogo} alt="logo" />
          <Image src={placeholderLogo1} alt="logo1" />
          <Image src={placeholderLogo2} alt="logo2" />
          <Image src={placeholderLogo} alt="logo" />
          <Image src={placeholderLogo1} alt="logo1" />
          <Image src={placeholderLogo2} alt="logo2" />

          <Image src={placeholderLogo} alt="logo" />
          <Image src={placeholderLogo1} alt="logo1" />
          <Image src={placeholderLogo2} alt="logo2" />
          <Image src={placeholderLogo} alt="logo" />
          <Image src={placeholderLogo1} alt="logo1" />
          <Image src={placeholderLogo2} alt="logo2" />
        </ScrollContainer>
      </FixedBottomContainer>
    </PageContainer>
  );
};

export default Hero;

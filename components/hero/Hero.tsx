import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import UpworkIcon from '../common/icon-upwork/UpworkIcon';
import ClutchIcon from '../common/icon-clutch/ClutchIcon';
import Button from '../common/buttons/Button';
import BoxIcon from '../common/icon-box/BoxIcon';
import TriangleIcon from '../common/icon-triangle/TriangleIcon';
import RectangleLeftIcon from '../common/icon-rectangle-left/RectangleLeftIcon';
import RectangleRightIcon from '../common/icon-rectangle-right/RectangleRightIcon';
import DTIcon from '../common/icon-dt/DTIcon';

import { Settings } from '../../constants/settings';

import tinLogo from '../../public/TIN-logo.png';

import {
  PageContainer,
  FixedBottomContainer,
  ScrollContainer,
  RectangleLeftIconContainer,
  RectangleRightIconContainer,
  BoxIconContainer,
  TriangleIconContainer,
  TitleTypography,
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
        {/* @TODO Move to a separate component */}
        {/* <Typography align="center" sx={{ marginBottom: { xs: 3.5, md: 2 } }}>
          <UpdateLabel>Update</UpdateLabel>
          Data export & import, relations reordering, audit logs{' '}
          <Link href="#s" variant="caption">
            More v4.4 updates
          </Link>
        </Typography> */}
        <TitleTypography variant="h1" align="center">
          A development team with superpower
        </TitleTypography>

        <Typography
          variant="subtitle1"
          align="center"
          component="h2"
          sx={{
            margin: '0 auto 32px',
            maxWidth: '620px',
          }}
        >
          We help startups and companies of all shapes and sizes to build high-quality Front-End
          solutions.
        </Typography>

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
          <Link href={Settings.UpworkLink} target="_blank" rel="noreferrer" aria-label="Recognized by Upwork">
            <UpworkIcon sx={{ width: '88px' }} />
          </Link>

          <Link href={Settings.ClutchLink} target="_blank" rel="noreferrer" aria-label="Recognized by Clutch">
            <ClutchIcon sx={{ width: '57px' }} />
          </Link>
        </Stack>
      </Container>
      <FixedBottomContainer>
        <ScrollContainer direction="row" spacing={{
          xs: 8,
          sm: 13.75,
        }}>
          <FirstItem src={tinLogo} alt="The Intelligent Network logo" width={300} height={60} />
          <DTIcon />
          {/* <Image src={placeholderLogo2} alt="logo2" /> */}
        </ScrollContainer>
      </FixedBottomContainer>
    </PageContainer>
  );
};

export default Hero;

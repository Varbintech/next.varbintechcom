import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { useGenerateEventGa } from '../../hooks/use-generate-event-ga';

import UpworkIcon from '../common/icon-upwork/UpworkIcon';
import ClutchIcon from '../common/icon-clutch/ClutchIcon';
import Button from '../common/buttons/Button';
import BoxIcon from '../common/icon-box/BoxIcon';
import TriangleIcon from '../common/icon-triangle/TriangleIcon';
import RectangleLeftIcon from '../common/icon-rectangle-left/RectangleLeftIcon';
import RectangleRightIcon from '../common/icon-rectangle-right/RectangleRightIcon';
import DTIcon from '../common/icon-dt/DTIcon';

import { Settings } from '../../constants/settings';

import tinLogo from '../../public/TIN-logo.webp';

import {
  PageContainer,
  ContainerStyled,
  FixedBottomContainer,
  ScrollContainer,
  RectangleLeftIconContainer,
  RectangleRightIconContainer,
  BoxIconContainer,
  TriangleIconContainer,
  TitleTypography,
  FirstItem,
} from './styled-components';

interface HeroProps {
  title: string;
  subtitle?: string;
  small?: boolean;
  plainBg?: boolean;
}

const Hero = ({ title, subtitle, small, plainBg }: HeroProps) => {
  const classSmallSize = small ? 'page-small' : '';
  const classPlainBg = plainBg ? 'page-plainBg' : '';

  const handleButtonClick = useGenerateEventGa('button');

  return (
    <PageContainer className={`${classSmallSize} ${classPlainBg}`}>
      <RectangleLeftIconContainer>
        <RectangleLeftIcon />
      </RectangleLeftIconContainer>
      <RectangleRightIconContainer>
        <RectangleRightIcon />
      </RectangleRightIconContainer>
      <ContainerStyled maxWidth="lg">
        <BoxIconContainer>
          <BoxIcon />
        </BoxIconContainer>
        <TriangleIconContainer>
          <TriangleIcon />
        </TriangleIconContainer>
        {/* @TODO Move to a separate component */}
        {/* {!small ? ( <Typography align="center" sx={{ marginBottom: { xs: 3.5, md: 2 } }}>
          <UpdateLabel>Update</UpdateLabel>
          Data export & import, relations reordering, audit logs{' '}
          <Link href="#s" variant="caption">
            More v4.4 updates
          </Link>
        </Typography> ) : null}*/}
        <TitleTypography variant="h1" align="center">
          {title}
        </TitleTypography>

        {subtitle ? (
          <Typography
            variant="subtitle1"
            align="center"
            component="h2"
            sx={{
              margin: '0 auto 32px',
              maxWidth: '620px',
              fontSize: { xs: '16px', md: '20px' },
            }}
          >
            {subtitle}
          </Typography>
        ) : null}

        {!small ? (
          <>
            <Stack
              direction="row"
              spacing={3}
              justifyContent="center"
              sx={{ marginBottom: { xs: '100px', md: '58px' } }}
            >
              <Button id="reserveASpot" href={Settings.CalendlyLink} onClick={handleButtonClick}>
                Reserve a spot
              </Button>

              <Button
                id="letsDiscuss"
                variant="outlined"
                href="#customServices"
                onClick={handleButtonClick}
              >
                Let&apos;s discuss
              </Button>
            </Stack>

            <Divider sx={{ marginBottom: 2 }}>
              <Typography variant="overline" textTransform="uppercase">
                recognized by:
              </Typography>
            </Divider>
            <Stack direction="row" spacing={3} justifyContent="center">
              <Link
                href={Settings.UpworkLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Recognized by Upwork"
              >
                <UpworkIcon sx={{ width: '88px' }} />
              </Link>

              <Link
                href={Settings.ClutchLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Recognized by Clutch"
              >
                <ClutchIcon sx={{ width: '57px' }} />
              </Link>
            </Stack>
          </>
        ) : null}
      </ContainerStyled>
      {!small ? (
        <FixedBottomContainer>
          <ScrollContainer
            direction="row"
            spacing={{
              xs: 8,
              sm: 13.75,
            }}
          >
            <FirstItem src={tinLogo} alt="The Intelligent Network logo" width={300} height={60} />
            <Box sx={{ width: '24px', height: '24px' }}>
              <DTIcon />
            </Box>
          </ScrollContainer>
        </FixedBottomContainer>
      ) : null}
    </PageContainer>
  );
};

export default Hero;

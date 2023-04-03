import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import BoxIcon from '../common/icon-box/BoxIcon';
import TriangleIcon from '../common/icon-triangle/TriangleIcon';
import RectangleLeftIcon from '../common/icon-rectangle-left/RectangleLeftIcon';
import RectangleRightIcon from '../common/icon-rectangle-right/RectangleRightIcon';

import {
  PageContainerSecondary,
  RectangleLeftIconContainerSecondary,
  RectangleRightIconContainerSecondary,
  BoxIconContainerSecondary,
  TriangleIconContainerSecondary,
  TitleTypographySecondary,
} from './styled-components';

const HeroCaseStudies = () => {
  return (
    <PageContainerSecondary>
      <RectangleLeftIconContainerSecondary>
        <RectangleLeftIcon />
      </RectangleLeftIconContainerSecondary>
      <RectangleRightIconContainerSecondary>
        <RectangleRightIcon />
      </RectangleRightIconContainerSecondary>
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          marginBottom: { xs: '60px', md: '72px' },
          padding: { xs: '112px 60px 0', md: '135px 60px 0' },
        }}
      >
        <BoxIconContainerSecondary>
          <BoxIcon />
        </BoxIconContainerSecondary>
        <TriangleIconContainerSecondary>
          <TriangleIcon />
        </TriangleIconContainerSecondary>
        <TitleTypographySecondary variant="h1" align="center">
          Case studies that we feel proud
        </TitleTypographySecondary>

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
          We help startups and companies of all shapes and sizes to build high-quality Front-End
          solutions.
        </Typography>
      </Container>
    </PageContainerSecondary>
  );
};

export default HeroCaseStudies;

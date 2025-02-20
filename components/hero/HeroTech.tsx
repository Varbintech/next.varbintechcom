import Typography from '@mui/material/Typography';

import BoxIcon from '../common/icon-box/BoxIcon';
import TriangleIcon from '../common/icon-triangle/TriangleIcon';

import {
  HeroDetailsStyled,
  BoxIconContainer,
  TriangleIconContainer,
  ContainerTechStyled,
} from './styled-components';

interface HeroTechProps {
  importantUpdateEl?: JSX.Element;
}

const HeroTech = (props: HeroTechProps) => {
  const { importantUpdateEl } = props;

  return (
    <HeroDetailsStyled className="page-small" sx={{ paddingBottom: 2 }}>
      <ContainerTechStyled maxWidth="lg" className="centered">
        <BoxIconContainer>
          <BoxIcon />
        </BoxIconContainer>
        <TriangleIconContainer>
          <TriangleIcon />
        </TriangleIconContainer>

        {importantUpdateEl ? <>{importantUpdateEl}</> : null}

        <Typography
          variant="h1"
          align="center"
          sx={{
            fontSize: {
              xs: '2rem',
              md: '3.5rem',
            },
            lineHeight: 1.2,
            maxWidth: '720px',
            margin: { xs: '0 auto 1rem', md: '0 auto 2rem' },
          }}
        >
          Tech & Tools With Our Top-Notch Experience
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          component="h2"
          sx={{
            margin: '0 auto',
            maxWidth: '620px',
            fontSize: { xs: '1.2rem', md: '2.5rem' },
          }}
        >
          E-Commerce & SaaS solutions for your project
        </Typography>
      </ContainerTechStyled>
    </HeroDetailsStyled>
  );
};

export default HeroTech;

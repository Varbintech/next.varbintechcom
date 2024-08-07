import Typography from '@mui/material/Typography';

import BoxIcon from '../common/icon-box/BoxIcon';
import TriangleIcon from '../common/icon-triangle/TriangleIcon';

import {
  HeroDetailsStyled,
  BoxIconContainer,
  TriangleIconContainer,
  ContainerTechStyled,
} from './styled-components';

interface HeroHireEngineerProps {
  title: string;
  subtitle: string;
  importantUpdateEl?: JSX.Element;
}

const HeroHireEngineer = (props: HeroHireEngineerProps) => {
  const { importantUpdateEl, title, subtitle } = props;

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
          {title}
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          component="h2"
          sx={{
            margin: '0 auto',
            maxWidth: '720px',
            fontSize: { xs: '1.2rem', md: '2rem' },
          }}
        >
          {subtitle}
        </Typography>
      </ContainerTechStyled>
    </HeroDetailsStyled>
  );
};

export default HeroHireEngineer;

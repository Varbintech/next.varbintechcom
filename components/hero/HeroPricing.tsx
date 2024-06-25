import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { HeroDetailsStyled } from './styled-components';

interface HeroPricingProps {
  bgColored?: boolean;
  centered?: boolean;
}

const HeroPricing = (props: HeroPricingProps) => {
  const { bgColored, centered } = props;

  return (
    <HeroDetailsStyled className={bgColored ? 'bg-colored' : ''}>
      <Container maxWidth="lg" className={centered ? 'centered' : ''}>
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: '32px',
              md: '56px',
              lineHeight: 1.2,
              maxWidth: '600px',
              margin: '0 auto 1.5rem',
            },
          }}
        >
          A front-end team with superpower for SaaS & startups
        </Typography>
      </Container>
    </HeroDetailsStyled>
  );
};

export default HeroPricing;

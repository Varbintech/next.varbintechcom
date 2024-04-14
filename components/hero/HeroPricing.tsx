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
          marginBottom="24px"
          sx={{ fontSize: { xs: '32px', md: '56px', lineHeight: 1.2 } }}
        >
          A development team with superpower
        </Typography>
      </Container>
    </HeroDetailsStyled>
  );
};

export default HeroPricing;

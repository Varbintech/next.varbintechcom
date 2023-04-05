import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { Settings } from '../../../constants/settings';

import Button from '../buttons/Button';
import ButtonLink from '../buttons/ButtonLink';

const NextPage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ paddingTop: { xs: '64px', lg: '120px' }, paddingBottom: { xs: '64px', lg: '120px' } }}
    >
      <Typography variant="subtitle1" align="center" sx={{ fontWeight: 500, marginBottom: 3 }}>
        Next case study
      </Typography>
      <Typography
        variant="h2"
        align="center"
        sx={{
          margin: '0 auto 28px',
          padding: '0 20px',
          maxWidth: '580px',
          fontSize: { xs: '32px', md: '40px' },
          lineHeight: '1.2em',
        }}
      >
        Digital Toucan - JQL Search Extensions for Jira
      </Typography>
      <Stack direction="row" spacing={3} justifyContent="center">
        <ButtonLink href="/case-studies/1">View full case study</ButtonLink>

        <Button variant="outlined" href={Settings.CalendlyLink}>
          Book a call
        </Button>
      </Stack>
    </Container>
  );
};

export default NextPage;

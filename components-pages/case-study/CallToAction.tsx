import type { CallToAction } from '../../models';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Button from '../../components/common/buttons/Button';

import { useGenerateEventGa } from '../../hooks/use-generate-event-ga';

const CallToActionComponent = (props: CallToAction) => {
  const { title, action, actionText, actionId } = props;

  const handleCtaClick = useGenerateEventGa('link');

  return (
    <Container
      maxWidth="lg"
      sx={{ paddingTop: { xs: '64px' }, paddingBottom: { xs: '64px', lg: '120px' } }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="subtitle1">{title}</Typography>

        <Button
          size="large"
          target="_blank"
          variant="outlined"
          href={action}
          aria-label={actionText}
          id={actionId}
          onClick={handleCtaClick}
        >
          {actionText}
        </Button>
      </Stack>
    </Container>
  );
};

export default CallToActionComponent;

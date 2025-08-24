import type { PropsWithChildren } from 'react';

import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import RectangleLeftFillIcon from '../common/icon-rectangle-left-fill/RectangleLeftFillIcon';
import RectangleIcon from '../common/icon-rectangle/RectangleIcon';

import { IconLeftContainer, IconRightContainer, PageContainer } from './styled-components';

interface QuestionsContainerProps {
  title?: string;
  subtitle?: string;
  sx?: SxProps;
}

function QuestionsContainer(props: PropsWithChildren<QuestionsContainerProps>) {
  const {
    children,
    title = "Let's see if we are a good fit.",
    subtitle = 'Top-notch experience with a proven record',
    sx,
  } = props;

  return (
    <PageContainer sx={sx}>
      <IconRightContainer className="icon-right">
        <RectangleLeftFillIcon />
      </IconRightContainer>

      <IconLeftContainer className="icon-left">
        <RectangleIcon />
      </IconLeftContainer>

      <Container maxWidth="lg">
        {title || subtitle ? (
          <Box paddingLeft={2} paddingRight={2} maxWidth="600px" margin="auto">
            {title ? (
              <Typography
                variant="h2"
                align="center"
                sx={{ marginBottom: 1.5, fontSize: { xs: '32px', lg: '40px' } }}
              >
                {title}
              </Typography>
            ) : null}

            {subtitle ? (
              <Typography
                variant="body2"
                align="center"
                sx={{ marginBottom: { xs: '30px', md: '57px' } }}
              >
                {subtitle}
              </Typography>
            ) : null}
          </Box>
        ) : null}

        {children}
      </Container>
    </PageContainer>
  );
}

export default QuestionsContainer;

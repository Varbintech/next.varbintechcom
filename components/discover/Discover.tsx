import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import DiscoverIcon from '../common/icon-discover/DiscoverIcon';

import {
  PageContainer,
  DiscoverTitle,
  DiscoverColumn,
  DiscoverItemContainer,
  DiscoverItemTitle,
} from './styled-components';

const Discover = () => {
  return (
    <PageContainer>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ md: '80px' }}
        >
          <Stack
            direction="row"
            marginLeft="-20px"
            sx={{
              maxWidth: { sm: '50%' },
            }}
          >
            <DiscoverIcon />
          </Stack>
          <Box>
            <DiscoverTitle variant="h2">
              Discover why millions of entrepreneurs chose us
            </DiscoverTitle>
            <Stack direction="row" spacing={3.75}>
              <DiscoverColumn>
                <DiscoverItemContainer>
                  <DiscoverItemTitle>we have done</DiscoverItemTitle>
                  <Typography variant="h3" sx={{ fontSize: { xs: '24px', lg: '32px' } }}>
                    400+ Projects
                  </Typography>
                </DiscoverItemContainer>
                <DiscoverItemContainer>
                  <DiscoverItemTitle>long term</DiscoverItemTitle>
                  <Typography variant="h3" sx={{ fontSize: { xs: '24px', lg: '32px' } }}>
                    39+ Clients
                  </Typography>
                </DiscoverItemContainer>
              </DiscoverColumn>

              <DiscoverColumn>
                <DiscoverItemContainer>
                  <DiscoverItemTitle>recommendations</DiscoverItemTitle>
                  <Typography variant="h3" sx={{ fontSize: { xs: '24px', lg: '32px' } }}>
                    39+ Clients
                  </Typography>
                </DiscoverItemContainer>
                <DiscoverItemContainer>
                  <DiscoverItemTitle>Helped</DiscoverItemTitle>
                  <Typography variant="h3" sx={{ fontSize: { xs: '24px', lg: '32px' } }}>
                    $34M Raised
                  </Typography>
                </DiscoverItemContainer>
              </DiscoverColumn>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </PageContainer>
  );
};

export default Discover;

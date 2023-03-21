import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import RectangleIcon from '../../components/common/icon-rectangle/RectangleIcon';
import RectangleLeftFillIcon from '../../components/common/icon-rectangle-left-fill/RectangleLeftFillIcon';
import DevicesIcon from '../../components/common/icon-devices/DevicesIcon';
import DataObjectIcon from '../../components/common/icon-data-object/DataObjectIcon';
import DiversityIcon from '../../components/common/icon-diversity/DiversityIcon';
import FrameIcon from '../../components/common/icon-frame/FrameIcon';
import TeamIcon from '../../components/common/icon-team/TeamIcon';

import ServiceItem from './ServiceItem';

import {
  IconLeftContainer,
  IconRightContainer,
  PageContainer,
} from './styled-components';
const Services = () => {
  return (
    <PageContainer>
      <IconRightContainer>
        <RectangleIcon />
      </IconRightContainer>
      <IconLeftContainer>
        <RectangleLeftFillIcon />
      </IconLeftContainer>
      <Container maxWidth="lg">
        <Box paddingLeft={2} paddingRight={2}>
          <Typography
            variant="h2"
            align="center"
            sx={{ marginBottom: 1, fontSize: { xs: '32px', lg: '40px' } }}
          >
            What you will get from us
          </Typography>
          <Typography align="center" sx={{ marginBottom: { xs: '30px', md: '57px' } }}>
            Ensure your product is high-performance with a team of QA experts by your side.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 3.75 }} columns={12} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <ServiceItem
              icon={<DevicesIcon />}
              link="#link"
              title="Front-end development"
              text="Flexible rendering and caching options, including Incremental Static Regeneration (ISR), on a per-page level."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceItem
              icon={<DataObjectIcon />}
              link="#link"
              title="Source code audit"
              text="Flexible rendering and caching options, including Incremental Static Regeneration (ISR), on a per-page level."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceItem
              icon={<DiversityIcon />}
              link="#link"
              title="Dedicated front-end team"
              text="Flexible rendering and caching options, including Incremental Static Regeneration (ISR), on a per-page level."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceItem
              icon={<FrameIcon />}
              link="#link"
              title="MVP development"
              text="Flexible rendering and caching options, including Incremental Static Regeneration (ISR), on a per-page level."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceItem
              icon={<TeamIcon />}
              link="#link"
              title="Team management"
              text="Flexible rendering and caching options, including Incremental Static Regeneration (ISR), on a per-page level."
            />
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
};

export default Services;

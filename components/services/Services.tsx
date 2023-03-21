import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import RectangleIcon from '../../components/common/icon-rectangle/RectangleIcon';
import DevicesIcon from '../../components/common/icon-devices/DevicesIcon';
import DataObjectIcon from '../../components/common/icon-data-object/DataObjectIcon';
import DiversityIcon from '../../components/common/icon-diversity/DiversityIcon';
import FrameIcon from '../../components/common/icon-frame/FrameIcon';
import TeamIcon from '../../components/common/icon-team/TeamIcon';

import ServiceItem from './ServiceItem';

import { IconLeftContainer, IconRightContainer, PageContainer } from './styled-components';

const Services = () => {
  return (
    <PageContainer>
      <IconRightContainer>
        <RectangleIcon />
      </IconRightContainer>
      <IconLeftContainer>
        <RectangleIcon />
      </IconLeftContainer>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ marginBottom: 1 }}>
          What you will get from us
        </Typography>
        <Typography align="center">
          Ensure your product is high-performance with a team of QA experts by your side.
        </Typography>

        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} sm={6} lg={4}>
            <ServiceItem
              icon={<DevicesIcon />}
              title="Front-end development"
              text="Flexible rendering and caching options, including Incremental Static Regeneration (ISR), on a per-page level."
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ServiceItem
              icon={<DataObjectIcon />}
              title="Source code audit"
              text="Flexible rendering and caching options, including Incremental Static Regeneration (ISR), on a per-page level."
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ServiceItem
              icon={<DiversityIcon />}
              title="Dedicated front-end team"
              text="Flexible rendering and caching options, including Incremental Static Regeneration (ISR), on a per-page level."
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ServiceItem
              icon={<FrameIcon />}
              title="MVP development"
              text="Flexible rendering and caching options, including Incremental Static Regeneration (ISR), on a per-page level."
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <ServiceItem
              icon={<TeamIcon />}
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

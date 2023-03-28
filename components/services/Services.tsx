import type { FC } from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import type { Service } from '../../models';

import RectangleIcon from '../common/icon-rectangle/RectangleIcon';
import RectangleLeftFillIcon from '../common/icon-rectangle-left-fill/RectangleLeftFillIcon';
import DevicesIcon from '../common/icon-devices/DevicesIcon';
import DataObjectIcon from '../common/icon-data-object/DataObjectIcon';
import DiversityIcon from '../common/icon-diversity/DiversityIcon';
import FrameIcon from '../common/icon-frame/FrameIcon';
import TeamIcon from '../common/icon-team/TeamIcon';

import ServiceItem from './ServiceItem';

import { IconLeftContainer, IconRightContainer, PageContainer } from './styled-components';

interface ServicesProps {
  data: Array<Service>;
}

const icons: Record<string, JSX.Element> = {
  devicesIcon: <DevicesIcon />,
  dataObjectIcon: <DataObjectIcon />,
  diversityIcon: <DiversityIcon />,
  frameIcon: <FrameIcon />,
  teamIcon: <TeamIcon />,
};

const Services: FC<ServicesProps> = ({ data }) => {
  return (
    <PageContainer id="services">
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
            sx={{ marginBottom: 1.5, fontSize: { xs: '32px', lg: '40px' } }}
          >
            What you will get from us
          </Typography>

          <Typography align="center" sx={{ marginBottom: { xs: '30px', md: '57px' } }}>
            Let&apos;s build a bold experience together
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 3.75 }} columns={12} justifyContent="center">
          {data.map(service => {
            return (
              <Grid key={service.id} container item direction="column" xs={12} sm={6} md={4} >
                <ServiceItem
                  icon={icons[service.serviceIcon]}
                  link={service.serviceLink}
                  title={service.serviceTitle}
                  text={service.serviceText}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </PageContainer>
  );
};

export default Services;

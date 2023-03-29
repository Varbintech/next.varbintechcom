import type { FC } from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import type { Service } from '../../models';

import Link, { type LinkProps } from '../common/link/Link';
import RectangleIcon from '../common/icon-rectangle/RectangleIcon';
import SiteLogo from '../common/navigation/SiteLogo';
import { navigationRoutes } from '../common/navigation/NavigationLinks';

import { FooterList, FooterListItem, IconRightContainer, PageContainer } from './styled-components';

interface FooterProps {
  services: Array<Service>;
}

const Footer: FC<FooterProps> = ({ services }) => {
  const currentYear = new Date().getFullYear();

  return (
    <PageContainer>
      <IconRightContainer>
        <RectangleIcon />
      </IconRightContainer>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6.5, md: 3, lg: 5.5 }} columns={12}>
          <Grid container item direction="column" xs={12} md={3}>
            <SiteLogo />
            <Typography marginTop={2}>
              We help startups and companies of all shapes and sizes to build high-quality Front-End
              solutions.
            </Typography>
          </Grid>
          <Grid container item direction="column" xs={6} md={3}>
            <Typography variant="subtitle2">Navigation</Typography>
            <FooterList>
              {navigationRoutes.map((singleRoute, index) => {
                if (singleRoute.href || singleRoute.scrollTo) {
                  return (
                    <FooterListItem key={index}>
                      <Link href={singleRoute.href || singleRoute.scrollTo} underline="hover">
                        {singleRoute.text}
                      </Link>
                    </FooterListItem>
                  );
                }

                return null;
              })}
            </FooterList>
          </Grid>
          <Grid container item direction="column" xs={6} md={3}>
            <Typography variant="subtitle2">Services</Typography>
            <FooterList>
              {services.map(service => {
                const additionalLinkProps: Pick<LinkProps, 'component' | 'href' | 'underline'> =
                  service.serviceLink
                    ? { href: service.serviceLink, underline: 'hover' }
                    : { component: 'div' };

                return (
                  <FooterListItem key={service.id}>
                    <Link {...additionalLinkProps}>{service.serviceTitle}</Link>
                  </FooterListItem>
                );
              })}
            </FooterList>
          </Grid>
          <Grid container item direction="column" xs={10} md={3}>
            <Typography variant="subtitle2">Hire Engineers</Typography>
            <FooterList>
              <FooterListItem>Hire React.js Developer</FooterListItem>
              <FooterListItem>Hire Front-End Developer</FooterListItem>
              <FooterListItem>Hire Angular Developer</FooterListItem>
              <FooterListItem>Hire Software Development Team</FooterListItem>
            </FooterList>
          </Grid>
        </Grid>
        <Divider sx={{ margin: { xs: '30px 0 22px', md: '60px 0 22px', lg: '118px 0 22px' } }} />
        <Typography variant="subtitle2" sx={{ textAlign: { md: 'center' } }}>
          &copy; Varbintech {currentYear}
        </Typography>
      </Container>
    </PageContainer>
  );
};

export default Footer;

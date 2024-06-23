import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import type { FooterData } from '../../models';

import { Settings } from '../../constants/settings';
import { useGenerateEventGa } from '../../hooks/use-generate-event-ga';

import Link, { type LinkProps } from '../common/link/Link';
import NavigationLink from '../common/link/NavigationLink';
import RectangleIcon from '../common/icon-rectangle/RectangleIcon';
import SiteLogo from '../common/navigation/SiteLogo';

import { FooterList, FooterListItem, IconRightContainer, PageContainer } from './styled-components';

interface FooterProps {
  data: FooterData;
}

const Footer = ({ data }: FooterProps) => {
  const handleGa = useGenerateEventGa('link');

  const currentYear = new Date().getFullYear();

  const additionalFooterLinkProps = (
    link: string,
  ): Pick<LinkProps, 'component' | 'href' | 'underline' | 'className'> => {
    return link
      ? { href: link, underline: 'hover', className: 'footer-link' }
      : { component: 'div' };
  };

  return (
    <footer>
      <PageContainer>
        <IconRightContainer>
          <RectangleIcon />
        </IconRightContainer>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6.5, md: 3, lg: 5.5 }} columns={12}>
            <Grid container item direction="column" xs={12} md={3}>
              <SiteLogo
                onGa={handleGa}
                id="siteLogoLink_footer"
                isDarkTheme={Settings.DarkThemeAvailable}
              />
              <Typography marginTop={2}>
                We help startups and companies of all shapes and sizes to build high-quality
                Front-End solutions.
              </Typography>
            </Grid>
            <Grid container item direction="column" xs={6} md={3}>
              <Typography variant="subtitle2" component="h4">
                Navigation
              </Typography>

              <FooterList>
                {data.navigations.map(singleRoute => {
                  if (singleRoute.href || singleRoute.scrollTo) {
                    return (
                      <FooterListItem key={singleRoute.id}>
                        <NavigationLink
                          href={singleRoute.href || singleRoute.scrollTo}
                          id={`${singleRoute.linkId}_footer`}
                        >
                          {singleRoute.text}
                        </NavigationLink>
                      </FooterListItem>
                    );
                  }

                  return null;
                })}
              </FooterList>
            </Grid>
            <Grid container item direction="column" xs={6} md={3}>
              <Typography variant="subtitle2" component="h4">
                Services
              </Typography>
              <FooterList>
                {data.services.map(service => {
                  return (
                    <FooterListItem key={service.id}>
                      <Link {...additionalFooterLinkProps(service.serviceLink)}>
                        {service.serviceTitle}
                      </Link>
                    </FooterListItem>
                  );
                })}
              </FooterList>
            </Grid>
            <Grid container item direction="column" xs={10} md={3}>
              <Typography variant="subtitle2" component="h4">
                Hire Engineers
              </Typography>
              <FooterList>
                {data.hireEngineers.map(hireEngineer => {
                  return (
                    <FooterListItem key={hireEngineer.id}>
                      <Link {...additionalFooterLinkProps(hireEngineer.hireLink)}>
                        {hireEngineer.hireText}
                      </Link>
                    </FooterListItem>
                  );
                })}
              </FooterList>
            </Grid>
          </Grid>
          <Divider sx={{ margin: { xs: '30px 0 22px', md: '60px 0 22px', lg: '118px 0 22px' } }} />

          <Typography variant="subtitle2" sx={{ textAlign: { md: 'center' } }} component="h5">
            &copy; Varbintech {currentYear}
          </Typography>
        </Container>
      </PageContainer>
    </footer>
  );
};

export default Footer;

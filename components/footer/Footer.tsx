import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import type { FooterData, HireEngineersLink, PolicyLink } from '../../models';

import { Settings } from '../../constants/settings';
import { MetaData } from '../../constants/meta';
import { useGenerateEventGa } from '../../hooks/use-generate-event-ga';

import NavigationLink from '../common/link/NavigationLink';
import RectangleIcon from '../common/icon-rectangle/RectangleIcon';
import SiteLogo from '../common/navigation/SiteLogo';

import { FooterList, FooterListItem, IconRightContainer, PageContainer } from './styled-components';

interface FooterProps {
  data: Omit<FooterData, 'hireEngineers'> & {
    hireEngineersLinks: Array<HireEngineersLink>;
    policyLinks: Array<PolicyLink>;
  };
}

const Footer = ({ data }: FooterProps) => {
  const { navigations, hireEngineersLinks, policyLinks } = data;

  const handleGa = useGenerateEventGa('link');

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <PageContainer>
        <IconRightContainer>
          <RectangleIcon />
        </IconRightContainer>

        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6.5, md: 3, lg: 5.5 }} columns={12}>
            <Grid container item direction="column" xs={12} md={4}>
              <SiteLogo
                onGa={handleGa}
                id="siteLogoLink_footer"
                isDarkTheme={Settings.DarkThemeAvailable}
              />
              <Typography marginTop={2}>{MetaData.Description}</Typography>
            </Grid>

            <Grid container item direction="column" xs={6} md={4} mx={{ xs: 'unset', md: 'auto' }}>
              <Typography variant="subtitle2" component="h4">
                Navigation
              </Typography>

              <nav>
                <FooterList>
                  {navigations.map(singleRoute => {
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
              </nav>
            </Grid>

            {/* <Grid container item direction="column" xs={6} md={3}>
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
            </Grid> */}

            <Grid container item direction="column" xs={10} md={3}>
              <Typography variant="subtitle2" component="h4">
                Hire Engineers
              </Typography>

              <nav>
                <FooterList>
                  {hireEngineersLinks.map(hireEngineer => (
                    <FooterListItem key={hireEngineer.id}>
                      <NavigationLink
                        href={`/hire-engineers/${hireEngineer.slug}`}
                        id={`hireEngineer_${hireEngineer.id}`}
                      >
                        {hireEngineer.title}
                      </NavigationLink>
                    </FooterListItem>
                  ))}
                </FooterList>
              </nav>
            </Grid>
          </Grid>

          <Divider sx={{ margin: { xs: '30px 0 22px', md: '60px 0 22px', lg: '118px 0 22px' } }} />

          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle2" sx={{ textAlign: { md: 'center' } }} component="h5">
              &copy; Varbintech {currentYear}
            </Typography>

            <nav>
              <FooterList sx={{ m: 0 }}>
                {policyLinks.map(policyLink => (
                  <FooterListItem key={policyLink.id}>
                    <NavigationLink
                      href={`/${policyLink.slug}`}
                      id={`policyLink_${policyLink.id}`}
                      variant="subtitle2"
                    >
                      {policyLink.title}
                    </NavigationLink>
                  </FooterListItem>
                ))}
              </FooterList>
            </nav>
          </Box>
        </Container>
      </PageContainer>
    </footer>
  );
};

export default Footer;

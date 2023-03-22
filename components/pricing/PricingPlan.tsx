import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import PlanItem from './PlanItem';

import { PageContainer, ListStyled } from './styled-components';

const PricingPlan = () => {
  return (
    <PageContainer>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            marginBottom: { xs: '36px', lg: '58px' },
            fontSize: { xs: '32px', lg: '40px' },
          }}
        >
          Choose a plan that match your project
        </Typography>
        <Grid
          container
          spacing={{ xs: 3, md: 3.75 }}
          columns={12}
          marginBottom={{ xs: '40px', md: '30px' }}
        >
          <Grid item xs={12} md={4}>
            <PlanItem title="Monthy" price="300" savePrice="200" flag="MONTH">
              <ListStyled>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="Open-Source under MIT License" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="REST & GraphQL API" />
                </ListItem>
              </ListStyled>
            </PlanItem>
          </Grid>
          <Grid item xs={12} md={4}>
            <PlanItem title="Quarterly" price="300" savePrice="200" flag="QUARTER">
              <ListStyled>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="Open-Source under MIT License" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="REST & GraphQL API" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="REST & GraphQL API" />
                </ListItem>
              </ListStyled>
            </PlanItem>
          </Grid>
          <Grid item xs={12} md={4}>
            <PlanItem title="Yearly" price="300" savePrice="200" flag="YEAR">
              <ListStyled>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="Open-Source under MIT License" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="REST & GraphQL API" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="REST & GraphQL API" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="REST & GraphQL API" />
                </ListItem>
              </ListStyled>
            </PlanItem>
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
};

export default PricingPlan;

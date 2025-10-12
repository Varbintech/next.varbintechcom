import type { FC } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import { Settings } from '../../constants/settings';

import Button from '../common/buttons/Button';

/* import BlogSection from './BlogSection'; */

interface RelatedPostsProps {
  data: Array<any>;
}

const RelatedPosts: FC<RelatedPostsProps> = ({ data }) => {
  return (
    <Container maxWidth="lg" sx={{ marginBottom: { xs: '64px', lg: '120px' } }}>
      <Divider sx={{ marginBottom: { xs: '60px', lg: '112px' } }} />
      <Typography
        variant="h2"
        align="center"
        mb={{ xs: '28px', md: '58px' }}
        fontSize={{ xs: '24px', md: '40px' }}
      >
        Related posts
      </Typography>
      <Grid container spacing={{ xs: '35px', md: 3.75 }} columns={12} justifyContent="center">
        {data.map(item => {
          return (
            <Grid key={item.id} container item direction="column" xs={12} sm={6} md={4}>
              {/* <BlogSection data={item} /> */}
            </Grid>
          );
        })}
      </Grid>
      <Stack direction="row" spacing={3} justifyContent="center" marginTop={{ xs: 4, md: 7 }}>
        <Button variant="outlined">View more</Button>
        <Button href={Settings.CalendlyLink}>Book a call</Button>
      </Stack>
    </Container>
  );
};

export default RelatedPosts;

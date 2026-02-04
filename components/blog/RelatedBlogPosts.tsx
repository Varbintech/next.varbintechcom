import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import type { BlogItemStrapi } from '../../models';

import Button from '../common/buttons/Button';

import RelatedBlogPost from './RelatedBlogPost';

interface RelatedBlogPostsProps {
  data: Array<BlogItemStrapi>;
  intro: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const RelatedBlogPosts = (props: RelatedBlogPostsProps) => {
  const { data, intro, description, buttonText, buttonLink } = props;

  return (
    <Container maxWidth="lg" sx={{ marginBottom: { xs: '64px', lg: '120px' } }}>
      <Divider sx={{ marginBottom: { xs: '20px', lg: '42px' } }} />

      <Typography
        variant="h2"
        align="center"
        mb={{ xs: '28px', md: '58px' }}
        fontSize={{ xs: '24px', md: '40px' }}
      >
        {intro}
      </Typography>

      <Grid
        container
        spacing={{ xs: '35px', md: 3.75 }}
        columns={12}
        justifyContent="center"
        marginBottom={{
          xs: '60px',
          lg: '82px',
        }}
      >
        {data.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <RelatedBlogPost data={item} />
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ marginBottom: { xs: '20px', lg: '42px' } }} />

      <Typography variant="body1" align="center" fontSize={{ xs: '16px', md: '20px' }}>
        {description}
      </Typography>

      <Stack direction="row" spacing={3} justifyContent="center" marginTop={{ xs: 1, md: 2 }}>
        <Button href={buttonLink}>{buttonText}</Button>
      </Stack>
    </Container>
  );
};

export default RelatedBlogPosts;

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import type { BlogItemStrapi } from '../../models';

import Button from '../common/buttons/Button';

import BlogSection from './BlogSection';
import { PageContainer } from './styled-components';

interface BlogProps {
  data: Array<BlogItemStrapi>;
}

const Blog = ({ data }: BlogProps) => {
  return (
    <PageContainer>
      <Container maxWidth="lg">
        <Grid
          container
          columns={12}
          spacing={{ xs: '35px', md: 3.75 }}
          justifyContent={data.length > 3 ? 'center' : 'flex-start'}
        >
          {data.map(item => (
            <Grid key={item.id} container item direction="column" xs={12} sm={6} md={4}>
              <BlogSection data={item} />
            </Grid>
          ))}
        </Grid>

        {data.length > 20 ? (
          <Stack alignItems="center" marginTop={{ xs: 4, md: 7 }}>
            <Button variant="outlined">Load more</Button>
          </Stack>
        ) : null}
      </Container>
    </PageContainer>
  );
};

export default Blog;

import type { FC } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import type { BlogItem } from '../../models';

import Button from '../common/buttons/Button';

import BlogSection from './BlogSection';
import { PageContainer } from './styled-components';

interface BlogProps {
  data: Array<BlogItem>;
}

const Blog: FC<BlogProps> = ({ data }) => {
  return (
    <PageContainer>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: '35px', md: 3.75 }} columns={12} justifyContent="center">
          {data.map(item => {
            return (
              <Grid key={item.id} container item direction="column" xs={12} sm={6} md={4}>
                <BlogSection data={item} />
              </Grid>
            );
          })}
        </Grid>
        <Stack alignItems="center" marginTop={{ xs: 4, md: 7 }}>
          <Button variant="outlined">Load more</Button>
        </Stack>
      </Container>
    </PageContainer>
  );
};

export default Blog;

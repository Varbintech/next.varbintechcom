import type { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { Settings } from '../../constants/settings';

import { useWindowLocation } from '../../hooks/use-window-location';

import HeroDetails from '../../components/hero/HeroDetails';
import TextColumn from '../../components/common/text-column/TextColumn';
import ImagesColumn from '../../components/common/images-column/ImagesColumn';
import RelatedPosts from '../../components/blog/RelatedPosts';
import TableOfContent from '../../components/common/table-of-content/TableOfContent';

import { blogData } from '../../mocks/blog-data';

import { socialShareButtons } from '../../utils/socialShareButtons';

const BlogDetailPage = () => {
  const {
    query: { blogId },
    isReady,
    asPath,
  } = useRouter();
  const location = useWindowLocation(isReady);

  const data = blogData.find(item => item.id === Number(blogId));

  const pageLink = (location?.origin && new URL(asPath, location?.origin).href) || '';

  if (data) {
    return (
      <>
        <HeroDetails
          title={data.blogTitle}
          projectTags={data.blogTags}
          projectSocialIcons={socialShareButtons(pageLink)}
          postAuthor={data.blogAuthor}
          postDate={data.blogDate}
          postAuthorPhoto={data.blogAuthorPhoto}
          postBgImage={data.blogImage.src}
        />

        <Container maxWidth="lg" sx={{ marginTop: { md: '64px' }, marginBottom: { md: '64px' } }}>
          <Grid container spacing={'30px'} columns={12}>
            <Grid container item direction="column" md={3} display={{ xs: 'none', md: 'flex' }}>
              <TableOfContent
                image={data.blogImage}
                data={data.blogDetails}
                socialIcons={socialShareButtons(pageLink)}
              />
            </Grid>
            <Grid container item direction="column" xs={12} md={9}>
              {data.blogDetails.map((item, index) => {
                if (item.label === 'TEXT') {
                  return <TextColumn key={index} data={item} />;
                }
                if (item.label === 'IMAGE') {
                  return <ImagesColumn key={index} data={item} />;
                }

                return null;
              })}
            </Grid>
          </Grid>
        </Container>

        <RelatedPosts data={blogData} />
      </>
    );
  }

  return null;
};

export default BlogDetailPage;

export const getStaticProps: GetStaticProps = async () => {
  if (process.env.NODE_ENV === 'production') {
    return { notFound: true };
  }

  return {
    props: {},
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every `Settings.RevalidateTime` seconds
    revalidate: Settings.RevalidateTime, // In seconds
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  if (process.env.NODE_ENV === 'production') {
    return {
      paths: [], // @TODO replace with real data when Headless CMS is ready
      fallback: false,
    };
  }

  const paths = blogData.map(({ id }) => ({
    params: { blogId: String(id) },
  }));

  return {
    paths,
    fallback: false,
  };
};

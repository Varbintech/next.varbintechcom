import { useRouter } from 'next/router';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import HeroDetails from '../../components/hero/HeroDetails';
import TextColumn from '../../components/common/text-column/TextColumn';
import ImagesColumn from '../../components/common/images-column/ImagesColumn';
import RelatedPosts from '../../components/blog/RelatedPosts';
import TableOfContent from '../../components/common/table-of-content/TableOfContent';

import { blogData } from '../../mocks/blog-data';

import { socialShareButtons } from '../../utils/socialShareButtons';

const BlogDetailPage = () => {
  const router = useRouter();
  const blogId = router.query.blogId;

  const data = blogData.find(item => item.id === Number(blogId));

  const pageLink = `https://5f9731df.next-varbintechcom.pages.dev${router.asPath}`;

  return (
    <>
      {data ? (
        <HeroDetails
          title={data.blogTitle}
          projectTags={data.blogTags}
          projectSocialIcons={socialShareButtons(pageLink)}
          postAuthor={data.blogAuthor}
          postDate={data.blogDate}
          postAuthorPhoto={data.blogAuthorPhoto}
          postBgImage={data.blogImage.src}
        />
      ) : null}

      {data ? (
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
      ) : null}

      <RelatedPosts data={blogData} />
    </>
  );
};

export default BlogDetailPage;

import type { GetStaticProps } from 'next';

import Blog from '../../components/blog/Blog';
import Hero from '../../components/hero/Hero';
import HeadBlog from '../../components-pages/head/HeadCaseStudyDetails';

import { getStaticPropsIndex, type BlogStaticProps } from '../../utils/api.blog';

import { MetaData } from '../../constants/meta';

export const getStaticProps: GetStaticProps<BlogStaticProps> = async ({ params }) =>
  await getStaticPropsIndex({ params });

const BlogPage = (props: BlogStaticProps) => {
  const { data, socialShareButtons, baseUrl } = props;

  return (
    <>
      <HeadBlog
        title={`Stay inspired by Varbintech Blog | ${MetaData.IndexAuthor}`}
        description="We share our knowledge and experience in front-end development, software engineering, and more."
        keywords="Front-end development blog, Software engineering blog, Web development blog, React tutorials, Angular guides, Next.js tips, Front-end development articles"
        image={MetaData.ImageBlog}
        imageAlt={MetaData.ImageAltBlog}
        ogUrl={`${baseUrl}/blog`}
        ogType={MetaData.IndexType}
      />

      <Hero
        small
        plainBg
        title="Stay inspired by Varbintech Blog"
        subtitle="We share our knowledge and experience in front-end development, software engineering, and more."
        socialIcons={socialShareButtons}
      />

      <Blog data={data} />
    </>
  );
};

export default BlogPage;

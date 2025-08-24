import type { GetStaticProps } from 'next';

import Blog from '../../components/blog/Blog';
import Hero from '../../components/hero/Hero';
import HeadBlog from '../../components-pages/head/HeadCaseStudyDetails';
import JsonLdWebPage from '../../components/json-ld/WebPage';
import JsonLdWebSite from '../../components/json-ld/WebSite';

import { getStaticPropsIndex, type BlogStaticProps } from '../../utils/api.blog';

import { MetaData } from '../../constants/meta';

export const getStaticProps: GetStaticProps<BlogStaticProps> = async ({ params }) =>
  await getStaticPropsIndex({ params });

const BlogPage = (props: BlogStaticProps) => {
  const { data, socialShareButtons, baseUrl } = props;

  return (
    <>
      <HeadBlog
        title={`Stay inspired by ${MetaData.IndexAuthor} Blog`}
        description="We share our knowledge and experience in E-Commerce and SaaS solutions, front-end development, software engineering, and more."
        keywords="Front-end development blog, Software engineering blog, Web development blog, React tutorials, Angular guides, Next.js tips, Front-end development articles"
        image={MetaData.ImageBlog}
        imageAlt={MetaData.ImageAltBlog}
        ogUrl={`${baseUrl}/blog`}
        ogType={MetaData.IndexType}
      />

      <JsonLdWebPage
        slug="/blog"
        description="We share our knowledge and experience in E-Commerce and SaaS solutions, front-end development, software engineering, and more."
        name={`${MetaData.IndexAuthor} Blog`}
      />
      <JsonLdWebSite />

      <Hero
        small
        plainBg
        title="Stay inspired by Varbintech blog"
        subtitle="We share our knowledge and experience in E-Commerce and SaaS solutions, front-end development, software engineering, and more."
        socialIcons={socialShareButtons}
      />

      <Blog data={data} />
    </>
  );
};

export default BlogPage;

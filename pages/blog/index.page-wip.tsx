import type { GetStaticProps } from 'next';

import { blogData } from '../../mocks/blog-data';

import Blog from '../../components/blog/Blog';
import Hero from '../../components/hero/Hero';

import { getStaticPropsIndex } from '../../utils/api.blog';

export const getStaticProps: GetStaticProps<any> = async () => await getStaticPropsIndex();

const BlogPage = () => {
  return (
    <>
      <Hero small plainBg title="Stay inspired by Varbintech Blog" />

      <Blog data={blogData} />
    </>
  );
};

export default BlogPage;

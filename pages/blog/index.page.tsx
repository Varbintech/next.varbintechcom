import type { GetStaticProps } from 'next';

import Blog from '../../components/blog/Blog';
import Hero from '../../components/hero/Hero';

import { getStaticPropsIndex, type BlogStaticProps } from '../../utils/api.blog';

export const getStaticProps: GetStaticProps<BlogStaticProps> = async ({ params }) =>
  await getStaticPropsIndex({ params });

const BlogPage = (props: BlogStaticProps) => {
  const { data } = props;

  return (
    <>
      <Hero small plainBg title="Stay inspired by Varbintech Blog" />

      <Blog data={data} />
    </>
  );
};

export default BlogPage;

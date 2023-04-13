import type { GetStaticProps } from 'next';

import { Settings } from '../../constants/settings';

import { blogData } from '../../mocks/blog-data';

import Blog from '../../components/blog/Blog';
import Hero from '../../components/hero/Hero';

const BlogPage = () => {
  return (
    <>
      <Hero small plainBg title="Stay inspired Varbin tech Blog" />
      <Blog data={blogData} />
    </>
  );
};

export default BlogPage;

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

import { blogData } from '../../mocks/blog-data';

import Blog from '../../components/blog/Blog';
import Hero from '../../components/hero/Hero';

const BlogPage = () => {
  return (
    <>
      <Hero small plainBg title="Stay inspired by Varbintech Blog" />
      <Blog data={blogData} />
    </>
  );
};

export default BlogPage;

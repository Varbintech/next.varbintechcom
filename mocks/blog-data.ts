import type { BlogItem } from '../models';

const blogItem1: BlogItem = {
  blogImage: {
    src: '/TIN-project.webp',
    name: 'tinProject',
    width: 2944,
    height: 2944,
    srcSet:
      '/tin-project/TIN-project_q9im1n_c_scale,w_397.webp 397w, /tin-project/TIN-project_q9im1n_c_scale,w_884.webp 884w, /tin-project/TIN-project_q9im1n_c_scale,w_1200.webp 1200w',
    sizes: '(max-width: 3000px) 40vw, 1200px',
  },
  blogCategoty: 'Development',
  blogDate: '22 January',
  blogTitle: 'The Pros and Cons of Using Tailwind CSS and how',
};

export const blogData: Array<BlogItem> = [
  blogItem1,
  blogItem1,
  blogItem1,
  blogItem1,
  blogItem1,
  blogItem1,
];

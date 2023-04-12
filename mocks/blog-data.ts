import type { BlogItem } from '../models';

const blogItem1: BlogItem = {
  id: 0,
  blogImage: {
    src: '/tin-project/TIN-project_q9im1n_c_scale,w_397.webp',
    name: 'tinProject',
    width: 2944,
    height: 2944,
    srcSet:
      '/tin-project/TIN-project_q9im1n_c_scale,w_397.webp 397w, /tin-project/TIN-project_q9im1n_c_scale,w_884.webp 884w, /tin-project/TIN-project_q9im1n_c_scale,w_1200.webp 1200w',
    sizes: '(max-width: 3000px) 40vw, 1200px',
  },
  blogCategoty: 'Development',
  blogDate: 'February 17, 2023',
  blogAuthor: 'James LePage',
  blogAuthorPhoto: {
    src: '/filiprogaczewski.webp',
    name: 'filiprogaczewski',
    width: 50,
    height: 50,
  },
  blogTitle: 'The Pros and Cons of Using Tailwind CSS and how',
  blogTags: [
    { name: 'Front-End', link: '' },
    { name: 'Team management', link: '' },
    { name: 'Project management', link: '' },
    { name: 'Source code audit', link: '' },
    { name: 'Refactoring source code', link: '' },
    { name: 'Code review', link: '' },
  ],
  blogDetails: [
    {
      label: 'TEXT',
      name: '',
      textSection: [
        {
          text: 'All is silent as if our presence has done some wrong. Slowly, whispers fill the air, discussing this unusual occurrence. I used to be embarrassed, for myself and for the rest of us, but the challenge of finding pride in it all was all the more rewarding. ',
        },
        {
          text: 'I remember walking into a building, any building, be it a restaurant, a shopping center or a synagogue, and noticing the stares. The two gossiping women in the corner, the rabbi or the cashier would lift their heads and strangely acknowledge my family’s presence. I remember thinking, “What could they possibly be staring at? Are we that beautiful?”',
        },
        {
          text: 'It wasn’t until junior high school that it hit me. “I have two African American brothers and three sisters with Down syndrome!” It wasn’t a shock for I’ve lived with these people, my brothers and sisters, for my entire life. Consciously, I knew what they looked like, but it simply wasn’t important. Even today, on a daily basis, I don’t realize the diversity of my family until I see my brother picking out his afro while I catch myself thinking, “Shit, I want an afro!”',
        },
      ],
    },
    {
      label: 'TEXT',
      name: '',
      href: 'Mindfulness_Activities',
      title: 'Mindfulness Activities for Kids & Toddlers',
      textSection: [
        {
          text: 'All is silent as if our presence has done some wrong. Slowly, whispers fill the air, discussing this unusual occurrence. I used to be embarrassed, for myself and for the rest of us, but the challenge of finding pride in it all was all the more rewarding. ',
        },
        {
          text: 'I remember walking into a building, any building, be it a restaurant, a shopping center or a synagogue, and noticing the stares. The two gossiping women in the corner, the rabbi or the cashier would lift their heads and strangely acknowledge my family’s presence. I remember thinking, “What could they possibly be staring at? Are we that beautiful?”',
        },
      ],
    },
    {
      label: 'TEXT',
      name: '',
      href: 'Holiday_Travel',
      title: 'Holiday Travel Safety Tips',
      textSection: [
        {
          text: 'All is silent as if our presence has done some wrong. Slowly, whispers fill the air, discussing this unusual occurrence. I used to be embarrassed, for myself and for the rest of us, but the challenge of finding pride in it all was all the more rewarding.',
        },
      ],
    },
    {
      label: 'TEXT',
      name: '',
      href: 'Physical_Development',
      title: 'Physical Development Activities for Toddlers',
      textSection: [
        {
          text: 'All is silent as if our presence has done some wrong. Slowly, whispers fill the air, discussing this unusual occurrence. I used to be embarrassed, for myself and for the rest of us, but the challenge of finding pride in it all was all the more rewarding.',
        },
      ],
    },
    {
      label: 'IMAGE',
      imageSection: [
        {
          src: '/TIN-project.webp',
          name: 'tinProject',
          width: 2944,
          height: 2944,
          srcSet:
            '/tin-project/TIN-project_q9im1n_c_scale,w_397.webp 397w, /tin-project/TIN-project_q9im1n_c_scale,w_884.webp 884w, /tin-project/TIN-project_q9im1n_c_scale,w_1200.webp 1200w',
          sizes: '(max-width: 3000px) 40vw, 1200px',
        },
      ],
    },
    {
      label: 'TEXT',
      name: '',
      href: 'At-Home',
      title: 'At-Home Valentine’s Day Ideas',
      textSection: [
        {
          text: 'All is silent as if our presence has done some wrong. Slowly, whispers fill the air, discussing this unusual occurrence.',
        },
      ],
    },
    {
      label: 'TEXT',
      name: '',
      href: 'Revolutionary',
      title: 'The Revolutionary Functionality of the Doona Car Seat & Stroller',
      textSection: [
        {
          text: 'All is silent as if our presence has done some wrong. Slowly, whispers fill the air, discussing this unusual occurrence.',
        },
      ],
    },
  ],
};

const blogItem2: BlogItem = {
  ...blogItem1,
  id: 1,
  blogImage: {
    src: '/dt-okr-for-jira-project/DT-OKR-for-Jira_jnbl2b_c_scale,w_397.webp',
    name: 'dtOkrForJiraProject',
    width: 1221,
    height: 887,
    srcSet:
      '/dt-okr-for-jira-project/DT-OKR-for-Jira_jnbl2b_c_scale,w_397.webp 397w, /dt-okr-for-jira-project/DT-OKR-for-Jira_jnbl2b_c_scale,w_886.webp 886w, /dt-okr-for-jira-project/DT-OKR-for-Jira_jnbl2b_c_scale,w_1200.webp 1200w',
    sizes: '(max-width: 3000px) 40vw, 1200px',
  },
  blogTitle: 'Mindfulness Activities for Kids & Toddlers',
};

const blogItem3: BlogItem = {
  ...blogItem1,
  id: 2,
  blogTitle: 'Physical Development Activities for Toddlers',
};

const blogItem4: BlogItem = {
  ...blogItem1,
  id: 3,
};

const blogItem5: BlogItem = {
  ...blogItem1,
  id: 4,
};

const blogItem6: BlogItem = {
  ...blogItem1,
  id: 5,
};

export const blogData: Array<BlogItem> = [
  blogItem1,
  blogItem2,
  blogItem3,
  blogItem4,
  blogItem5,
  blogItem6,
];

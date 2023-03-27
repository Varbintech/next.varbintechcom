import type { CaseStudy } from '../models';

const caseStudy1: CaseStudy = {
  id: 0,
  projectImage: {
    src: '/TIN-project.webp',
    width: 2944,
    height: 2944,
  },
  projectImageAlt: 'The final result of cooperation between TIN and the Varbintech Team for the Strasbourg directory project',
  projectTitle: 'TIN - Strasbourg directory',
  projectDescription: ['Global communications platform that facilitates communication, interaction and transactions, enabling people to make powerful connections - whether in business, government, tourism, culture, education, philanthropy or creativity.'],
  projectTags: [
    { name: 'Front-End', link: '' },
    { name: 'Team management', link: '' },
    { name: 'Project management', link: '' },
    { name: 'Source code audit', link: '' },
    { name: 'Refactoring source code', link: '' },
    { name: 'Code review', link: '' },
  ],
  results: [],
  feedback: {
    text: 'The latest version of the portal looks great and works great. Awesome job',
    name: 'Gene Foo',
    image: {
      src: '/genefoo.webp',
      width: 396,
      height: 396,
    },
    company: 'Director at',
    companyName: 'TIN',
    companyLinkHref: 'https://www.tin.info',
    linkedInLink: 'https://www.linkedin.com/in/gene-foo-38520239',
  },
};

const caseStudy2: CaseStudy = {
  id: 1,
  projectImage: {
    src: '/DT-OKR-for-Jira.webp',
    width: 1221,
    height: 887,
  },
  projectImageAlt: 'The final result of cooperation between Digital Toucan and the Varbintech Team for the OKR for Jira project',
  projectTitle: 'Digital Toucan - OKR for Jira',
  projectDescription: ['Trusted by 1000+ companies. OKR for Jira gives you the power to create objectives with as many nesting levels as you need to reflect your organization priorities.', 'Simply create your objectives, add key results, and connect them to Jira issues. Now you can automatically track progress towards your goals and give everyone a clear path to success.'],
  projectTags: [
    { name: 'Front-End', link: '' },
    { name: 'Backend', link: '' },
    { name: 'Team management', link: '' },
    { name: 'Project management', link: '' },
    { name: 'Refactoring source code', link: '' },
    { name: 'Code review', link: '' },
  ],
  results: [
    'The first version of the add-on OKR for Jira for Cloud version of Jira was developed in less than six months',
    'Hired two Front-end developers and one Back-end developer in one month. The process was totally transparent and had no additional cost to the client',
    'Wrote more than 100 end-to-end tests covering 20+ versions of Jira',
    'Decreased the number of duplications of code by more than 50%',
    'Developed a set of reusable components that started using in both applications',
    'We had tons of fun and challenges, and enormous support from the client side',
  ],
  feedback: {
    text: "Vitalii and Varbintech are amazing software developers. Vitalii was hired to help us with one layer of one of our products. Over a year of fantastic collaboration, Vitalii helped us grow the team by 5 people contributing to all aspects of 3 products that our company has. Entire Varbintech is very professional, people are very friendly, yet approachable. They have strong technical skills, quality oriented mindset and communicate fluently and directly. It's been absolute pleasure to work with them. They helped make our products better and teams stronger. Thanks!",
    name: 'Filip Rogaczewski',
    image: {
      src: '/filiprogaczewski.webp',
      width: 200,
      height: 200,
    },
    company: 'Product Director & Co-Founder at',
    companyName: 'Digital Toucan',
    companyLinkHref: 'https://digitaltoucan.com',
    linkedInLink: 'https://www.linkedin.com/in/filiprogaczewski',
  },
};

export const caseStudies: Array<CaseStudy> = [caseStudy1, caseStudy2];

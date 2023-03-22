import type { CaseStudy } from '../models';

const caseStudy1: CaseStudy = {
  id: 0,
  projectImage: '/TIN-project.webp',
  projectImageAlt: 'The final result of cooperation between TIN and the Varbintech Team for the Strasbourg directory project',
  projectTitle: 'TIN - Strasbourg directory',
  projectDescription: ['The global retail platform for products from the past, present, and future. It provides over 2M listings from streetwear and designer brands with flexible filters and a top-notch user experience.'],
  projectTags: [
    { name: 'Front-End', link: '#' },
    { name: 'Team management', link: '#' },
    { name: 'Project management', link: '#' },
    { name: 'Source code audit', link: '#' },
    { name: 'Refactoring source code', link: '#' },
    { name: 'Code review', link: '#' },
  ],
  results: ['3+ years of cooperation with successfully implemented all needed features', '4.9 rating on App Store'],
  feedback: {
    text: 'The latest version of the portal looks great and works great. Awesome job',
    name: 'Gene Foo',
    src: '/genefoo.jpeg',
    company: 'Director at',
    companyName: 'TIN',
    companyLinkHref: 'https://www.tin.info',
    linkedInLink: 'https://www.linkedin.com/in/gene-foo-38520239',
  },
};

const caseStudy2: CaseStudy = {
  id: 1,
  projectImage: '/DT-OKR-for-Jira.webp',
  projectImageAlt: 'The final result of cooperation between Digital Toucan and the Varbintech Team for the OKR for Jira project',
  projectTitle: 'Digital Toucan - OKR for Jira',
  projectDescription: ['Trusted by 1000+ companies. OKR for Jira gives you the power to create objectives with as many nesting levels as you need to reflect your organization priorities.', 'Simply create your objectives, add key results, and connect them to Jira issues. Now you can automatically track progress towards your goals and give everyone a clear path to success.'],
  projectTags: [
    { name: 'Front-End', link: '#' },
    { name: 'Backend', link: '#' },
    { name: 'Team management', link: '#' },
    { name: 'Project management', link: '#' },
    { name: 'Refactoring source code', link: '#' },
    { name: 'Code review', link: '#' },
  ],
  results: ['3+ years of cooperation with successfully implemented all needed features', '4.9 rating on App Store'],
  feedback: {
    text: "Vitalii and Varbintech are amazing software developers. Vitalii was hired to help us with one layer of one of our products. Over a year of fantastic collaboration, Vitalii helped us grow the team by 5 people contributing to all aspects of 3 products that our company has. Entire Varbintech is very professional, people are very friendly, yet approachable. They have strong technical skills, quality oriented mindset and communicate fluently and directly. It's been absolute pleasure to work with them. They helped make our products better and teams stronger. Thanks!",
    name: 'Filip Rogaczewski',
    src: '/filiprogaczewski.jpeg',
    company: 'Product Director & Co-Founder at',
    companyName: 'Digital Toucan',
    companyLinkHref: 'https://digitaltoucan.com',
    linkedInLink: 'https://www.linkedin.com/in/filiprogaczewski',
  },
};

export const caseStudies: Array<CaseStudy> = [caseStudy1, caseStudy2];

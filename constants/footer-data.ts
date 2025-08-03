import type { FooterData } from '../models';

import { navigationRoutes } from '../constants/navigation-routes';

import { services } from './services';

export const footerData: FooterData = {
  services,
  navigation: navigationRoutes,
  hireEngineers: [
    {
      id: 0,
      hireLink: '',
      hireText: 'Hire React.js Developer',
    },
    {
      id: 1,
      hireLink: '',
      hireText: 'Hire Front-End Developer',
    },
    {
      id: 2,
      hireLink: '',
      hireText: 'Hire Angular Developer',
    },
    {
      id: 3,
      hireLink: '',
      hireText: 'Hire Software Development Team',
    },
  ],
};

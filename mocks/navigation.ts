import type { NavigationRoute } from '../models';

export const navigationRoutes: Array<NavigationRoute> = [
  {
    id: 0,
    text: 'Case studies',
    href: '/case-studies',
    scrollTo: '',
    linkId: 'caseStudiesLink',
    showInMenu: true,
  },
  {
    id: 1,
    text: 'Tech',
    href: '/tech',
    scrollTo: '',
    linkId: 'techLink',
    showInMenu: true,
  },
  {
    id: 2,
    text: 'Services',
    href: '',
    scrollTo: '/#services',
    linkId: 'servicesLink',
    showInMenu: true,
  },
  { id: 3, text: 'Pricing', href: '/pricing', scrollTo: '', linkId: 'pricingLink' },
  {
    id: 4,
    text: 'Blog',
    href: '/blog',
    scrollTo: '',
    linkId: 'blogLink',
    showInMenu: true,
  },
];

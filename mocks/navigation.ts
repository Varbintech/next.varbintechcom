import type { NavigationRoute } from '../models';

export const navigationRoutes: Array<NavigationRoute> = [
  {
    id: 0,
    text: 'Case studies',
    href: '/case-studies',
    scrollTo: '',
    linkId: 'caseStudiesLink',
  },
  { id: 1, text: 'Services', href: '', scrollTo: '/#services', linkId: 'servicesLink' },
  { id: 2, text: 'Pricing', href: '/pricing', scrollTo: '', linkId: 'pricingLink' },
  {
    id: 3,
    text: 'Blog',
    href: process.env.NODE_ENV === 'development' ? '/blog' : '',
    scrollTo: '',
    linkId: 'blogLink',
  },
];

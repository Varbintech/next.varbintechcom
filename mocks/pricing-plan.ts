import type { PricingPlan } from '../models';

const pricingPlan1: PricingPlan = {
  id: 0,
  planTitle: 'Monthy',
  planPrice: '4,999/m',
  planSavePrice: '',
  planflag: 'MONTH',
  planLinkProjects: '',
  planBenefits: [
    'Project backlog',
    'Open-Source under MIT License',
    'REST & GraphQL API',
    'Highly Flexible Content Structure',
    'Component-based approach',
    'Top-notch quality',
    'Fixed monthly rate',
    'Lightning fast communication',
    'Flexible and scalable',
    'Unlimited requests',
  ],
};

const pricingPlan2: PricingPlan = {
  id: 1,
  planTitle: 'Quarterly',
  planPrice: '4,499/m',
  planSavePrice: '500',
  planflag: 'QUARTER',
  planLinkProjects: '',
  planBenefits: [
    'Project backlog',
    'Open-Source under MIT License',
    'REST & GraphQL API',
    'Highly Flexible Content Structure',
    'Component-based approach',
    'Top-notch quality',
    'Fixed monthly rate',
    'Lightning fast communication',
    'Flexible and scalable',
    'Unlimited requests',
  ],
};

const pricingPlan3: PricingPlan = {
  id: 2,
  planTitle: 'Yearly',
  planPrice: '3,999/m',
  planSavePrice: '1000',
  planflag: 'YEAR',
  planLinkProjects: '',
  planBenefits: [
    'Project backlog',
    'Open-Source under MIT License',
    'REST & GraphQL API',
    'Highly Flexible Content Structure',
    'Component-based approach',
    'Top-notch quality',
    'Fixed monthly rate',
    'Lightning fast communication',
    'Flexible and scalable',
    'Unlimited requests',
  ],
};

export const pricingPlan: Array<PricingPlan> = [pricingPlan1, pricingPlan2, pricingPlan3];

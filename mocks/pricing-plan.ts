import type { PricingPlan } from '../models';

const pricingPlan1: PricingPlan = {
  id: 0,
  planTitle: 'Monthy',
  planPrice: '300',
  planSavePrice: '200',
  planflag: 'MONTH',
  planBenefits: [
    'Open-Source under MIT License',
    'REST & GraphQL API',
    'Highly Flexible Content Structure',
  ],
};

const pricingPlan2: PricingPlan = {
  id: 0,
  planTitle: 'Quarterly',
  planPrice: '599',
  planSavePrice: '300',
  planflag: 'QUARTER',
  planBenefits: [
    'Open-Source under MIT License',
    'REST & GraphQL API',
    'Highly Flexible Content Structure',
    'Powerful Content Management',
    'Infinite Customization Capabilities',
  ],
};

const pricingPlan3: PricingPlan = {
  id: 0,
  planTitle: 'Yearly',
  planPrice: '1000',
  planSavePrice: '500',
  planflag: 'YEAR',
  planBenefits: [
    'Open-Source under MIT License',
    'REST & GraphQL API',
    'Highly Flexible Content Structure',
    'Powerful Content Management',
    'Infinite Customization Capabilities',
  ],
};

export const pricingPlan: Array<PricingPlan> = [pricingPlan1, pricingPlan2, pricingPlan3];

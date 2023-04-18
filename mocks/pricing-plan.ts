import type { PricingPlanItem, ChackoutSrcList } from '../models';

const pricingPlan1: PricingPlanItem = {
  id: 0,
  planTitle: 'Monthly',
  planPrice: '4,999/m',
  planSavePrice: '',
  planflag: 'MONTH',
  planLinkProjects: '#caseStudies',
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

const pricingPlan2: PricingPlanItem = {
  id: 1,
  planTitle: 'Quarterly',
  planPrice: '4,499/m',
  planSavePrice: '500',
  planflag: 'QUARTER',
  planLinkProjects: '#caseStudies',
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

const pricingPlan3: PricingPlanItem = {
  id: 2,
  planTitle: 'Yearly',
  planPrice: '3,999/m',
  planSavePrice: '1000',
  planflag: 'YEAR',
  planLinkProjects: '#caseStudies',
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

export const pricingPlan: Array<PricingPlanItem> = [pricingPlan1, pricingPlan2, pricingPlan3];

export const checkoutSrcList: ChackoutSrcList = {
  MONTH: Number(process.env.NEXT_PUBLIC_LEMONSQUEEZY_TEST_MODE)
    ? String(process.env.NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_TEST_URL_MONTH)
    : String(process.env.NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_URL_MONTH),
  QUARTER: Number(process.env.NEXT_PUBLIC_LEMONSQUEEZY_TEST_MODE)
    ? String(process.env.NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_TEST_URL_QUARTER)
    : String(process.env.NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_URL_QUARTER),
  YEAR: Number(process.env.NEXT_PUBLIC_LEMONSQUEEZY_TEST_MODE)
    ? String(process.env.NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_TEST_URL_YEAR)
    : String(process.env.NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_URL_YEAR),
};

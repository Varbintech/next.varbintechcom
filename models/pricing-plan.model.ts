export type PlanType = 'MONTH' | 'QUARTER' | 'YEAR';

export interface PricingPlan {
  id: number;
  planTitle: string,
  planPrice: string,
  planSavePrice: string,
  planflag: PlanType,
  planBenefits: Array<string>,
}

export type PlanType = 'MONTH' | 'QUARTER' | 'YEAR';

export interface PricingPlanItem {
  id: number;
  planTitle: string;
  planPrice: string;
  planSavePrice: string;
  planflag: PlanType;
  planLinkProjects: string;
  planBenefits: Array<string>;
  bestChoice?: boolean;
}

export type CheckoutSrcList = {
  [key in PlanType]: string;
};

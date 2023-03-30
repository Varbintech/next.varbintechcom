import type { NavigationRoute } from './navigation-routes.model';
import type { Service } from './service.model';

export interface HireEngineer {
  id: number;
  hireLink: string;
  hireText: string;
}

export interface FooterData {
  services: Array<Service>;
  navigations: Array<NavigationRoute>;
  hireEngineers: Array<HireEngineer>;
}

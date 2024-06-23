export interface NavigationRoute {
  id: number;
  text: string;
  href: string;
  scrollTo: string;
  linkId?: string;
  showInMenu?: boolean;
}

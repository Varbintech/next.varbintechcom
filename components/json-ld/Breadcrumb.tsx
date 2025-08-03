import Script from 'next/script';

import { MetaData } from '../../constants/meta';
import { navigationRoutes } from '../../constants/navigation-routes';

import type { HireEngineersLink } from '../../models/strapi.model';

import { jsonLd } from './json-ld';

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbProps {
  itemListElement?: Array<BreadcrumbItem>;
  hireEngineersLinks?: Array<HireEngineersLink>;
}

export default function Breadcrumb({ itemListElement, hireEngineersLinks }: BreadcrumbProps) {
  const hireEngineers = hireEngineersLinks
    ? hireEngineersLinks.map(link => ({
        name: link.title,
        item: `${MetaData.Url}/${link.slug}`,
      }))
    : [];
  // Default breadcrumb items from navigation with `showInMenu: true`
  const defaultBreadcrumbItems: Array<BreadcrumbItem> = [
    {
      name: 'Home',
      item: MetaData.Url,
    },
    ...navigationRoutes
      .filter(route => route.showInMenu)
      .map(route => ({
        name: route.text,
        item: route.href ? `${MetaData.Url}${route.href}` : `${MetaData.Url}${route.scrollTo}`,
      })),
    ...hireEngineers,
  ];

  const breadcrumbItems = itemListElement || defaultBreadcrumbItems;

  const jsonLdBreadcrumb = {
    ...jsonLd.context,
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  return (
    <Script
      id="json-ld-breadcrumb"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
    />
  );
}

import * as gtag from '../../../lib/gtag';

import { navigationRoutes } from '../../../mocks/navigation';

import NavigationLink from '../link/NavigationLink';

const NavigationLinks = () => {
  const handleNavigationLinkClick = (linkId?: string): void => {
    gtag.event('link_click', {
      linkId,
    });
  };

  return (
    <>
      {navigationRoutes.map(singleRoute => {
        if (singleRoute.href || singleRoute.scrollTo) {
          return (
            <NavigationLink
              key={singleRoute.id}
              id={singleRoute.linkId}
              href={singleRoute.href || singleRoute.scrollTo}
              onClick={() => handleNavigationLinkClick(singleRoute.linkId)}
            >
              {singleRoute.text}
            </NavigationLink>
          );
        }

        return null;
      })}
    </>
  );
};

export default NavigationLinks;

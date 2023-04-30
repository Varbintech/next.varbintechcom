import { useGenerateEventGa } from '../../../hooks/use-generate-event-ga';

import { navigationRoutes } from '../../../mocks/navigation';

import NavigationLink from '../link/NavigationLink';

const NavigationLinks = () => {
  const handleNavigationLinkClick = useGenerateEventGa('link');

  return (
    <>
      {navigationRoutes.map(singleRoute => {
        if (singleRoute.href || singleRoute.scrollTo) {
          return (
            <NavigationLink
              key={singleRoute.id}
              id={singleRoute.linkId}
              href={singleRoute.href || singleRoute.scrollTo}
              onClick={handleNavigationLinkClick}
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

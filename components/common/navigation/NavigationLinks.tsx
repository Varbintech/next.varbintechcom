import { navigationRoutes } from '../../../mocks/navigation';

import NavigationLink from '../link/NavigationLink';

const NavigationLinks = () => {
  return (
    <>
      {navigationRoutes.map((singleRoute) => {
        if (singleRoute.href || singleRoute.scrollTo) {
          return (
            <NavigationLink key={singleRoute.id} href={singleRoute.href || singleRoute.scrollTo}>
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

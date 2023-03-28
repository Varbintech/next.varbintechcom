import NavigationLink from '../link/NavigationLink';

const navigationRoutes = [
  { text: 'Case studies', href: '', scrollTo: '#caseStudies' },
  { text: 'Services', href: '', scrollTo: '#services' },
  { text: 'Pricing', href: '', scrollTo: '#pricing' },
  { text: 'Blog', href: '', scrollTo: '#blog' },
];

const NavigationLinks = () => {
  return (
    <>
      {navigationRoutes.map((singleRoute, index) => {
        if (singleRoute.href || singleRoute.scrollTo) {
          return (
            <NavigationLink key={index} href={singleRoute.href || singleRoute.scrollTo}>
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

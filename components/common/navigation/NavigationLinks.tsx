import NavigationLink from '../link/NavigationLink';

const navigationRoutes = [
  { text: 'Case studies', href: '/case-studies' },
  { text: 'Technologies', href: '/technologies' },
  { text: 'Services', href: '/services' },
  { text: 'Pricing', href: '/pricing' },
  { text: 'Blog', href: '/blog' },
];

const NavigationLinks = () => {
  return (
    <>
      {navigationRoutes.map((singleRoute, index) => {
        return (
          <NavigationLink key={index} href={singleRoute.href}>
            {singleRoute.text}
          </NavigationLink>
        );
      })}
    </>
  );
};

export default NavigationLinks;

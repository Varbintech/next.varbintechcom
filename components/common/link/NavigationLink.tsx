import { type FC, useEffect, useState } from 'react';

import NextLink, { type LinkProps as NextLinkProps } from 'next/link';
import { useRouter } from 'next/router';

import MuiLink, { type LinkProps as MuiLinkProps } from '@mui/material/Link';

type NavigationLinkProps = MuiLinkProps & NextLinkProps;

const NavigationLink: FC<NavigationLinkProps> = props => {
  const { variant, href, as, children, ...restProps } = props;

  const { asPath, isReady } = useRouter();
  const [computedClassName, setComputedClassName] = useState('');

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      const linkPathname = new URL((as || href) as string, location.href).pathname;

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname;

      const newClassName =
        (linkPathname === activePathname && !href.startsWith('/#')) ||
        href === location.hash ||
        activePathname.startsWith(href)
          ? 'isActive'
          : '';

      if (newClassName !== computedClassName) {
        setComputedClassName(newClassName);
      }
    }
  }, [asPath, isReady, as, href, computedClassName]);

  return (
    <MuiLink
      {...restProps}
      component={NextLink}
      variant={variant || 'body1'}
      href={href}
      className={computedClassName}
      underline="none"
    >
      {children}
    </MuiLink>
  );
};

export default NavigationLink;

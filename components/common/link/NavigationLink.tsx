import { type FC, useEffect, useState } from 'react';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useRouter } from 'next/router';

import MuiLink, { LinkProps } from '@mui/material/Link';

type NavigationLinkProps = LinkProps & NextLinkProps;

const NavigationLink: FC<NavigationLinkProps> = props => {
  const { variant, href, children, ...restProps } = props;
  const { asPath, isReady } = useRouter();
  const [computedClassName, setComputedClassName] = useState('');

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      const linkPathname = new URL((props.as || props.href) as string, location.href).pathname;

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname;

      const newClassName = linkPathname === activePathname ? 'isActive' : '';

      if (newClassName !== computedClassName) {
        setComputedClassName(newClassName);
      }
    }
  }, [asPath, isReady, props.as, props.href, computedClassName]);

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

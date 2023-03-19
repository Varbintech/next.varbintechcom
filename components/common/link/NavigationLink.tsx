import type { FC } from 'react';

import NextLink from 'next/link';
import { useRouter } from 'next/router';

import MuiLink, { LinkProps } from '@mui/material/Link';

const NavigationLink: FC<LinkProps> = props => {
  const { variant, href, children, ...restProps } = props;

  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <MuiLink
      {...restProps}
      component={NextLink}
      variant={variant || 'body1'}
      href={href}
      className={`${isActive && 'isActive'}`}
      underline="none"
    >
      {children}
    </MuiLink>
  );
};

export default NavigationLink;

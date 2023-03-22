import type { FC } from 'react';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import MuiLink, { LinkProps } from '@mui/material/Link';

type NavigationLinkProps = LinkProps & NextLinkProps;

const Link: FC<NavigationLinkProps> = props => {
  const { variant, href, underline, children, ...restProps } = props;

  return (
    <MuiLink
      {...restProps}
      component={NextLink}
      variant={variant || 'body1'}
      href={href}
      underline={underline || 'none'}
    >
      {children}
    </MuiLink>
  );
};

export default Link;

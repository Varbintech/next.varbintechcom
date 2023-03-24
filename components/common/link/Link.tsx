import type { ElementType, FC } from 'react';

import NextLink from 'next/link';

import MuiLink, { LinkProps } from '@mui/material/Link';

export type NavigationLinkProps = LinkProps &  {
  component?: ElementType;
  href?: string;
};

const Link: FC<NavigationLinkProps> = props => {
  const { variant, component, children, ...restProps } = props;

  return (
    <MuiLink
      {...restProps}
      component={component || NextLink}
      variant={variant || 'body1'}
      underline="none"
    >
      {children}
    </MuiLink>
  );
};

export default Link;

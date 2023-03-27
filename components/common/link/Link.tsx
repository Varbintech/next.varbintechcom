import type { ElementType, FC } from 'react';

import NextLink from 'next/link';

import MuiLink, { type LinkProps as MuiLinkProps } from '@mui/material/Link';

export type LinkProps = MuiLinkProps &  {
  component?: ElementType;
  href?: string;
};

const Link: FC<LinkProps> = props => {
  const { variant, component, underline, children, ...restProps } = props;

  return (
    <MuiLink
      {...restProps}
      component={component || NextLink}
      variant={variant || 'body1'}
      underline={underline || 'none'}
    >
      {children}
    </MuiLink>
  );
};

export default Link;

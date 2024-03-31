import type { ComponentProps, AnchorHTMLAttributes, HTMLAttributes } from 'react';

import Typography from '@mui/material/Typography';

import MuiLink from '../link/Link';
import { TextColumnListStyled, TextColumnListItem } from '../text-column/TextColumn';
import {} from './TypographyExample';

import ReactMarkdown from 'react-markdown';

export const MarkdownText = ({ children, ...restProps }: ComponentProps<typeof ReactMarkdown>) => {
  return <ReactMarkdown {...restProps}>{children}</ReactMarkdown>;
};

export const MarkdownLink = ({
  children,
  ...restProps
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <MuiLink {...restProps} underline="always">
      {children}
    </MuiLink>
  );
};

export const MarkdownList = ({
  children,
  ...restProps
}: HTMLAttributes<HTMLUListElement> | HTMLAttributes<HTMLOListElement>) => (
  <TextColumnListStyled {...restProps}>{children}</TextColumnListStyled>
);

export const MarkdownListItem = ({ children, ...restProps }: HTMLAttributes<HTMLLIElement>) => (
  <TextColumnListItem {...restProps}>{children}</TextColumnListItem>
);

export const MarkdownParagraph = ({
  children,
  ...restProps
}: HTMLAttributes<HTMLParagraphElement>) => (
  <Typography variant="body2" paragraph gutterBottom {...restProps}>
    {children}
  </Typography>
);

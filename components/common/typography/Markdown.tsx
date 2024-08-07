import type { ComponentProps, AnchorHTMLAttributes, HTMLAttributes } from 'react';

import Typography from '@mui/material/Typography';

import MuiLink from '../link/Link';
import { TextColumnListStyled, TextColumnListItem } from '../text-column/TextColumn';

import { ListContainer } from './styled-components';

import ReactMarkdown from 'react-markdown';

export const MarkdownText = ({
  children,
  // Comes from ReactMarkdown
  // @ts-expect-error
  node: _,
  ...restProps
}: ComponentProps<typeof ReactMarkdown>) => {
  return <ReactMarkdown {...restProps}>{children}</ReactMarkdown>;
};

export const MarkdownLink = ({
  children,
  // Comes from ReactMarkdown
  // @ts-expect-error
  node: _,
  ...restProps
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <MuiLink {...restProps} underline="always" target="_blank">
      {children}
    </MuiLink>
  );
};

export const MarkdownList = ({
  children,
  // Comes from ReactMarkdown
  // @ts-expect-error
  node: _,
  ...restProps
}: HTMLAttributes<HTMLUListElement> | HTMLAttributes<HTMLOListElement>) => (
  <TextColumnListStyled {...restProps}>{children}</TextColumnListStyled>
);

export const MarkdownListOl = ({
  children,
  // Comes from ReactMarkdown
  // @ts-expect-error
  node: _,
  ...restProps
}: HTMLAttributes<HTMLOListElement> | HTMLAttributes<HTMLOListElement>) => (
  <ListContainer {...restProps}>{children}</ListContainer>
);

export const MarkdownListItem = ({
  children,
  // Comes from ReactMarkdown
  // @ts-expect-error
  node: _,
  ...restProps
}: HTMLAttributes<HTMLLIElement>) => (
  <TextColumnListItem {...restProps}>{children}</TextColumnListItem>
);

export const MarkdownParagraph = ({
  children,
  // Comes from ReactMarkdown
  // @ts-expect-error
  node: _,
  ...restProps
}: HTMLAttributes<HTMLParagraphElement>) => (
  <Typography
    variant="body2"
    paragraph
    gutterBottom
    {...restProps}
    sx={{
      marginBottom: 0,
    }}
  >
    {children}
  </Typography>
);

import type { ComponentProps, AnchorHTMLAttributes, HTMLAttributes } from 'react';

import ReactMarkdown from 'react-markdown';

import Typography from '@mui/material/Typography';
import type { Variant } from '@mui/material/styles/createTypography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CodeIcon from '@mui/icons-material/Code';

import MuiLink from '../link/Link';
import { TextColumnListStyled, TextColumnListItem } from '../text-column/TextColumn';

import { ListContainer, CodeStyled, PreStyled } from './styled-components';

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

export const MarkdownHeading = ({
  children,
  // Comes from ReactMarkdown
  // @ts-expect-error
  node,
  ...restProps
}: HTMLAttributes<HTMLHeadingElement>) => {
  const tagName = node?.tagName as Variant;

  return (
    <Typography variant={tagName} {...restProps}>
      {children}
    </Typography>
  );
};

export const MarkdownCode = ({
  children,
  // Comes from ReactMarkdown
  // @ts-expect-error
  node: _,
  ...restProps
}: HTMLAttributes<HTMLPreElement>) => {
  const { className } = restProps;
  const language = className?.replace('language-', '');

  return (
    <Card variant="outlined" sx={{ display: 'inline-block' }}>
      <CardContent
        sx={{
          '&:last-child': {
            paddingBottom: 2,
          },
        }}
      >
        <Box display="flex" alignItems="stretch" gap={1}>
          <CodeIcon color="action" fontSize="small" />

          <Divider orientation="vertical" sx={{ height: 'initial', m: 0 }} light />

          <Typography
            variant="subtitle2"
            component="div"
            gutterBottom
            m={0}
            lineHeight="1.2"
            alignSelf="center"
            textTransform="uppercase"
          >
            {language}
          </Typography>
        </Box>

        <Divider sx={{ mx: 0, my: 1 }} />

        <PreStyled>
          <CodeStyled>{children}</CodeStyled>
        </PreStyled>
      </CardContent>
    </Card>
  );
};

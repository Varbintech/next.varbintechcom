import {
  type ComponentProps,
  type AnchorHTMLAttributes,
  type HTMLAttributes,
  type ReactElement,
} from 'react';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import Typography, { type TypographyProps } from '@mui/material/Typography';
import type { Variant } from '@mui/material/styles/createTypography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CodeIcon from '@mui/icons-material/Code';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';

import Link from '../link/Link';
import { TextColumnListStyled, TextColumnListItem } from '../text-column/TextColumn';

import {
  ListContainer,
  CodeStyled,
  PreStyled,
  BlockquoteStyled,
  OneLineSpanStyled,
} from './styled-components';

type WithSxProps = { sx?: TypographyProps['sx'] };

interface HTMLAttributesWithCopyButton<T = HTMLHeadingElement> extends HTMLAttributes<T> {
  copyButtonEl?: ReactElement;
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,

    ['p, td']: {
      color: 'inherit',
    },
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },

  [theme.breakpoints.down('md')]: {
    [`&.${tableCellClasses.body}`]: {
      padding: theme.spacing(1),
    },

    a: {
      fontSize: 14,
    },
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  maxWidth: 400,
  margin: `${theme.spacing(2)} auto !important`,
  transition: 'max-width 0.3s ease-in-out',

  '@media only screen and (min-width: 540px)': {
    maxWidth: 500,
  },

  '@media only screen and (min-width: 640px)': {
    maxWidth: '100%',
  },
}));

const TypographyStyled = styled(Typography)(({ theme }) => ({
  position: 'relative',

  '&::before': {
    content: '"#"',
    position: 'absolute',
    left: '0',
    top: '0',
    transform: 'translateY(0.5rem) translateX(-120%)',
    color: theme.palette.primary.contrastText,
    fontSize: '1.5rem',
    fontWeight: 700,
    pointerEvents: 'none',
    zIndex: -1,
    display: 'inline-block',
    visibility: 'hidden',
  },

  '&:hover::before': {
    visibility: 'visible',
  },

  '.copy-button-container': {
    alignSelf: 'flex-end',
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(0.75),
    visibility: 'hidden',
  },

  '&:hover .copy-button-container': {
    visibility: 'visible',
  },
}));

export const MarkdownText = ({
  children,
  // Comes from ReactMarkdown
  // @ts-expect-error
  node: _,
  ...restProps
}: ComponentProps<typeof ReactMarkdown>) => {
  return <ReactMarkdown {...restProps}>{children}</ReactMarkdown>;
};

export const MarkdownTextWithHtml = ({
  children,
  // Comes from ReactMarkdown
  // @ts-expect-error
  node: _,
  ...restProps
}: ComponentProps<typeof ReactMarkdown>) => {
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]} {...restProps}>
      {children}
    </ReactMarkdown>
  );
};

export const MarkdownLink = ({
  children,
  // Comes from ReactMarkdown
  // @ts-expect-error
  node: _,
  ...restProps
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link {...restProps} underline="always" target="_blank">
      {children}
    </Link>
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
  sx,
  ...restProps
}: HTMLAttributes<HTMLParagraphElement> & WithSxProps) => (
  <Typography
    variant="body2"
    paragraph
    gutterBottom
    sx={
      sx || {
        marginBottom: 0,
      }
    }
    {...restProps}
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
}: HTMLAttributes<HTMLHeadingElement> & WithSxProps) => {
  const tagName = node?.tagName as Variant;

  return (
    <Typography variant={tagName} {...restProps}>
      {children}
    </Typography>
  );
};

export const MarkdownHeadingWithAnchorIconAndCopyButton = ({
  children,
  // Comes from ReactMarkdown
  // @ts-expect-error
  node,
  ...restProps
}: HTMLAttributesWithCopyButton & WithSxProps) => {
  const tagName = node?.tagName as Variant;

  return (
    <TypographyStyled variant={tagName} {...restProps}>
      <Link
        href={`#${node.properties.id}`}
        underline="hover"
        aria-label={`Link to ${node.properties.id}`}
        variant="caption"
        component="a"
      >
        {node.children[0].value}
      </Link>

      <Box component="span" className="copy-button-container">
        {children}
      </Box>
    </TypographyStyled>
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
  const mapping: Record<string, string> = {
    typescript: 'TypeScript',
    javascript: 'JavaScript',
  };

  if (language) {
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
              textTransform={language.length < 3 ? 'uppercase' : 'none'}
            >
              {language.length < 3 ? language : mapping[language] || language}
            </Typography>
          </Box>

          <Divider sx={{ mx: 0, my: 1 }} />

          <PreStyled>
            <CodeStyled>{children}</CodeStyled>
          </PreStyled>
        </CardContent>
      </Card>
    );
  }

  return (
    <OneLineSpanStyled>
      <CodeStyled>{children}</CodeStyled>
    </OneLineSpanStyled>
  );
};

export const MarkdownBlockquote = ({
  children,
  // Comes from ReactMarkdown
  // @ts-expect-error
  node: _,
  ...restProps
}: HTMLAttributes<HTMLQuoteElement>) => (
  <BlockquoteStyled {...restProps}>{children}</BlockquoteStyled>
);

export const MarkdownTable = ({
  children,
  // Comes from ReactMarkdown
  // @ts-expect-error
  node: _,
  sx,
  ...restProps
}: HTMLAttributes<HTMLTableElement> & WithSxProps) => (
  <TableContainer component={StyledPaper}>
    <Table sx={sx} {...restProps}>
      {children}
    </Table>
  </TableContainer>
);

export const MarkdownTableHead = ({
  children,
  // Comes from ReactMarkdown
  // @ts-expect-error
  node: _,
  ...restProps
}: ComponentProps<typeof TableHead>) => <TableHead {...restProps}>{children}</TableHead>;

export const MarkdownTableRow = ({
  children,
  // Comes from ReactMarkdown
  // @ts-expect-error
  node: _,
  sx,
  ...restProps
}: HTMLAttributes<HTMLTableRowElement> & WithSxProps) => (
  <TableRow sx={sx} {...restProps}>
    {children}
  </TableRow>
);

export const MarkdownTableRowStyled = ({
  children,
  // Comes from ReactMarkdown
  // @ts-expect-error
  node: _,
  sx,
  ...restProps
}: HTMLAttributes<HTMLTableRowElement> & WithSxProps) => (
  <StyledTableRow sx={sx} {...restProps}>
    {children}
  </StyledTableRow>
);

export const MarkdownTableBody = ({
  children,
  // Comes from ReactMarkdown
  // @ts-expect-error
  node: _,
  ...restProps
}: ComponentProps<typeof TableBody>) => <TableBody {...restProps}>{children}</TableBody>;

export const MarkdownTableCell = ({
  children,
  // Comes from ReactMarkdown
  // @ts-expect-error
  node: _,
  ...restProps
}: HTMLAttributes<HTMLTableCellElement>) => <TableCell {...restProps}>{children}</TableCell>;

export const MarkdownTableCellStyled = ({
  children,
  // Comes from ReactMarkdown
  // @ts-expect-error
  node: _,
  ...restProps
}: HTMLAttributes<HTMLTableCellElement>) => (
  <StyledTableCell {...restProps}>{children}</StyledTableCell>
);

import { styled } from '@mui/material/styles';

export const ListContainer = styled('ol')(({ theme }) => ({
  paddingLeft: 0,

  [theme.breakpoints.up('md')]: {
    paddingLeft: '40px',
  },
}));

export const CodeStyled = styled('code')`
  font-family: inherit;
`;

export const PreStyled = styled('pre')`
  font-family: 'Fira Code', monospace;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  unicode-bidi: isolate;
  display: block;
`;

export const OneLineSpanStyled = styled('span')(({ theme }) => ({
  fontFamily: 'Fira Code, monospace',
  padding: theme.spacing(0, 0.5),
  borderRadius: theme.shape.borderRadius,
  display: 'inline-block',
  verticalAlign: 'middle',
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.text.primary,
}));

export const BlockquoteStyled = styled('blockquote')(({ theme }) => ({
  padding: theme.spacing(2),
  borderLeft: `4px solid ${theme.palette.primary.contrastText}`,
  color: theme.palette.text.secondary,
}));

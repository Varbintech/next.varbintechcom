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

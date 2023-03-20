import { styled } from '@mui/material/styles';

export const PageContainer = styled('div')(({ theme }) => ({
  padding: '72px 0',
  backgroundColor: theme.palette.secondary.dark,

  [theme.breakpoints.up('lg')]: {
    padding: '124px 0',
  },
}));

export const PageLightContainer = styled(PageContainer)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const ImageContainer = styled('div')`
  width: 100%;

  & > div {
    position: unset !important;
  }

  img {
    display: inline-block;
    vertical-align: top;
    object-fit: contain;
    position: relative !important;
    width: 100% !important;
    height: unset !important;
    max-width: 586px;
  }
`;

export const ChipContainer = styled('div')`
  margin: 16px 0;

  .MuiChip-root {
    margin: 0 8px 8px 0;
  }
`;

export const TextContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    maxWidth: '40%',
  },
}));

export const ListContainer = styled('ul')`
  margin: 8px 0 24px;
  padding: 0 0 0 20px;
  line-height: 1.4em;

  li {
    margin-bottom: 8px;
  }
`;

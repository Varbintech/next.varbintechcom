import { styled } from '@mui/material/styles';

export const PageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  padding: '64px 0 24px',
  backgroundColor: theme.palette.background.paper,

  [theme.breakpoints.up('lg')]: {
    padding: '120px 0 154px',
  },

  '&.footer-secondary': {
    paddingBottom: '24px',
  },
}));

export const IconRightContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  right: '-60px',
  top: '45px',
  width: '121px',
  height: '121px',
  transform: 'rotate(60deg)',

  [theme.breakpoints.down('md')]: {
    top: 'auto',
    bottom: '65px',
  },
}));

export const FooterList = styled('ul')`
  margin: 20px 0 0;
  padding: 0;
  list-style-type: none;
`;

export const FooterListItem = styled('li')`
  padding: 4px 0;

  .footer-link {
    line-height: 1;
  }
`;

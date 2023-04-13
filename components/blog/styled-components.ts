import { styled } from '@mui/material/styles';

export const PageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: '0 0 64px',
  zIndex: 10,

  [theme.breakpoints.up('lg')]: {
    marginTop: '-50px',
    padding: '0 0 120px',
  },
}));

export const ImageContainer = styled('div')`
  display: flex;
  margin-bottom: 22px;

  .inner-wrapper {
    display: flex;
    flex: 1;
    overflow: hidden;
    max-height: 260px;
    border-radius: 8px;
  }

  img {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: top;
  }
`;

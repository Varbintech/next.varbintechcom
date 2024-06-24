import { styled } from '@mui/material/styles';

import { СubeContainerStyled } from '../../components/common/icon-rectangle-box/styled-components';

export const SectionContainerStyled = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  padding: '58px 0 30px',
  backgroundColor: theme.palette.primary.light,

  [theme.breakpoints.up('md')]: {
    paddingTop: '112px',
  },
}));

export const СubeContainerTechStyled = styled(СubeContainerStyled)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

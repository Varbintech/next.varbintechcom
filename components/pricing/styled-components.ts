import List from '@mui/material/List';
import { styled } from '@mui/material/styles';

import type { PlanType } from '../../models/common';

export const PageContainer = styled('div')(({ theme }) => ({
  paddingTop: '56px',
  backgroundColor: theme.palette.primary.dark,

  [theme.breakpoints.up('lg')]: {
    paddingTop: '112px',
  },
}));

export const PlanItemStyled = styled('div')(({ theme }) => ({
  padding: '34px 24px',
  borderRadius: '8px',
  background: theme.palette.background.paper,

  [theme.breakpoints.up('md')]: {
    minHeight: '100%',
  },
}));

export const PlanItemContainer = styled(PlanItemStyled)<{ flag: PlanType }>`
  position: relative;
  min-height: 540px;
  border-bottom: 8px solid #ba5a0d;
  overflow: hidden;

  ${({ flag }) => {
    if (flag === 'QUARTER') {
      return 'border-color: #862bab; box-shadow: 0 24px 32px rgba(0, 0, 0, 0.08);';
    } else if (flag === 'YEAR') {
      return 'border-color: #2e8540;';
    }
  }}

  .plan-title {
    margin-bottom: 30px;
    color: #ba5a0d;
    font-weight: 500;
    line-height: 1;
    text-transform: uppercase;

    ${({ flag }) => {
      if (flag === 'QUARTER') {
        return 'color: #862bab;';
      } else if (flag === 'YEAR') {
        return 'color: #2e8540;';
      }
    }}
  }
`;

export const BestChoiceContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '-1px',
  left: 0,
  padding: '7px 14px 7px 8px',
  color: theme.palette.background.paper,
  textTransform: 'uppercase',
  lineHeight: '1em',
  fontWeight: 500,
  background: '#862bab',
  transform: 'rotate(90deg) translate(39%, 110%)',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: '-1px',
    width: 0,
    height: 0,
    borderWidth: '15px 9px',
    borderColor: `transparent ${theme.palette.background.paper} transparent transparent`,
    borderStyle: 'solid',
  },
}));

export const ListStyled = styled(List)(({ theme }) => ({
  marginTop: '4px',
  padding: 0,

  '.MuiListItem-root': {
    padding: 0,
  },

  '.MuiListItemIcon-root': {
    minWidth: '26px',
    color: theme.palette.success.main,

    svg: {
      fontSize: '17px',
    },
  },

  '.MuiTypography-root': {
    fontWeight: 500,
  },
}));

export const CustomServicesContainer = styled(PlanItemStyled)(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
  paddingTop: '36px',
  paddingBottom: '40px',
  marginBottom: '-130px',
  borderBottom:
    theme.palette.mode === 'dark'
      ? `8px solid ${theme.palette.primary.light}`
      : `8px solid ${theme.palette.primary.main}`,
  boxShadow: '0 24px 32px rgba(0, 0, 0, 0.08)',

  [theme.breakpoints.up('lg')]: {
    paddingTop: '68px',
    paddingBottom: '60px',
  },
}));

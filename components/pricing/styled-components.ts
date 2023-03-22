import List from '@mui/material/List';
import { styled } from '@mui/material/styles';

import { PlanType } from '../../models/common';

export const PageContainer = styled('div')(({ theme }) => ({
  paddingTop: '56px',
  backgroundColor: theme.palette.primary.dark,

  [theme.breakpoints.up('lg')]: {
    paddingTop: '112px',
  },
}));

export const PlanItemStyled = styled('div')(({ theme }) => ({
  minHeight: '540px',
  background: theme.palette.background.paper,

  [theme.breakpoints.up('md')]: {
    minHeight: '100%',
  },
}));

export const PlanItemContainer = styled(PlanItemStyled)<{ flag: PlanType }>`
  position: relative;
  padding: 34px 24px;
  border-radius: 8px;
  border-bottom: 8px solid #f2994a;

  ${({ flag }) => {
    if (flag === 'QUARTER') {
      return 'border-color: #bb6bd9; box-shadow: 0 24px 32px rgba(0, 0, 0, 0.08);';
    } else if (flag === 'YEAR') {
      return 'border-color: #219653;';
    }
  }}

  .plan-title {
    margin-bottom: 30px;
    color: #f2994a;
    font-weight: 500;
    line-height: 1;
    text-transform: uppercase;

    ${({ flag }) => {
      if (flag === 'QUARTER') {
        return 'color: #bb6bd9;';
      } else if (flag === 'YEAR') {
        return 'color: #219653;';
      }
    }}
  }
`;

export const BestChoiceContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50px',
  left: '-34px',
  padding: '7px 14px 7px 8px',
  color: theme.palette.background.paper,
  textTransform: 'uppercase',
  lineHeight: '1em',
  fontWeight: 500,
  background: '#bb6bd9',
  transform: 'rotate(90deg)',

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

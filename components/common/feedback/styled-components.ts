import { alpha, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';

import QuoteIcon from '../icon-quote/QuoteIcon';

export const FeedbackContainer = styled('div')(({ theme }) => ({
  marginTop: '48px',
  padding: '42px 0 0',
  borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,

  [theme.breakpoints.up('lg')]: {
    marginTop: '100px',
    padding: '72px 0 0',
  },
}));

export const QuoterTypography = styled(Typography)`
  position: relative;
  margin: 0 auto 35px;
  padding: 0 20px;
  max-width: 870px;
  text-align: center;
`;

export const QuoteIconLeft = styled(QuoteIcon)`
  position: absolute;
  left: 0;
  font-size: 16px;
`;

export const QuoteIconRight = styled(QuoteIcon)`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 16px;
`;

export const LinkContainer = styled(Link)`
  display: inline-block;
  vertical-align: bottom;
  height: 26px;
`;

export const AvatarContainer = styled(Avatar)`
  width: 100%;

  & > div {
    position: unset !important;
  }

  img {
    object-fit: contain;
    position: relative !important;
    width: 100% !important;
    height: unset !important;
  }
`;

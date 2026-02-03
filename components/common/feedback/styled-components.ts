import { alpha, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';

import QuoteIcon from '../icon-quote/QuoteIcon';

interface QuoterTypographyProps {
  isBlogPage?: boolean;
}

export const FeedbackContainer = styled('div')(({ theme }) => ({
  padding: '42px 0 0',
  borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,

  [theme.breakpoints.up('lg')]: {
    padding: '72px 0 0',
  },
}));

export const FeedbackContainer2 = styled('div', {
  shouldForwardProp: prop => prop !== 'isBlogPage',
})<QuoterTypographyProps>(({ isBlogPage, theme }) => ({
  margin: isBlogPage ? '0 0 24px' : '0 0 42px',
  padding: '0 0 42px',
  borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,

  [theme.breakpoints.up('lg')]: {
    margin: isBlogPage ? '0 0 24px' : '0 0 72px',
    padding: '0 0 72px',
    backgroundColor: theme.palette.primary.light,
  },
}));

export const QuoterTypography = styled(Typography, {
  shouldForwardProp: prop => prop !== 'isBlogPage',
})<QuoterTypographyProps>(({ isBlogPage }) => ({
  position: 'relative',
  margin: '0 auto 35px',
  padding: '0 20px',
  maxWidth: isBlogPage ? '670px' : '870px',
  textAlign: 'center',
}));

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

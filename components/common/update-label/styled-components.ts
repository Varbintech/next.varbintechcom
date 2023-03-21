import { styled } from '@mui/material/styles';

export const UpdateLabelContainer = styled('span')(({ theme }) => ({
  display: 'inline-block',
  marginRight: '16px',
  padding: '8px 12px',
  textTransform: 'uppercase',
  lineHeight: 1,
  color: theme.palette.success.main,
  border: `1px solid ${theme.palette.success.main}`,
  borderRadius: '4px',
}));

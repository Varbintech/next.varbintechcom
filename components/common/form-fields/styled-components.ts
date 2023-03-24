import { styled } from '@mui/material/styles';
import MUITextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';

export const HelperText = styled('span')<{ error: boolean }>`
  display: inline-block;
  height: ${({ error }) => (error ? 'auto' : 0)};
`;

export const StyledFormHelperText = styled(FormHelperText)<{ error: boolean }>`
  height: ${({ error }) => (error ? 'auto' : 0)};
`;

export const StyledMUITextField = styled(MUITextField)`
  & .MuiFormHelperText-root {
    height: ${({ error }) => (error ? 'auto' : 0)};
    line-height: ${({ error }) => (error ? 'auto' : 0)};
  }
`;

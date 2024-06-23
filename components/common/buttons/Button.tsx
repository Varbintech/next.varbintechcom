import MUIButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';
import type { LinkProps as MuiLinkProps } from '@mui/material/Link';

export type ButtonProps = MuiButtonProps & Pick<MuiLinkProps, 'target' | 'rel'>;

const Button = (props: ButtonProps) => {
  const { children, startIcon, variant, size, onClick, ...restProps } = props;

  return (
    <MUIButton
      {...restProps}
      variant={variant || 'contained'}
      size={size || 'medium'}
      startIcon={startIcon || null}
      onClick={onClick}
    >
      {children}
    </MUIButton>
  );
};

export default Button;

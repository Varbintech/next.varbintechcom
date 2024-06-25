import { styled } from '@mui/material/styles';

import Button, { type ButtonProps } from '../buttons/Button';

interface ChipTechIconProps {
  svgString: string;
}

const SvgIconContainer = styled('span')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  svg {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;

export const ChipTechIcon = ({ svgString }: ChipTechIconProps) => {
  return (
    <SvgIconContainer
      dangerouslySetInnerHTML={{ __html: svgString as string }}
      role="img"
      aria-hidden="true"
    />
  );
};

const ChipTech = (props: ButtonProps) => {
  const { href, variant, children, startIcon, ...restProps } = props;

  return (
    <Button {...restProps} href={href} variant={variant || 'outlined'} startIcon={startIcon}>
      {children}
    </Button>
  );
};

export default ChipTech;

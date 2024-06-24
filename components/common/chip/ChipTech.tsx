import SvgIcon, { type SvgIconProps } from '@mui/material/SvgIcon';
import { styled } from '@mui/material/styles';

import Button, { type ButtonProps } from '../buttons/Button';

export const ChipTechIcon = ({
  children: _,
  dangerouslySetInnerHTML,
  ...restProps
}: SvgIconProps) => {
  return <SvgIcon {...restProps} dangerouslySetInnerHTML={dangerouslySetInnerHTML}></SvgIcon>;
};

const SvgIconContainer = styled('span')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;

const ChipTech = (props: ButtonProps & { svgString?: string }) => {
  const { href, variant, children, svgString, ...restProps } = props;

  const SvgIcon = () => {
    return (
      <SvgIconContainer
        dangerouslySetInnerHTML={{ __html: svgString as string }}
        role="img"
        aria-hidden="true"
      />
    );
  };

  return (
    <Button {...restProps} href={href} variant={variant || 'outlined'} startIcon={<SvgIcon />}>
      {children}
    </Button>
  );
};

export default ChipTech;

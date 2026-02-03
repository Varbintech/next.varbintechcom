import { styled } from '@mui/material/styles';

import { CldImage, type CldImageProps } from 'next-cloudinary';

import Box, { type BoxProps } from '@mui/material/Box';

const CldImageStyled = styled(CldImage)({
  transform: 'translate3d(0, 0, 0)',
  borderRadius: '0.25rem',
  maxWidth: '100%',
  height: 'auto',
  transitionDuration: '150ms',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionProperty: 'transform',
  willChange: 'auto',
});

export const ImageContainer = ({ children, sx, ...restProps }: BoxProps) => {
  const defaultSx: BoxProps['sx'] = {
    width: '100%',
  };

  const newSx = {
    ...defaultSx,
    ...sx,
  };

  return (
    <Box sx={newSx} {...restProps}>
      {children}
    </Box>
  );
};

export const Image = (props: CldImageProps) => {
  return <CldImageStyled {...props} />;
};

import type { FC } from 'react';

import Container from '@mui/material/Container';

import type { ProjectImage } from '../../../models';

import { ImageContainer } from './styled-components';

interface ImageWrapperComponentProps {
  data: ProjectImage;
}

const ImageWrapperComponent: FC<ImageWrapperComponentProps> = ({ data }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{ marginTop: { xs: '-90px', md: '-160px' }, marginBottom: { xs: '42px', md: '112px' } }}
    >
      <ImageContainer>
        <span className="inner-wrapper">
          {/* eslint-disable @next/next/no-img-element */}
          <img
            loading="lazy"
            sizes={data.sizes}
            srcSet={data.srcSet}
            alt={data.name}
            width={data.width}
            height={data.height}
          />
        </span>
      </ImageContainer>
    </Container>
  );
};

export default ImageWrapperComponent;

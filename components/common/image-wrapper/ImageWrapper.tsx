import type { FC } from 'react';

import type { ProjectImage } from '../../../models';

import { ImageContainer } from './styled-components';

interface ImageWrapperComponentProps {
  data: ProjectImage;
  largeWithBorder?: boolean;
  mediumSize?: boolean;
  mediumSizeColumn?: boolean;
  mediumSizeAloneColumn?: boolean;
  smallSize?: boolean;
}

const ImageWrapperComponent: FC<ImageWrapperComponentProps> = props => {
  const { data, largeWithBorder, mediumSize, mediumSizeColumn, mediumSizeAloneColumn, smallSize } =
    props;

  const small = smallSize ? 'small-size' : '';
  const medium = mediumSize ? 'medium-size' : '';
  const mediumAloneColumn = mediumSizeAloneColumn ? 'medium-size-alone-column' : '';
  const mediumColumn = mediumSizeColumn ? 'medium-size-column' : '';
  const largeBorder = largeWithBorder ? 'large-with-border' : '';

  return (
    <ImageContainer
      className={`${small} ${medium} ${mediumColumn} ${mediumAloneColumn} ${largeBorder}`}
    >
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
  );
};

export default ImageWrapperComponent;

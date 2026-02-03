import Image from 'next/image';

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

const ImageWrapperComponent = (props: ImageWrapperComponentProps) => {
  const { data, largeWithBorder, mediumSize, mediumSizeColumn, mediumSizeAloneColumn, smallSize } =
    props;

  const small = smallSize ? 'small-size' : '';
  const medium = mediumSize ? 'medium-size' : '';
  const mediumAloneColumn = mediumSizeAloneColumn ? 'medium-size-alone-column' : '';
  const mediumColumn = mediumSizeColumn ? 'medium-size-column' : '';
  const largeBorder = largeWithBorder ? 'large-with-border' : '';

  const widthHeightProps =
    data.width && data.height ? { width: data.width, height: data.height } : {};

  const src =
    data.sizes && data.srcSet
      ? {
          src: data.src,
          srcSet: data.srcSet,
        }
      : {
          src: data.src,
        };

  return (
    <ImageContainer
      className={`${small} ${medium} ${mediumColumn} ${mediumAloneColumn} ${largeBorder}`}
    >
      <span className="inner-wrapper">
        <Image alt={data.alt || data.name} {...src} {...widthHeightProps} />
      </span>
    </ImageContainer>
  );
};

export default ImageWrapperComponent;

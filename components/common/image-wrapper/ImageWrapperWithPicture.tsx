import Image from 'next/image';

import type { HeroImageAttribute } from '../../../models';

import { ImageContainer } from './styled-components';

interface ImageWrapperWithPictureComponentProps {
  images: Array<{
    id: number;
    attributes: HeroImageAttribute;
  }>;
  mainImage: {
    id: number;
    attributes: HeroImageAttribute;
  };
  largeWithBorder?: boolean;
  mediumSize?: boolean;
  mediumSizeColumn?: boolean;
  mediumSizeAloneColumn?: boolean;
  smallSize?: boolean;
}

const ImageWrapperWithPictureComponent = (props: ImageWrapperWithPictureComponentProps) => {
  const {
    images,
    // mainImage,
    largeWithBorder,
    mediumSize,
    mediumSizeColumn,
    mediumSizeAloneColumn,
    smallSize,
  } = props;

  const small = smallSize ? 'small-size' : '';
  const medium = mediumSize ? 'medium-size' : '';
  const mediumAloneColumn = mediumSizeAloneColumn ? 'medium-size-alone-column' : '';
  const mediumColumn = mediumSizeColumn ? 'medium-size-column' : '';
  const largeBorder = largeWithBorder ? 'large-with-border' : '';

  return (
    <ImageContainer
      className={`${small} ${medium} ${mediumColumn} ${mediumAloneColumn} ${largeBorder}`}
    >
      <Image
        src={images[0].attributes.url}
        alt={images[0].attributes.alternativeText}
        width={images[0].attributes.width}
        height={images[0].attributes.height}
      />
      {/* <picture className="inner-wrapper">
        {images.map((image, index) => (
          <source
            key={`${image.id}-${index}`}
            media={`(min-width: ${image.attributes.width}px)`}
            srcSet={image.attributes.url}
          />
        ))}

        <img src={mainImage.attributes.url} alt={mainImage.attributes.alternativeText} />
      </picture> */}
    </ImageContainer>
  );
};

export default ImageWrapperWithPictureComponent;

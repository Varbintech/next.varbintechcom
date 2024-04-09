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

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

// https://github.com/vercel/next.js/blob/canary/examples/image-component/app/color/page.tsx
const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

const ImageWrapperWithPictureComponent = (props: ImageWrapperWithPictureComponentProps) => {
  const {
    images,
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
      <div className="inner-wrapper">
        <Image
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={rgbDataURL(194, 194, 194)}
          alt={images[0].attributes.alternativeText}
          src={images[0].attributes.url}
          width={images[0].attributes.width}
          height={images[0].attributes.height}
        />
      </div>
    </ImageContainer>
  );
};

export default ImageWrapperWithPictureComponent;

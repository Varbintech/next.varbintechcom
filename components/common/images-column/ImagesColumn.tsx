import type { FC } from 'react';

import Stack from '@mui/material/Stack';

import type { ProjectImageDetails } from '../../../models';

import { ImageContainer } from './styled-components';

interface ImagesColumnProps {
  data: ProjectImageDetails;
}

const ImagesColumn: FC<ImagesColumnProps> = ({ data }) => {
  const imageAlone = data.imageSection.length === 1;

  return (
    <Stack
      direction={{ xs: 'column', md: imageAlone ? 'column' : 'row' }}
      spacing={{ xs: '24px', md: '30px' }}
      sx={{ marginBottom: { xs: '60px', md: '112px' } }}
    >
      {data.imageSection.map((item, index) => {
        return (
          <ImageContainer key={index} className={imageAlone ? 'image-alone' : ''}>
            <span className="inner-wrapper">
              {/* eslint-disable @next/next/no-img-element */}
              <img
                loading="lazy"
                sizes={item.sizes}
                srcSet={item.srcSet}
                alt={item.name}
                width={item.width}
                height={item.height}
              />
            </span>
          </ImageContainer>
        );
      })}
    </Stack>
  );
};

export default ImagesColumn;

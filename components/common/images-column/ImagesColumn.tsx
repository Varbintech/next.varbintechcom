import type { FC } from 'react';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import type { ProjectImageDetails } from '../../../models';

import { ImageContainer } from './styled-components';

interface ImagesColumnProps {
  data: ProjectImageDetails;
}

const ImagesColumn: FC<ImagesColumnProps> = ({ data }) => {
  return (
    <Container maxWidth="lg" sx={{ marginBottom: { xs: '60px', md: '112px' } }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: '24px', md: '30px' }}>
        {data.imageSection.map((item, index) => {
          return (
            <ImageContainer key={index}>
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
    </Container>
  );
};

export default ImagesColumn;

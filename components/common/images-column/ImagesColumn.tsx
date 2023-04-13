import type { FC } from 'react';

import Stack from '@mui/material/Stack';

import type { ProjectImageDetails } from '../../../models';

import ImageWrapperComponent from '../image-wrapper/ImageWrapper';

interface ImagesColumnProps {
  data: ProjectImageDetails;
}

const ImagesColumn: FC<ImagesColumnProps> = ({ data }) => {
  const aloneColumn = data.imageSection.length === 1;

  return (
    <Stack
      direction={{ xs: 'column', md: aloneColumn ? 'column' : 'row' }}
      spacing={{ xs: '24px', md: '30px' }}
      sx={{ marginBottom: { xs: '60px', md: aloneColumn ? '60px' : '112px' } }}
    >
      {data.imageSection.map((item, index) => {
        return (
          <ImageWrapperComponent
            key={index}
            data={item}
            mediumSize
            mediumSizeAloneColumn={aloneColumn}
          />
        );
      })}
    </Stack>
  );
};

export default ImagesColumn;

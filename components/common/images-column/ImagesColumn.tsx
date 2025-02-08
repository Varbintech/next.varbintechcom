import Stack from '@mui/material/Stack';

import type { ProjectImageDetails } from '../../../models';

import ImageWrapperComponent from '../image-wrapper/ImageWrapper';

interface ImagesColumnProps {
  data: ProjectImageDetails;
}

const ImagesColumn = ({ data }: ImagesColumnProps) => {
  const aloneColumn = data.imageSection.length === 1;

  return (
    <Stack
      direction={{ xs: 'column', md: aloneColumn ? 'column' : 'row' }}
      spacing={{ xs: '24px', md: '30px' }}
      sx={{ marginBottom: { xs: '20px', md: aloneColumn ? '30px' : '50px' } }}
      flexWrap={aloneColumn ? 'wrap' : 'initial'}
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

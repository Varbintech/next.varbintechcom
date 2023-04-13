import type { FC } from 'react';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import type { ProjectImageDetails } from '../../../models';

import ImageWrapperComponent from '../image-wrapper/ImageWrapper';

interface ImagesColumnProps {
  data: ProjectImageDetails;
}

const ImagesColumn: FC<ImagesColumnProps> = ({ data }) => {
  return (
    <Container maxWidth="lg" sx={{ marginBottom: { xs: '60px', md: '112px' } }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: '24px', md: '30px' }}>
        {data.imageSection.map((item, index) => {
          return <ImageWrapperComponent key={index} data={item} mediumSize />;
        })}
      </Stack>
    </Container>
  );
};

export default ImagesColumn;

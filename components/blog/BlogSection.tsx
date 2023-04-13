import type { FC } from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import type { BlogItem } from '../../models';

import Link from '../common/link/Link';
import ImageWrapperComponent from '../common/image-wrapper/ImageWrapper';

interface BlogSectionProps {
  data: BlogItem;
}

const BlogSection: FC<BlogSectionProps> = ({ data }) => {
  const { id, blogImage, blogCategoty, blogDate, blogTitle } = data;

  return (
    <Stack direction="column">
      <ImageWrapperComponent data={blogImage} mediumSizeColumn />

      <Stack direction="row" alignItems="center" marginBottom={1} marginTop="22px">
        <Typography lineHeight={1}>{blogCategoty}</Typography>
        <FiberManualRecordIcon sx={{ fontSize: '6px', margin: '0 8px' }} />
        <Typography variant="body2" lineHeight={1}>
          {blogDate}
        </Typography>
      </Stack>

      <Link href={`/blog/${id}`} variant="h5" underline="hover">
        {blogTitle}
      </Link>
    </Stack>
  );
};

export default BlogSection;

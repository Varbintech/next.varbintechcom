import type { FC } from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import type { BlogItem } from '../../models';

import Link from '../common/link/Link';

import { ImageContainer } from './styled-components';

interface BlogSectionProps {
  data: BlogItem;
  id: number;
}

const BlogSection: FC<BlogSectionProps> = ({ data, id }) => {
  const { blogImage, blogCategoty, blogDate, blogTitle } = data;

  return (
    <Stack direction="column">
      <ImageContainer>
        <span className="inner-wrapper">
          {/* eslint-disable @next/next/no-img-element */}
          <img
            loading="lazy"
            sizes={blogImage.sizes}
            srcSet={blogImage.srcSet}
            alt={blogImage.name}
            width={blogImage.width}
            height={blogImage.height}
          />
        </span>
      </ImageContainer>

      <Stack direction="row" alignItems="center" marginBottom={1}>
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

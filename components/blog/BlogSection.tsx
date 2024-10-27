import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import type { BlogItemStrapi } from '../../models';

import Link from '../common/link/Link';
import ImageWrapperComponent from '../common/image-wrapper/ImageWrapper';

interface BlogSectionProps {
  data: BlogItemStrapi;
}

const BlogSection = ({ data }: BlogSectionProps) => {
  const {
    attributes: { publishedAt, listImage, blogTags, title, slug },
  } = data;

  return (
    <Stack direction="column">
      <Link href={`/blog/${slug}`} underline="none">
        <ImageWrapperComponent
          data={{
            src: listImage.data[0].attributes.url,
            name: listImage.data[0].attributes.name,
            width: listImage.data[0].attributes.width,
            height: listImage.data[0].attributes.height,
            alt: listImage.data[0].attributes.alternativeText,
          }}
          mediumSizeColumn
        />
      </Link>

      <Stack direction="row" alignItems="center" marginBottom={1} marginTop="22px">
        <Typography lineHeight={1}>{blogTags.data[0].attributes.title}</Typography>

        <FiberManualRecordIcon sx={{ fontSize: '6px', margin: '0 8px' }} />

        <Typography variant="body2" lineHeight={1}>
          {publishedAt}
        </Typography>
      </Stack>

      <Link href={`/blog/${slug}`} variant="h5" underline="hover">
        {title}
      </Link>
    </Stack>
  );
};

export default BlogSection;

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import type { BlogItemStrapi } from '../../models';

import Link from '../common/link/Link';
import ImageWrapperComponent from '../common/image-wrapper/ImageWrapper';

interface RelatedBlogPostProps {
  data: BlogItemStrapi;
}

const RelatedBlogPost = ({ data }: RelatedBlogPostProps) => {
  const {
    attributes: { publishedAt, heroImage, blogTags, title, slug },
  } = data;

  return (
    <Stack direction="column">
      <Link href={`/blog/${slug}`} underline="none">
        <ImageWrapperComponent
          data={{
            src: heroImage.data[0].attributes.url,
            name: heroImage.data[0].attributes.name,
            width: heroImage.data[0].attributes.width,
            height: heroImage.data[0].attributes.height,
            alt: heroImage.data[0].attributes.alternativeText,
          }}
          mediumSizeColumn
        />
      </Link>

      <Stack direction="row" alignItems="center" marginBottom={1} marginTop="22px">
        <Typography lineHeight={1}>{blogTags.data[0].attributes.title}</Typography>

        <FiberManualRecordIcon sx={{ fontSize: '6px', margin: '0 8px' }} />

        <Typography variant="body2" lineHeight={1}>
          {new Date(publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Typography>
      </Stack>

      <Link href={`/blog/${slug}`} variant="h5" underline="hover">
        {title}
      </Link>
    </Stack>
  );
};

export default RelatedBlogPost;

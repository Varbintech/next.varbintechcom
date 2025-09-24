import Image from 'next/image';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import type { ProjectImage, ProjectTag, SocialIcon } from '../../models';

import ChipGroup from '../common/chip/ChipGroup';
import SocialIcons from '../common/social-icons/SocialIcons';
import SummarizeButtons from '../common/summarize-buttons/SummarizeButtons';

import { HeroDetailsBgImage, HeroDetailsStyled } from './styled-components';

interface HeroDetailsProps {
  title: string;
  projectTags: Array<ProjectTag>;
  projectSocialIcons: Array<SocialIcon>;
  services: string;
  centered?: boolean;
  bgColored?: boolean;
  postAuthor?: string;
  postDate?: string;
  postAuthorPhoto?: ProjectImage;
  postBgImage?: string;
  isDarkTheme?: boolean;
  slug?: string;
}

const HeroDetails = (props: HeroDetailsProps) => {
  const {
    title,
    projectTags,
    projectSocialIcons,
    centered,
    bgColored,
    postAuthor,
    postDate,
    postAuthorPhoto,
    postBgImage,
    isDarkTheme,
    services,
    slug,
  } = props;

  return (
    <HeroDetailsBgImage imageUrl={postBgImage} className={isDarkTheme ? 'bg-dark-theme' : ''}>
      <HeroDetailsStyled className={bgColored ? 'bg-colored' : ''}>
        <Container maxWidth="lg" className={centered ? 'centered' : ''}>
          <Typography
            variant="h1"
            marginBottom="24px"
            sx={{ fontSize: { xs: '32px', md: '56px', lineHeight: 1.2 } }}
          >
            {title}
          </Typography>

          {services ? (
            <Typography
              variant="body2"
              component="h2"
              align="center"
              mb={{ xs: '28px', md: '38px' }}
              fontSize={{ xs: '18px', md: '28px' }}
            >
              Services: {services}
            </Typography>
          ) : null}

          <Box marginBottom="24px">
            <ChipGroup data={projectTags} />
          </Box>

          {postAuthor ? (
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              marginBottom={{ xs: '32px', md: 0 }}
            >
              <Avatar
                sx={{
                  width: '50px',
                  height: '50px',
                  '> img': {
                    width: '100%',
                    height: '100%',
                  },
                }}
              >
                {postAuthorPhoto ? (
                  <Image
                    alt={`${postAuthor} photo`}
                    src={postAuthorPhoto.src}
                    width={postAuthorPhoto.width}
                    height={postAuthorPhoto.height}
                  />
                ) : null}
              </Avatar>

              <div>
                <Typography variant="caption" component="div">
                  By {postAuthor}
                </Typography>

                <Typography variant="overline">{postDate}</Typography>
              </div>
            </Stack>
          ) : null}

          <Box sx={{ display: { xs: 'block', md: postAuthor ? 'none' : 'block' } }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} alignItems="center" gap={2}>
              <Box
                flexGrow={{
                  xs: 0,
                  sm: 1,
                }}
                justifyContent={{ xs: 'flex-start', sm: 'center' }}
                display="flex"
                alignItems="center"
                flexDirection="column"
              >
                <Typography variant="h4" component="p" marginBottom={2} textAlign="left">
                  Share on:
                </Typography>

                <Box display="flex">
                  <SocialIcons data={projectSocialIcons} />
                </Box>
              </Box>

              <Box flexGrow={{ xs: 0, sm: 1 }} margin={'0 !important'}>
                <SummarizeButtons pageUrl={slug || ''} pageTitle={title} />
              </Box>
            </Stack>
          </Box>
        </Container>
      </HeroDetailsStyled>
    </HeroDetailsBgImage>
  );
};

export default HeroDetails;

import Image from 'next/image';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import type { ProjectImage, ProjectTag, SocialIcon } from '../../models';

import ChipGroup from '../common/chip/ChipGroup';
import SocialIcons from '../common/social-icons/SocialIcons';

import { HeroDetailsBgImage, HeroDetailsStyled } from './styled-components';

interface HeroDetailsProps {
  title: string;
  projectTags: Array<ProjectTag>;
  projectSocialIcons: Array<SocialIcon>;
  centered?: boolean;
  bgColored?: boolean;
  postAuthor?: string;
  postDate?: string;
  postAuthorPhoto?: ProjectImage;
  postBgImage?: string;
  isDarkTheme?: boolean;
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
              <Avatar sx={{ width: 50, height: 50 }}>
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
            <SocialIcons data={projectSocialIcons} />
          </Box>
        </Container>
      </HeroDetailsStyled>
    </HeroDetailsBgImage>
  );
};

export default HeroDetails;

import type { FC } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import type { ProjectTag, SocialIcon } from '../../models';

import ChipGroup from '../common/chip/ChipGroup';
import SocialIcons from '../common/social-icons/SocialIcons';

import { HeroDetailsStyled } from './styled-components';

interface HeroDetailsProps {
  title: string;
  projectTags: Array<ProjectTag>;
  projectSocialIcons: Array<SocialIcon>;
  centered?: boolean;
  bgColored?: boolean;
}

const HeroDetails: FC<HeroDetailsProps> = props => {
  const { title, projectTags, projectSocialIcons, centered, bgColored } = props;

  return (
    <HeroDetailsStyled className={bgColored ? 'bg-colored' : ''}>
      <Container maxWidth="lg" className={centered ? 'centered' : ''}>
        <Typography variant="h1" marginBottom="24px" sx={{ fontSize: { xs: '32px', md: '56px' } }}>
          {title}
        </Typography>

        <Box marginBottom={{ xs: '24px', md: '32px' }}>
          <ChipGroup data={projectTags} />
        </Box>

        <SocialIcons data={projectSocialIcons} />
      </Container>
    </HeroDetailsStyled>
  );
};

export default HeroDetails;

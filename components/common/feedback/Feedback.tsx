import type { FC } from 'react';

import Image from 'next/image';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import {
  FeedbackContainer,
  QuoterTypography,
  AvatarContainer,
  QuoteIconLeft,
  QuoteIconRight,
  LinkContainer,
} from './styled-components';

interface FeedbackProps {
  text: string;
  name: string;
  src: string;
  company: string;
  companyLink?: string;
  companyLinkHref?: string;
}

const Feedback: FC<FeedbackProps> = props => {
  const { text, name, src, company, companyLink, companyLinkHref } = props;

  return (
    <FeedbackContainer>
      <QuoterTypography variant="h6" sx={{ fontSize: { xs: '16px', md: '20px' } }}>
        <QuoteIconLeft />
        {text}
        <QuoteIconRight />
      </QuoterTypography>

      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
        <AvatarContainer sx={{ width: { xs: 40, md: 66 }, height: { xs: 40, md: 66 } }}>
          <Image src={src} alt={name} fill />
        </AvatarContainer>
        <div>
          <Typography variant="caption" component="div" marginBottom={0.5}>
            {name}{' '}
            <LinkContainer href="#" underline="none" target="_blank">
              <LinkedInIcon sx={{ fontSize: '26px' }} />
            </LinkContainer>
          </Typography>
          <Typography variant="overline">
            {company}{' '}
            {companyLink && (
              <Link href={companyLinkHref} underline="none">
                {companyLink}
              </Link>
            )}
          </Typography>
        </div>
      </Stack>
    </FeedbackContainer>
  );
};

export default Feedback;

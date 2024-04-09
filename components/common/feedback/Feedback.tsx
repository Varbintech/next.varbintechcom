import type { ReactNode } from 'react';

import Image, { type StaticImageData } from 'next/image';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import type { ProjectFeedback } from '../../../models';

import filipRogaczewskiPhoto from '../../../public/filiprogaczewski.webp';
import geneFooPhoto from '../../../public/genefoo.webp';

const assets: Record<string, StaticImageData> = {
  filipRogaczewskiPhoto,
  geneFooPhoto,
};

import {
  FeedbackContainer,
  FeedbackContainer2 as FeedbackContainer2Styled,
  QuoterTypography,
  AvatarContainer,
  QuoteIconLeft,
  QuoteIconRight,
  LinkContainer,
} from './styled-components';

type FeedbackProps = ProjectFeedback & { useAssets?: boolean };

interface FeedbackContainer2Props {
  children: ReactNode;
}

export const FeedbackContainer2 = ({ children }: FeedbackContainer2Props) => (
  <FeedbackContainer2Styled>{children}</FeedbackContainer2Styled>
);

const Feedback = (props: FeedbackProps) => {
  const { text, name, image, company, linkedInLink, companyName, companyLinkHref, useAssets } =
    props;

  return (
    <FeedbackContainer>
      <QuoterTypography variant="body1" sx={{ fontSize: { xs: '16px', md: '20px' } }}>
        <QuoteIconLeft />
        {text}
        <QuoteIconRight />
      </QuoterTypography>

      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
        <AvatarContainer sx={{ width: { xs: 40, md: 66 }, height: { xs: 40, md: 66 } }}>
          {image ? (
            <Image
              alt={image.alt || `${name} photo`}
              src={useAssets ? assets[image.name] : image.src}
              width={image.width}
              height={image.height}
            />
          ) : null}
        </AvatarContainer>

        <div>
          <Typography variant="caption" component="div" marginBottom={0.5}>
            {name}&nbsp;
            <LinkContainer
              href={linkedInLink}
              underline="none"
              target="_blank"
              rel="noreferrer"
              aria-label={`Read more about ${name}`}
            >
              <LinkedInIcon sx={{ fontSize: '26px' }} />
            </LinkContainer>
          </Typography>

          <Typography variant="overline">
            {company ? `${company} ` : ''}
            {companyName && (
              <Link
                href={companyLinkHref}
                target="_blank"
                underline={companyLinkHref ? 'hover' : 'none'}
                rel="noreferrer"
                aria-label={`Read more about ${companyName}`}
              >
                {companyName}
              </Link>
            )}
          </Typography>
        </div>
      </Stack>
    </FeedbackContainer>
  );
};

export default Feedback;

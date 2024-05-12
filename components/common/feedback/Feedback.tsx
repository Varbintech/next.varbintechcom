import type { ReactNode } from 'react';

import Image from 'next/image';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import type { ProjectFeedback, Quote } from '../../../models';

import {
  FeedbackContainer,
  FeedbackContainer2 as FeedbackContainer2Styled,
  QuoterTypography,
  AvatarContainer,
  QuoteIconLeft,
  QuoteIconRight,
  LinkContainer,
} from './styled-components';

type FeedbackProps = ProjectFeedback;

interface FeedbackContainer2Props {
  children: ReactNode;
}

type QuotesData = {
  id: number;
  attributes: Quote;
};

export const convertStrapiQuoteToFeedback = ({ attributes }: QuotesData): ProjectFeedback => ({
  text: attributes.content,
  name: attributes.author,
  image: {
    src: attributes.authorPhoto.data.attributes.url,
    width: attributes.authorPhoto.data.attributes.width,
    height: attributes.authorPhoto.data.attributes.height,
    name: '',
    alt: attributes.authorPhoto.data.attributes.alternativeText,
  },
  company: attributes.authorTitle,
  companyName: attributes.companyName,
  linkedInLink: attributes.authorLiLink,
  companyLinkHref: attributes.companyLink,
});

export const FeedbackContainer2 = ({ children }: FeedbackContainer2Props) => (
  <FeedbackContainer2Styled>{children}</FeedbackContainer2Styled>
);

const Feedback = (props: FeedbackProps) => {
  const { text, name, image, company, linkedInLink, companyName, companyLinkHref } = props;

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
              src={image.src}
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

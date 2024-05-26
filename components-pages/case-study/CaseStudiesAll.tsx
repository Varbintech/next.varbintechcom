import dynamic from 'next/dynamic';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import RectangleIcon from '../../components/common/icon-rectangle/RectangleIcon';
import ChipGroup from '../../components/common/chip/ChipGroup';
import ButtonLink from '../../components/common/buttons/ButtonLink';
import Feedback, { convertStrapiQuoteToFeedback } from '../../components/common/feedback/Feedback';
import Link from '../../components/common/link/Link';

import { useGenerateEventGa } from '../../hooks/use-generate-event-ga';

import {
  PageContainer,
  ImageContainer,
  ChipContainer,
  TextContainer,
  ImageWrapper,
  IconContainer,
  IconLeftContainer,
  ListContainer,
} from '../../components/case-studies/styled-components';
const ImageWrapperWithPictureDynamic = dynamic(
  () => import('../../components/common/image-wrapper/ImageWrapperWithPicture'),
  {
    loading: () => <p>Loading...</p>,
  },
);

import type { CaseStudyAllAttributes } from '../../models';

interface CaseStudiesAllProps {
  data: Array<CaseStudyAllAttributes>;
  parentId?: string;
}

const CaseStudiesAll = ({ data, parentId }: CaseStudiesAllProps) => {
  const handleImageLinkClick = useGenerateEventGa('link');
  const handleTitleLinkClick = useGenerateEventGa('link');
  const handleReadFullLinkClick = useGenerateEventGa('link');

  return (
    <>
      {data.map(({ id, attributes }, caseStudyIndex) => {
        const direction = caseStudyIndex % 2 === 0 ? 'row-reverse' : 'row';

        return (
          <PageContainer className={direction === 'row' ? 'lightBackground' : ''} key={id}>
            <Container maxWidth="lg" component="span">
              <Stack
                component="span"
                direction={{ xs: 'column', md: direction }}
                spacing={{ xs: '35px', lg: '95px' }}
                marginBottom={{ xs: '48px', lg: '60px' }}
              >
                <ImageContainer>
                  <ImageWrapper>
                    <Link
                      className="inner-wrapper"
                      href={`/case-studies/${attributes.slug}`}
                      id={`linkCaseStudyImage${parentId ? `-${parentId}-` : '-'}${attributes.slug}`}
                      aria-label={`Link to case study page: ${attributes.title}`}
                      onClick={handleImageLinkClick}
                    >
                      <ImageWrapperWithPictureDynamic
                        images={attributes.heroImage.images}
                        mainImage={attributes.heroImage.mainImage}
                      />
                    </Link>

                    {direction === 'row' ? (
                      <IconLeftContainer>
                        <RectangleIcon />
                      </IconLeftContainer>
                    ) : (
                      <IconContainer>
                        <RectangleIcon />
                      </IconContainer>
                    )}
                  </ImageWrapper>
                </ImageContainer>

                <TextContainer>
                  <Typography variant="h2" marginBottom={1}>
                    <Link
                      underline="always"
                      variant="h2"
                      href={`/case-studies/${attributes.slug}`}
                      sx={{ fontSize: { xs: '24px', lg: '32px' } }}
                      id={`linkCaseStudyTitle${parentId ? `-${parentId}-` : '-'}${attributes.slug}`}
                      aria-label={`Link to case study page: ${attributes.title}`}
                      onClick={handleTitleLinkClick}
                    >
                      {attributes.title}
                    </Link>
                  </Typography>

                  <Typography gutterBottom>{attributes.description}</Typography>

                  <Typography variant="caption" component="h3" gutterBottom>
                    Services:
                  </Typography>

                  <ChipContainer>
                    <ChipGroup data={attributes.servicesAsArray} />
                  </ChipContainer>

                  <Typography variant="caption" component="h3" gutterBottom>
                    Industry:
                  </Typography>

                  <ChipContainer>
                    <ChipGroup data={attributes.industriesAsArray} />
                  </ChipContainer>

                  {attributes.resultsWithDescriptionLong.length ? (
                    <>
                      <Typography variant="h4" component="h3">
                        Results:
                      </Typography>

                      <ListContainer>
                        {attributes.resultsWithDescriptionLong.map((result, resultIndex) => (
                          <li key={resultIndex}>{result}</li>
                        ))}
                      </ListContainer>
                    </>
                  ) : null}

                  <ButtonLink
                    href={`/case-studies/${attributes.slug}`}
                    id={`linkCaseStudyReadFull${parentId ? `-${parentId}-` : '-'}${
                      attributes.slug
                    }`}
                    aria-label={`Link to case study page: ${attributes.title}`}
                    onClick={handleReadFullLinkClick}
                  >
                    Read full case study
                  </ButtonLink>
                </TextContainer>
              </Stack>

              <Feedback {...convertStrapiQuoteToFeedback(attributes.quotes.data[0])} />
            </Container>
          </PageContainer>
        );
      })}
    </>
  );
};

export default CaseStudiesAll;

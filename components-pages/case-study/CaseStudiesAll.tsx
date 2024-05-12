import dynamic from 'next/dynamic';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import RectangleIcon from '../../components/common/icon-rectangle/RectangleIcon';
import ChipGroup from '../../components/common/chip/ChipGroup';
import ButtonLink from '../../components/common/buttons/ButtonLink';
import Feedback, { convertStrapiQuoteToFeedback } from '../../components/common/feedback/Feedback';

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
}

const CaseStudiesAll = ({ data }: CaseStudiesAllProps) => {
  return (
    <>
      {data.map(({ id, attributes }, caseStudyIndex) => {
        const direction = caseStudyIndex % 2 === 0 ? 'row-reverse' : 'row';

        return (
          <PageContainer className={direction === 'row' ? 'lightBackground' : ''} key={id}>
            <Container maxWidth="lg">
              <Stack
                direction={{ xs: 'column', md: direction }}
                spacing={{ xs: '35px', lg: '95px' }}
                marginBottom={{ xs: '48px', lg: '100px' }}
              >
                <ImageContainer>
                  <ImageWrapper>
                    <span className="inner-wrapper">
                      <ImageWrapperWithPictureDynamic
                        images={attributes.heroImage.images}
                        mainImage={attributes.heroImage.mainImage}
                      />
                    </span>

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
                  <Typography
                    variant="h2"
                    marginBottom={1}
                    sx={{ fontSize: { xs: '24px', lg: '32px' } }}
                  >
                    {attributes.title}
                  </Typography>

                  <Typography gutterBottom>{attributes.description}</Typography>

                  <ChipContainer>
                    <ChipGroup data={attributes.tags} />
                  </ChipContainer>

                  {attributes.resultsWithDescriptionLong.length ? (
                    <>
                      <Typography variant="h6" component="p">
                        Results:
                      </Typography>

                      <ListContainer>
                        {attributes.resultsWithDescriptionLong.map((result, resultIndex) => (
                          <li key={resultIndex}>{result}</li>
                        ))}
                      </ListContainer>
                    </>
                  ) : null}

                  <ButtonLink href={`/case-studies/${attributes.slug}`}>
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

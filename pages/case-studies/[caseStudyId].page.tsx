import type { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { getStaticPathsCaseStudy, getStaticPropsCaseStudy } from '../../utils/api.case-study';

import { Settings } from '../../constants/settings';

import type { CaseStudyStaticProps } from '../../models';

import HeroDetails from '../../components/hero/HeroDetails';
import { TextColumnContainer } from '../../components/common/text-column/TextColumn';
import HeadCaseStudyDetails from '../../components-pages/head/HeadCaseStudyDetails';
import {
  MarkdownText,
  MarkdownLink,
  MarkdownList,
  MarkdownListItem,
  MarkdownParagraph,
} from '../../components/common/typography/Markdown';
import Result from '../../components/common/result/Result';
import Feedback, { FeedbackContainer2 } from '../../components/common/feedback/Feedback';

const ImageWrapperWithPictureDynamic = dynamic(
  () => import('../../components/common/image-wrapper/ImageWrapperWithPicture'),
  {
    loading: () => <p>Loading...</p>,
  },
);
const CallToActionDynamic = dynamic(
  () => import('../../components-pages/case-study/CallToAction'),
  {
    loading: () => <p>Loading...</p>,
  },
);

export const getStaticPaths = async () => await getStaticPathsCaseStudy();

export const getStaticProps: GetStaticProps<{ data: CaseStudyStaticProps }> = async ({ params }) =>
  await getStaticPropsCaseStudy({ params });

const CaseStudyDetailPage = (props: { data: CaseStudyStaticProps }) => {
  const {
    data: { attributes },
  } = props;

  const feedbackPhoto = attributes.quotes.data[0].attributes.authorPhoto.data.attributes;

  if (attributes) {
    return (
      <>
        <HeadCaseStudyDetails
          title={attributes.title}
          description={attributes.description}
          keywords="product management, jira okr, jira atlassian, front-end development, backend development, remote team"
          image={attributes.metaImage.data.attributes.url}
          imageWidth={attributes.metaImage.data.attributes.width}
          imageHeight={attributes.metaImage.data.attributes.height}
          ogUrl={`${attributes.baseUrl}/case-studies/${attributes.slug}`}
        />

        <HeroDetails
          centered
          bgColored
          services={attributes.services}
          title={attributes.title}
          projectTags={attributes.industries.data.map(item => ({
            name: item.attributes.name,
            link: '',
          }))}
          projectSocialIcons={attributes.socialShareButtons}
          isDarkTheme={Settings.DarkThemeAvailable}
        />

        <Container
          maxWidth="lg"
          sx={{
            marginTop: { xs: '-90px', md: '-160px' },
            marginBottom: { xs: '42px', md: '80px' },
          }}
        >
          <ImageWrapperWithPictureDynamic
            images={attributes.heroImage.images}
            mainImage={attributes.heroImage.mainImage}
            largeWithBorder
          />
        </Container>

        <Container maxWidth="lg">
          {attributes.sections.data.map(({ attributes: attr, id }, index) => {
            if (attr.showFeedback) {
              return (
                <Stack direction="column" key={`with-feedback-${id}-${index}`}>
                  <TextColumnContainer>
                    <Stack direction="column">
                      {attr.showTitle ? (
                        <Typography
                          variant={attr.headingLevel}
                          marginBottom={attr.description ? 2 : 0}
                          style={{ scrollMarginTop: '112px' }}
                        >
                          {attr.name}
                        </Typography>
                      ) : null}

                      {attr.description ? (
                        <Stack direction="column" spacing={2} marginBottom={2}>
                          <MarkdownText
                            components={{
                              a: MarkdownLink,
                              ul: MarkdownList,
                              li: MarkdownListItem,
                              p: MarkdownParagraph,
                            }}
                          >
                            {attr.description}
                          </MarkdownText>
                        </Stack>
                      ) : null}
                    </Stack>
                  </TextColumnContainer>

                  <FeedbackContainer2>
                    <Feedback
                      text={attributes.quotes.data[0].attributes.content}
                      name={attributes.quotes.data[0].attributes.author}
                      image={{
                        src: feedbackPhoto.url,
                        width: feedbackPhoto.width,
                        height: feedbackPhoto.height,
                        name: '',
                        alt: feedbackPhoto.alternativeText,
                      }}
                      company={attributes.quotes.data[0].attributes.authorTitle}
                      companyName={attributes.quotes.data[0].attributes.companyName}
                      linkedInLink={attributes.quotes.data[0].attributes.authorLiLink}
                      companyLinkHref={attributes.quotes.data[0].attributes.companyLink}
                    />
                  </FeedbackContainer2>
                </Stack>
              );
            }

            if (attr.showTechStack) {
              return (
                <Stack direction="column" key={`with-tech-stack-${id}-${index}`}>
                  <TextColumnContainer>
                    <Stack direction="column">
                      {attr.showTitle ? (
                        <Typography
                          variant={attr.headingLevel}
                          marginBottom={attr.description ? 2 : 0}
                          style={{ scrollMarginTop: '112px' }}
                        >
                          {attr.name}
                        </Typography>
                      ) : null}

                      {attr.description ? (
                        <Stack direction="column" spacing={2} marginBottom={2}>
                          <MarkdownText
                            components={{
                              a: MarkdownLink,
                              ul: MarkdownList,
                              li: MarkdownListItem,
                              p: MarkdownParagraph,
                            }}
                          >
                            {attr.description}
                          </MarkdownText>
                        </Stack>
                      ) : null}
                    </Stack>
                  </TextColumnContainer>

                  <Stack direction="column" marginBottom={4}>
                    {attributes.technologies.length > 0 ? (
                      <TextColumnContainer>
                        <Stack direction="column" width={'100%'}>
                          <Typography variant="h3" marginBottom={2}>
                            Tech Stack
                          </Typography>

                          <Grid container columns={6}>
                            {attributes.technologies.map(([technologyField, technologies]) => (
                              <Grid key={`field-${technologyField}`} container>
                                <Typography variant="h4">{technologyField}:&nbsp;</Typography>

                                <Grid
                                  key={`field-item-${technologyField}`}
                                  item
                                  container
                                  margin={1}
                                >
                                  {technologies.map((item, itemIndex) => (
                                    <Typography
                                      variant="body2"
                                      component="span"
                                      key={`${item.attributes.name}-${item.id}}`}
                                    >
                                      {item.attributes.name}
                                      {itemIndex < technologies.length - 1 ? <>,&nbsp;</> : ''}
                                    </Typography>
                                  ))}
                                </Grid>
                              </Grid>
                            ))}
                          </Grid>
                        </Stack>
                      </TextColumnContainer>
                    ) : null}
                  </Stack>
                </Stack>
              );
            }

            if (attr.showResults && attributes.results.data.length > 0) {
              return (
                <Stack direction="column" key={`with-results-${id}-${index}`}>
                  <TextColumnContainer key={`${id}-${index}`}>
                    <Stack direction="column">
                      {attr.showTitle ? (
                        <Typography
                          variant={attr.headingLevel}
                          marginBottom={attr.description ? 2 : 0}
                          style={{ scrollMarginTop: '112px' }}
                        >
                          {attr.name}
                        </Typography>
                      ) : null}

                      {attr.description ? (
                        <Stack direction="column" spacing={2} marginBottom={2}>
                          <MarkdownText
                            components={{
                              a: MarkdownLink,
                              ul: MarkdownList,
                              li: MarkdownListItem,
                              p: MarkdownParagraph,
                            }}
                          >
                            {attr.description}
                          </MarkdownText>
                        </Stack>
                      ) : null}
                    </Stack>
                  </TextColumnContainer>

                  <Box sx={{ paddingBottom: '40px' }}>
                    <Result
                      data={{
                        resultInfo: attributes.results.data.map(({ attributes }) => ({
                          name: attributes.name,
                          text: attributes.description,
                        })),
                      }}
                    />
                  </Box>
                </Stack>
              );
            }

            return (
              <TextColumnContainer key={`${id}-${index}`}>
                <Stack direction="column">
                  {attr.showTitle ? (
                    <Typography
                      variant={attr.headingLevel}
                      marginBottom={attr.description ? 2 : 0}
                      style={{ scrollMarginTop: '112px' }}
                    >
                      {attr.name}
                    </Typography>
                  ) : null}

                  {attr.description ? (
                    <Stack direction="column" spacing={2} marginBottom={2}>
                      <MarkdownText
                        components={{
                          a: MarkdownLink,
                          ul: MarkdownList,
                          li: MarkdownListItem,
                          p: MarkdownParagraph,
                        }}
                      >
                        {attr.description}
                      </MarkdownText>
                    </Stack>
                  ) : null}
                </Stack>
              </TextColumnContainer>
            );
          })}
        </Container>

        {attributes.callToAction.data ? (
          <CallToActionDynamic {...attributes.callToAction.data.attributes} />
        ) : null}
      </>
    );
  }

  return null;
};

export default CaseStudyDetailPage;

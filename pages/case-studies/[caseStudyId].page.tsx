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

import HeadCaseStudyDetails from '../../components-pages/head/HeadCaseStudyDetails';
import {
  MarkdownText,
  MarkdownLink,
  MarkdownList,
  MarkdownListItem,
  MarkdownParagraph,
} from '../../components/common/typography/Markdown';
import ChipTech, { ChipTechIcon } from '../../components/common/chip/ChipTech';
import ChipTechGroup from '../../components/common/chip/ChipTechGroup';
import { convertStrapiQuoteToFeedback } from '../../components/common/feedback/Feedback';

const FeedbackDynamic = dynamic(() => import('../../components/common/feedback/Feedback'));
const FeedbackContainer2Dynamic = dynamic(() =>
  import('../../components/common/feedback/Feedback').then(mod => mod.FeedbackContainer2),
);
const ResultDynamic = dynamic(() => import('../../components/common/result/Result'));
const TextColumnContainerDynamic = dynamic(() =>
  import('../../components/common/text-column/TextColumn').then(mod => mod.TextColumnContainer),
);
const HeroDetailsDynamic = dynamic(() => import('../../components/hero/HeroDetails'));
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

  if (attributes) {
    return (
      <>
        <HeadCaseStudyDetails
          title={`${attributes.title} | Case Study`}
          description={attributes.descriptionSEO}
          keywords={attributes.keywords}
          image={attributes.metaImage.data.attributes.url}
          imageWidth={attributes.metaImage.data.attributes.width}
          imageHeight={attributes.metaImage.data.attributes.height}
          ogUrl={`${attributes.baseUrl}/case-studies/${attributes.slug}`}
        />

        <HeroDetailsDynamic
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
                  <TextColumnContainerDynamic>
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
                  </TextColumnContainerDynamic>

                  <FeedbackContainer2Dynamic>
                    <FeedbackDynamic {...convertStrapiQuoteToFeedback(attributes.quotes.data[0])} />
                  </FeedbackContainer2Dynamic>
                </Stack>
              );
            }

            if (attr.showTechStack) {
              return (
                <Stack direction="column" key={`with-tech-stack-${id}-${index}`}>
                  <TextColumnContainerDynamic>
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
                  </TextColumnContainerDynamic>

                  <Stack direction="column" marginBottom={4}>
                    {attributes.technologies.length > 0 ? (
                      <TextColumnContainerDynamic>
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
                                  <ChipTechGroup component="nav">
                                    {technologies.map((techItem, index) => (
                                      <ChipTech
                                        key={`${techItem.id}-${index}`}
                                        href={techItem.attributes.docLink}
                                        startIcon={
                                          techItem.attributes.svgIcon ? (
                                            <ChipTechIcon svgString={techItem.attributes.svgIcon} />
                                          ) : null
                                        }
                                        target="_blank"
                                      >
                                        {techItem.attributes.name}
                                      </ChipTech>
                                    ))}
                                  </ChipTechGroup>
                                </Grid>
                              </Grid>
                            ))}
                          </Grid>
                        </Stack>
                      </TextColumnContainerDynamic>
                    ) : null}
                  </Stack>
                </Stack>
              );
            }

            if (attr.showResults && attributes.results.data.length > 0) {
              return (
                <Stack direction="column" key={`with-results-${id}-${index}`}>
                  <TextColumnContainerDynamic key={`${id}-${index}`}>
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
                  </TextColumnContainerDynamic>

                  <Box sx={{ paddingBottom: '40px' }}>
                    <ResultDynamic
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
              <TextColumnContainerDynamic key={`${id}-${index}`}>
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
              </TextColumnContainerDynamic>
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

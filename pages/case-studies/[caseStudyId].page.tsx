import type { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { fetchCaseStudies, fetchCaseStudyBySlug } from '../../utils/api';

import { Settings } from '../../constants/settings';
import { MetaData } from '../../constants/meta';

import type { CaseStudyStrapi, CaseStudyStaticProps } from '../../models';

import HeroDetails from '../../components/hero/HeroDetails';
import Button from '../../components/common/buttons/Button';
import { TextColumnContainer } from '../../components/common/text-column/TextColumn';
import {
  MarkdownText,
  MarkdownLink,
  MarkdownList,
  MarkdownListItem,
  MarkdownParagraph,
} from '../../components/common/typography/Markdown';
import Result from '../../components/common/result/Result';
import Feedback, { FeedbackContainer2 } from '../../components/common/feedback/Feedback';
/* import ImagesColumn from '../../components/common/images-column/ImagesColumn';
import CaseStudyNextItem from '../../components/case-studies/CaseStudyNextItem'; */

const ImageWrapperWithPictureDynamic = dynamic(
  () => import('../../components/common/image-wrapper/ImageWrapperWithPicture'),
  {
    loading: () => <p>Loading...</p>,
  },
);

import { socialShareButtons } from '../../constants/social-share-buttons';

export const getStaticPaths = async () => {
  const caseStudies = await fetchCaseStudies();

  const paths = caseStudies.data.map((item: CaseStudyStrapi) => ({
    params: {
      caseStudyId: item.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ data: CaseStudyStaticProps }> = async ({
  params,
}) => {
  const json = await fetchCaseStudyBySlug(String(params?.caseStudyId));

  // order images by width
  json.data[0].attributes.heroImage.data.sort((a, b) => b.attributes.width - a.attributes.width);

  const mainImage =
    json.data[0].attributes.heroImage.data[json.data[0].attributes.heroImage.data.length - 1];

  // @TODO: add special field to DB for keywords
  const keywords = json.data[0].attributes.technologies.data.reduce(
    (acc, item) => `${acc ? acc + ', ' : ''}${item.attributes.name}`,
    '',
  );
  const keywords2 = json.data[0].attributes.industries.data.reduce(
    (acc, item) => `${acc ? acc + ', ' : ''}${item.attributes.name}`,
    '',
  );
  const technologiesGroupedByTechnologyField = json.data[0].attributes.technologies.data.reduce(
    (acc: Record<string, Array<any>>, item) => {
      const technologyField = item.attributes.technologyField.data?.attributes.name || '';

      if (technologyField && !acc[technologyField]) {
        acc[technologyField] = [];
      }

      if (technologyField) {
        acc[technologyField].push(item);
      }

      return acc;
    },
    {},
  );
  const technologiesGrouped = Object.entries(technologiesGroupedByTechnologyField);

  return {
    props: {
      data: {
        ...json.data[0],
        attributes: {
          ...json.data[0].attributes,
          heroImage: {
            images: json.data[0].attributes.heroImage.data.map(item => ({
              id: item.id,
              attributes: {
                ...item.attributes,
                url: `${process.env.API_BASE_URL}${item.attributes.url}`,
              },
            })),
            mainImage: {
              id: mainImage.id,
              attributes: {
                ...mainImage.attributes,
                url: `${process.env.API_BASE_URL}${mainImage.attributes.url}`,
              },
            },
          },
          technologies: technologiesGrouped,
          // https://developers.cloudflare.com/pages/configuration/build-configuration/#environment-variables
          baseUrl: process.env.CF_PAGES_URL || '',
          apiBaseUrl: process.env.API_BASE_URL || '',
          keywords: `${keywords}, ${keywords2}`,
        },
      },
    },
  };
};

const CaseStudyDetailPage = (props: { data: CaseStudyStaticProps }) => {
  const {
    data: { attributes },
  } = props;

  const feedbackPhoto = attributes.quotes.data[0].attributes.authorPhoto.data.attributes;

  if (attributes) {
    return (
      <>
        <Head>
          {/* General */}
          <meta name="description" content={attributes.description} />
          <meta name="keywords" content={attributes.keywords} />
          <meta
            name="image"
            content={`${attributes.apiBaseUrl}${attributes.metaImage.data.attributes.url}`}
          />
          <meta name="author" content={`${MetaData.IndexAuthor} Team`} />

          {/* Google / Search Engine Tags */}
          <meta itemProp="name" content={`${attributes.title} | Case Study`} />
          <meta itemProp="description" content={attributes.description} />
          <meta
            itemProp="image"
            content={`${attributes.apiBaseUrl}${attributes.metaImage.data.attributes.url}`}
          />

          {/* Open Graph */}
          <meta property="og:site_name" content={MetaData.IndexAuthor} />
          <meta property="og:title" content={`${attributes.title} | Case Study`} />
          <meta property="og:description" content={attributes.description} />
          <meta
            property="og:url"
            content={`${attributes.baseUrl}/case-studies/${attributes.slug}`}
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:image"
            content={`${attributes.apiBaseUrl}${attributes.metaImage.data.attributes.url}`}
          />
          <meta property="og:image:type" content={MetaData.ImageType} />
          <meta
            property="og:image:alt"
            content={`${MetaData.IndexAuthor} Case Study: ${attributes.title}`}
          />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${attributes.title} | Case Study`} />
          <meta name="twitter:description" content={attributes.description} />
          <meta
            name="twitter:image"
            content={`${attributes.apiBaseUrl}${attributes.metaImage.data.attributes.url}`}
          />
          <title>{`${attributes.title} | Case Study`}</title>
        </Head>

        <HeroDetails
          centered
          bgColored
          title={attributes.title}
          projectTags={attributes.industries.data.map(item => ({
            name: item.attributes.name,
            link: '',
          }))}
          projectSocialIcons={socialShareButtons(
            `${attributes.baseUrl}/case-studies/${attributes.slug}`,
          )}
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
                        src: `${attributes.apiBaseUrl}${feedbackPhoto.url}`,
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

        <Container
          maxWidth="lg"
          sx={{ paddingTop: { xs: '64px' }, paddingBottom: { xs: '64px', lg: '120px' } }}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="subtitle1">Don&apos;t miss your chance:</Typography>
            <Button variant="outlined" href={Settings.CalendlyLink} size="large">
              Book a call
            </Button>
          </Stack>
        </Container>

        {attributes.results.data.length > 0 ? (
          <Box sx={{ paddingBottom: { xs: '64px', lg: '120px' } }}>
            <Result
              data={{
                resultInfo: attributes.results.data.map(item => ({
                  name: item.attributes.name,
                  text: item.attributes.description,
                })),
              }}
            />
          </Box>
        ) : null}
      </>
    );
  }

  return null;
};

export default CaseStudyDetailPage;

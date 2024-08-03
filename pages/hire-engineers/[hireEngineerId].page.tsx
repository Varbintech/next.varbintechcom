import { styled } from '@mui/material/styles';

import type { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

const BoxDynamic = dynamic(() => import('@mui/material/Box'));
const ContainerDynamic = dynamic(() => import('@mui/material/Container'));
const TypographyDynamic = dynamic(() => import('@mui/material/Typography'));
const StackDynamic = dynamic(() => import('@mui/material/Stack'));

import { useGenerateEventGa } from '../../hooks/use-generate-event-ga';

import { СubeContainerStyled } from '../../components/common/icon-rectangle-box/styled-components';

import { PageContainer } from '../../components/case-studies/styled-components';

const СubeContainerTechStyled = styled(СubeContainerStyled)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

import type { HireEngineer, Collection } from '../../models';

import { convertStrapiQuoteToFeedback } from '../../components/common/feedback/Feedback';

const ImportantUpdateDynamic = dynamic(
  () => import('../../components/common/important-update/ImportantUpdate'),
  {
    loading: () => <p>Loading...</p>,
  },
);
const ResultDynamic = dynamic(() => import('../../components/common/result/Result'));
const FeedbackDynamic = dynamic(() => import('../../components/common/feedback/Feedback'));
const FeedbackContainer2Dynamic = dynamic(() =>
  import('../../components/common/feedback/Feedback').then(mod => mod.FeedbackContainer2),
);
const ButtonLinkDynamic = dynamic(() => import('../../components/common/buttons/ButtonLink'));

const TextColumnContainerDynamic = dynamic(() =>
  import('../../components/common/text-column/TextColumn').then(mod => mod.TextColumnContainer),
);

const CallToActionDynamic = dynamic(() => import('../../components-pages/case-study/CallToAction'));

import {
  MarkdownText,
  MarkdownLink,
  MarkdownList,
  MarkdownListOl,
  MarkdownListItem,
  MarkdownParagraph,
} from '../../components/common/typography/Markdown';

import ChipTech, { ChipTechIcon } from '../../components/common/chip/ChipTech';
import ChipTechGroup from '../../components/common/chip/ChipTechGroup';
import RectangleBoxIcon from '../../components/common/icon-rectangle-box/RectangleBoxIcon';
import HeroHireEngineer from '../../components/hero/HeroHireEngineer';
import HeadHireEngineer from '../../components-pages/head/HeadCaseStudyDetails';

import { MetaData } from '../../constants/meta';

import {
  getStaticPropsHireEngineer,
  HireEngineerStaticProps,
  getStaticPathsHireEngineers,
} from '../../utils/api.hire-engineers';

export const getStaticPaths = async () => await getStaticPathsHireEngineers();

export const getStaticProps: GetStaticProps<{ data: Collection<HireEngineer> }> = async ({
  params,
}) => await getStaticPropsHireEngineer({ params });

export default function HireEngineerPage({ data }: HireEngineerStaticProps) {
  const {
    title,
    subtitle,
    descriptionSEO,
    keywords,
    slug,
    updateLabel,
    sections,
    links,
    feedback,
    callToAction,
    results,
    technologies,
  } = data.attributes;

  const handleLinkClick = useGenerateEventGa('link');

  return (
    <>
      <HeadHireEngineer
        title={`${title} | ${MetaData.IndexAuthor}`}
        description={descriptionSEO}
        keywords={keywords}
        image={MetaData.Image}
        imageAlt={MetaData.ImageAlt}
        imageWidth={1200}
        imageHeight={630}
        ogUrl={`${MetaData.Url}${slug}`}
      />

      <>
        <HeroHireEngineer
          title={title}
          subtitle={subtitle}
          importantUpdateEl={
            <BoxDynamic
              mt={{
                xs: 2,
                sm: 4,
                md: 6,
              }}
              mb={{
                xs: 4,
                sm: 6,
                md: 8,
              }}
            >
              <ImportantUpdateDynamic
                text={`${updateLabel.text} `}
                linkText={updateLabel.linkText}
                linkUrl={updateLabel.link}
                labelText={updateLabel.label}
              />
            </BoxDynamic>
          }
        />

        <СubeContainerTechStyled>
          <RectangleBoxIcon />
        </СubeContainerTechStyled>

        <PageContainer className="lightBackground">
          <ContainerDynamic maxWidth="lg">
            {sections.data.map(({ attributes, id }, sectionIndex) => {
              const {
                showTitle,
                showLinks,
                showFeedback,
                showResults,
                showTechStack,
                showCTA,
                description,
                headingLevel,
                name,
              } = attributes;

              if (showLinks && links.data.length && showResults) {
                return (
                  <BoxDynamic key={`${id}-${sectionIndex}`}>
                    <TextColumnContainerDynamic>
                      {showTitle || description ? (
                        <StackDynamic direction="column" width="100%">
                          {showTitle ? (
                            <TypographyDynamic
                              variant={headingLevel}
                              marginBottom={description ? 2 : 0}
                              lineHeight={1.3}
                            >
                              {name}
                            </TypographyDynamic>
                          ) : null}

                          <BoxDynamic
                            paddingLeft={2}
                            paddingRight={2}
                            marginBottom={{
                              xs: 2,
                              md: 4,
                            }}
                          >
                            <ChipTechGroup component="nav">
                              {links.data.map((techItem, index) => (
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
                          </BoxDynamic>

                          {description ? (
                            <StackDynamic direction="column" spacing={2} marginBottom={2}>
                              <MarkdownText
                                components={{
                                  a: MarkdownLink,
                                  ul: MarkdownList,
                                  ol: MarkdownListOl,
                                  li: MarkdownListItem,
                                  p: MarkdownParagraph,
                                  h3: ({ children }) => (
                                    <TypographyDynamic variant="h3">{children}</TypographyDynamic>
                                  ),
                                  h4: ({ children }) => (
                                    <TypographyDynamic variant="h4">{children}</TypographyDynamic>
                                  ),
                                }}
                              >
                                {description}
                              </MarkdownText>
                            </StackDynamic>
                          ) : null}
                        </StackDynamic>
                      ) : null}
                    </TextColumnContainerDynamic>

                    <BoxDynamic sx={{ paddingBottom: '40px', position: 'relative', zIndex: '5' }}>
                      <ResultDynamic
                        data={{
                          resultInfo: results.data.map(({ attributes }) => ({
                            name: attributes.name,
                            text: attributes.description,
                          })),
                          title: 'Summary',
                        }}
                      />
                    </BoxDynamic>
                  </BoxDynamic>
                );
              }

              if (showFeedback) {
                return (
                  <TextColumnContainerDynamic key={`${id}-${sectionIndex}`}>
                    {showTitle || description ? (
                      <StackDynamic direction="column" width="100%">
                        {showTitle ? (
                          <TypographyDynamic
                            variant={headingLevel}
                            marginBottom={description ? 2 : 0}
                            lineHeight={1.3}
                          >
                            {name}
                          </TypographyDynamic>
                        ) : null}

                        {description ? (
                          <StackDynamic direction="column" spacing={2} marginBottom={2}>
                            <MarkdownText
                              components={{
                                a: MarkdownLink,
                                ul: MarkdownList,
                                ol: MarkdownListOl,
                                li: MarkdownListItem,
                                p: MarkdownParagraph,
                                h3: ({ children }) => (
                                  <TypographyDynamic variant="h3">{children}</TypographyDynamic>
                                ),
                                h4: ({ children }) => (
                                  <TypographyDynamic variant="h4">{children}</TypographyDynamic>
                                ),
                              }}
                            >
                              {description}
                            </MarkdownText>
                          </StackDynamic>
                        ) : null}

                        <BoxDynamic
                          marginTop={{
                            xs: 8,
                            md: 10,
                          }}
                        >
                          <FeedbackContainer2Dynamic>
                            <BoxDynamic
                              display="flex"
                              flexDirection="column"
                              gap={4}
                              alignContent="center"
                              justifyContent="center"
                            >
                              <FeedbackDynamic {...convertStrapiQuoteToFeedback(feedback.data)} />

                              <ButtonLinkDynamic
                                href={updateLabel.link}
                                id={`linkHireEngineerReadFull${feedback.data.id}`}
                                aria-label={`Link to case study page: ${updateLabel.linkText}`}
                                onClick={handleLinkClick}
                                sx={{
                                  alignSelf: 'center',
                                }}
                              >
                                Read full case study
                              </ButtonLinkDynamic>
                            </BoxDynamic>
                          </FeedbackContainer2Dynamic>
                        </BoxDynamic>
                      </StackDynamic>
                    ) : null}
                  </TextColumnContainerDynamic>
                );
              }

              if (showTechStack) {
                return (
                  <TextColumnContainerDynamic key={`${id}-${sectionIndex}`}>
                    {showTitle || description ? (
                      <StackDynamic direction="column" width="100%">
                        {showTitle ? (
                          <TypographyDynamic
                            variant={headingLevel}
                            marginBottom={description ? 2 : 0}
                            lineHeight={1.3}
                          >
                            {name}
                          </TypographyDynamic>
                        ) : null}

                        <BoxDynamic paddingLeft={2} paddingRight={2} marginBottom={3}>
                          <ChipTechGroup component="nav">
                            {technologies.data.map((techItem, index) => (
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
                        </BoxDynamic>

                        {description ? (
                          <StackDynamic direction="column" spacing={2} marginBottom={2}>
                            <MarkdownText
                              components={{
                                a: MarkdownLink,
                                ul: MarkdownList,
                                ol: MarkdownListOl,
                                li: MarkdownListItem,
                                p: MarkdownParagraph,
                                h3: ({ children }) => (
                                  <TypographyDynamic variant="h3">{children}</TypographyDynamic>
                                ),
                                h4: ({ children }) => (
                                  <TypographyDynamic variant="h4">{children}</TypographyDynamic>
                                ),
                              }}
                            >
                              {description}
                            </MarkdownText>
                          </StackDynamic>
                        ) : null}
                      </StackDynamic>
                    ) : null}
                  </TextColumnContainerDynamic>
                );
              }

              if (showCTA) {
                return (
                  <TextColumnContainerDynamic key={`${id}-${sectionIndex}`}>
                    {showTitle || description ? (
                      <StackDynamic direction="column" width="100%">
                        <BoxDynamic
                          marginTop={{
                            xs: 0,
                            md: 7,
                          }}
                          marginBottom={{
                            xs: 5,
                            md: 10,
                          }}
                        >
                          <CallToActionDynamic {...callToAction.data.attributes} noPadding />
                        </BoxDynamic>

                        {showTitle ? (
                          <TypographyDynamic
                            variant={headingLevel}
                            marginBottom={description ? 2 : 0}
                            lineHeight={1.3}
                          >
                            {name}
                          </TypographyDynamic>
                        ) : null}

                        {description ? (
                          <StackDynamic direction="column" spacing={2} marginBottom={2}>
                            <MarkdownText
                              components={{
                                a: MarkdownLink,
                                ul: MarkdownList,
                                ol: MarkdownListOl,
                                li: MarkdownListItem,
                                p: MarkdownParagraph,
                                h3: ({ children }) => (
                                  <TypographyDynamic variant="h3">{children}</TypographyDynamic>
                                ),
                                h4: ({ children }) => (
                                  <TypographyDynamic variant="h4">{children}</TypographyDynamic>
                                ),
                              }}
                            >
                              {description}
                            </MarkdownText>
                          </StackDynamic>
                        ) : null}
                      </StackDynamic>
                    ) : null}
                  </TextColumnContainerDynamic>
                );
              }

              return (
                <TextColumnContainerDynamic key={`${id}-${sectionIndex}`}>
                  {showTitle || description ? (
                    <StackDynamic direction="column" width="100%">
                      {showTitle ? (
                        <TypographyDynamic
                          variant={headingLevel}
                          marginBottom={description ? 2 : 0}
                          lineHeight={1.3}
                        >
                          {name}
                        </TypographyDynamic>
                      ) : null}

                      {description ? (
                        <StackDynamic direction="column" spacing={2} marginBottom={2}>
                          <MarkdownText
                            components={{
                              a: MarkdownLink,
                              ul: MarkdownList,
                              ol: MarkdownListOl,
                              li: MarkdownListItem,
                              p: MarkdownParagraph,
                              h3: ({ children }) => (
                                <TypographyDynamic variant="h3">{children}</TypographyDynamic>
                              ),
                              h4: ({ children }) => (
                                <TypographyDynamic variant="h4">{children}</TypographyDynamic>
                              ),
                            }}
                          >
                            {description}
                          </MarkdownText>
                        </StackDynamic>
                      ) : null}
                    </StackDynamic>
                  ) : null}
                </TextColumnContainerDynamic>
              );
            })}
          </ContainerDynamic>

          <CallToActionDynamic {...callToAction.data.attributes} noPadding />
        </PageContainer>
      </>
    </>
  );
}

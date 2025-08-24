import type { GetStaticProps, GetStaticPaths } from 'next';
import dynamic from 'next/dynamic';

import { styled } from '@mui/material/styles';

import {
  getStaticPathsStaticPages,
  getStaticPropsStaticPages,
  type StaticPageProps,
} from '../utils/api.static-page';

import { СubeContainerStyled } from '../components/common/icon-rectangle-box/styled-components';
import RectangleBoxIcon from '../components/common/icon-rectangle-box/RectangleBoxIcon';
import { PageContainer } from '../components/case-studies/styled-components';
import HeroStaticPage from '../components/hero/HeroHireEngineer';
import HeadTech from '../components-pages/head/HeadCaseStudyDetails';
import {
  MarkdownText,
  MarkdownLink,
  MarkdownList,
  MarkdownListOl,
  MarkdownListItem,
  MarkdownParagraph,
  MarkdownHeading,
} from '../components/common/typography/Markdown';

import { MetaData } from '../constants/meta';

import type { Collection, StaticPage as StaticPageModel } from '../models';

const ContainerDynamic = dynamic(() => import('@mui/material/Container'));
const TypographyDynamic = dynamic(() => import('@mui/material/Typography'));
const StackDynamic = dynamic(() => import('@mui/material/Stack'));

const TextColumnContainerDynamic = dynamic(() =>
  import('../components/common/text-column/TextColumn').then(mod => mod.TextColumnContainer),
);

import JsonLdWebPage from '../components/json-ld/WebPage';
import JsonLdWebSite from '../components/json-ld/WebSite';
import JsonLdWebBreadcrumb from '../components/json-ld/Breadcrumb';

const СubeContainerTechStyled = styled(СubeContainerStyled)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

export const getStaticPaths: GetStaticPaths = async context =>
  await getStaticPathsStaticPages(context);

export const getStaticProps: GetStaticProps<{ data: Collection<StaticPageModel> }> = async ({
  params,
}) => await getStaticPropsStaticPages({ params });

export default function StaticPage({ data, hireEngineersLinks }: StaticPageProps) {
  const {
    attributes: { title, description, descriptionSEO, keywords, slug, sections },
  } = data;

  return (
    <>
      <HeadTech
        title={title}
        description={descriptionSEO}
        keywords={keywords}
        image={MetaData.Image}
        imageAlt={MetaData.ImageAlt}
        imageWidth={1200}
        imageHeight={630}
        ogUrl={`${MetaData.Url}/${slug}`}
      />

      <JsonLdWebSite />
      <JsonLdWebPage slug={`/${slug}`} description={descriptionSEO} name={title} />
      <JsonLdWebBreadcrumb hireEngineersLinks={hireEngineersLinks} />

      <>
        <HeroStaticPage title={title} subtitle={description} />

        <СubeContainerTechStyled>
          <RectangleBoxIcon />
        </СubeContainerTechStyled>

        <PageContainer className="lightBackground">
          <ContainerDynamic maxWidth="lg">
            {sections.data.map(({ attributes, id }, sectionIndex) => {
              const { showTitle, description, headingLevel, name } = attributes;

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
                              h3: MarkdownHeading,
                              h4: MarkdownHeading,
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
        </PageContainer>
      </>
    </>
  );
}

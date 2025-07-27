import type { GetStaticProps, GetStaticPaths } from 'next';
import dynamic from 'next/dynamic';

import type { ReactElement } from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Settings } from '../../constants/settings';
import { MetaData } from '../../constants/meta';

import HeroBlogDetails from '../../components/hero/HeroBlogDetails';
import ImagesColumn from '../../components/common/images-column/ImagesColumn';
import TableOfContent from '../../components/common/table-of-content/TableOfContent';
import HeadBlogDetails from '../../components-pages/head/HeadCaseStudyDetails';
import {
  MarkdownText,
  MarkdownTextWithHtml,
  MarkdownLink,
  MarkdownList,
  MarkdownListItem,
  MarkdownParagraph,
  MarkdownCode,
  MarkdownBlockquote,
  MarkdownTable,
  MarkdownTableHead,
  MarkdownTableBody,
  MarkdownTableCellStyled,
  MarkdownTableRowStyled,
  MarkdownHeadingWithAnchorIconAndCopyButton,
} from '../../components/common/typography/Markdown';
import ButtonCopyHref from '../../components/common/typography/ButtonCopyHref';

import ChipTech, { ChipTechIcon } from '../../components/common/chip/ChipTech';
import ChipTechGroup from '../../components/common/chip/ChipTechGroup';

const TextColumnContainerDynamic = dynamic(() =>
  import('../../components/common/text-column/TextColumn').then(mod => mod.TextColumnContainer),
);

const CallToActionDynamic = dynamic(
  () => import('../../components-pages/case-study/CallToAction'),
  {
    loading: () => <p>Loading...</p>,
  },
);

import {
  getStaticPropsBlogId,
  getStaticPathsBlogId,
  type BlogIdStaticProps,
} from '../../utils/api.blog';

import type { ProjectImage } from '../../models';

export const getStaticPaths: GetStaticPaths = async () => await getStaticPathsBlogId();

export const getStaticProps: GetStaticProps<BlogIdStaticProps> = async ({ params }) =>
  await getStaticPropsBlogId({ params });

const BlogDetailPage = (props: BlogIdStaticProps) => {
  const {
    data: { attributes },
    socialShareButtons,
    tocContent,
    baseUrl,
  } = props;

  if (attributes) {
    return (
      <>
        <HeadBlogDetails
          title={`${attributes.title} | ${MetaData.IndexAuthor} Blog`}
          description={attributes.descriptionSEO}
          keywords={attributes.keywords}
          image={attributes.metaImage.data.attributes.url}
          imageAlt={attributes.metaImage.data.attributes.alternativeText}
          ogUrl={`${baseUrl}/blog/${attributes.slug}`}
        />

        <HeroBlogDetails
          title={attributes.title}
          projectTags={attributes.blogTags.data.map(tag => ({
            name: tag.attributes.title,
            link: '',
          }))}
          projectSocialIcons={socialShareButtons}
          postAuthor={`${attributes.blogAuthors.data[0].attributes.firstName} ${attributes.blogAuthors.data[0].attributes.lastName}`}
          postDate={attributes.publishedAt}
          postAuthorPhoto={{
            src: attributes.blogAuthors.data[0].attributes.avatar.data.attributes.url,
            alt: attributes.blogAuthors.data[0].attributes.avatar.data.attributes.alternativeText,
            width: attributes.blogAuthors.data[0].attributes.avatar.data.attributes.width,
            height: attributes.blogAuthors.data[0].attributes.avatar.data.attributes.height,
            name: attributes.blogAuthors.data[0].attributes.avatar.data.attributes.name,
          }}
          postBgImage={attributes.heroImage.data[0].attributes.url}
          isDarkTheme={Settings.DarkThemeAvailable}
          services=""
        />

        <Container maxWidth="lg" sx={{ marginTop: { xs: 4, md: 8 }, marginBottom: { md: 8 } }}>
          <Grid container spacing={'30px'} columns={12}>
            <Grid container item direction="column" md={3} display={{ xs: 'none', md: 'flex' }}>
              <TableOfContent
                image={{
                  src: attributes.tocImage.data.attributes.url,
                  alt: attributes.tocImage.data.attributes.alternativeText,
                  width: attributes.tocImage.data.attributes.width,
                  height: attributes.tocImage.data.attributes.height,
                  name: attributes.tocImage.data.attributes.name,
                }}
                data={tocContent}
                socialIcons={socialShareButtons}
              />
            </Grid>

            <Grid
              container
              item
              direction="column"
              xs={12}
              md={9}
              sx={{ paddingTop: '0 !important' }}
            >
              {attributes.sections.data.map(({ id: sectionId, attributes: sectionAttr }, index) => {
                const scrollMarginTop = {
                  scrollMarginTop: index === 0 ? '502px' : '202px',
                  marginTop: '1.5rem !important',
                };

                if (sectionAttr.showTechStack) {
                  return (
                    <Stack direction="column" key={`with-tech-stack-${sectionId}-${index}__blog`}>
                      <TextColumnContainerDynamic key={`${sectionId}-${index}`}>
                        <Stack direction="column">
                          {sectionAttr.showTitle ? (
                            <Typography
                              variant={sectionAttr.headingLevel}
                              marginBottom={sectionAttr.description ? 2 : 0}
                              sx={scrollMarginTop}
                              className="section"
                            >
                              {sectionAttr.name}
                            </Typography>
                          ) : null}

                          {sectionAttr.descriptionEnhanced ? (
                            <Stack direction="column" spacing={2} marginBottom={3}>
                              <MarkdownTextWithHtml
                                components={{
                                  a: MarkdownLink,
                                  h2: props => (
                                    <MarkdownHeadingWithAnchorIconAndCopyButton
                                      sx={scrollMarginTop}
                                      className="section"
                                      {...props}
                                    >
                                      <ButtonCopyHref href={`#${props.node?.properties.id}`} />
                                    </MarkdownHeadingWithAnchorIconAndCopyButton>
                                  ),
                                  h3: props => {
                                    return (
                                      <MarkdownHeadingWithAnchorIconAndCopyButton
                                        sx={scrollMarginTop}
                                        className="section"
                                        {...props}
                                      >
                                        <ButtonCopyHref href={`#${props.node?.properties.id}`} />
                                      </MarkdownHeadingWithAnchorIconAndCopyButton>
                                    );
                                  },
                                  h4: props => (
                                    <MarkdownHeadingWithAnchorIconAndCopyButton
                                      sx={scrollMarginTop}
                                      className="section"
                                      {...props}
                                    >
                                      <ButtonCopyHref href={`#${props.node?.properties.id}`} />
                                    </MarkdownHeadingWithAnchorIconAndCopyButton>
                                  ),
                                  ul: MarkdownList,
                                  li: MarkdownListItem,
                                  p: ({ children, ...restProps }) => {
                                    if (
                                      Array.isArray(children) &&
                                      children.some(child => child.type === 'img')
                                    ) {
                                      const imgs = (children as Array<ReactElement>).filter(
                                        child => child.type === 'img',
                                      );
                                      const projectsImages: Array<ProjectImage> = imgs.map(
                                        ({ props }: ReactElement) => ({
                                          src: props.src,
                                          alt: props.alt,
                                          width: props.width,
                                          height: props.height,
                                          name: props.name,
                                        }),
                                      );

                                      return (
                                        <div>
                                          <ImagesColumn
                                            data={{ label: 'IMAGE', imageSection: projectsImages }}
                                          />
                                        </div>
                                      );
                                    }

                                    if ((children as ReactElement).type === 'img') {
                                      const { src, alt, width, height, name } = (
                                        children as ReactElement
                                      ).props;

                                      const projectsImage: ProjectImage = {
                                        src,
                                        alt,
                                        width,
                                        height,
                                        name,
                                      };

                                      return (
                                        <ImagesColumn
                                          data={{ label: 'IMAGE', imageSection: [projectsImage] }}
                                        />
                                      );
                                    }

                                    return (
                                      <MarkdownParagraph {...restProps}>
                                        {children}
                                      </MarkdownParagraph>
                                    );
                                  },
                                  pre: ({ children }) => <>{children}</>,
                                  code: MarkdownCode,
                                  blockquote: MarkdownBlockquote,
                                }}
                              >
                                {sectionAttr.descriptionEnhanced}
                              </MarkdownTextWithHtml>
                            </Stack>
                          ) : null}
                        </Stack>
                      </TextColumnContainerDynamic>

                      <Stack direction="column" marginBottom={-3}>
                        {attributes.technologies.length > 0 ? (
                          <TextColumnContainerDynamic>
                            <Stack direction="column" width={'100%'}>
                              <Grid container columns={6} mt={-2}>
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
                                                <ChipTechIcon
                                                  svgString={techItem.attributes.svgIcon}
                                                />
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

                return (
                  <TextColumnContainerDynamic key={`${sectionId}-${index}`}>
                    <Stack direction="column">
                      {sectionAttr.showTitle ? (
                        <Typography
                          variant={sectionAttr.headingLevel}
                          marginBottom={sectionAttr.description ? 2 : 0}
                          sx={scrollMarginTop}
                          className="section"
                        >
                          {sectionAttr.name}
                        </Typography>
                      ) : null}

                      {sectionAttr.description ? (
                        <Stack direction="column" spacing={2} marginBottom={3}>
                          <MarkdownText
                            components={{
                              a: MarkdownLink,
                              h2: props => (
                                <MarkdownHeadingWithAnchorIconAndCopyButton
                                  sx={scrollMarginTop}
                                  className="section"
                                  {...props}
                                >
                                  <ButtonCopyHref href={`#${props.node?.properties.id}`} />
                                </MarkdownHeadingWithAnchorIconAndCopyButton>
                              ),
                              h3: props => (
                                <MarkdownHeadingWithAnchorIconAndCopyButton
                                  sx={scrollMarginTop}
                                  className="section"
                                  {...props}
                                >
                                  <ButtonCopyHref href={`#${props.node?.properties.id}`} />
                                </MarkdownHeadingWithAnchorIconAndCopyButton>
                              ),
                              h4: props => (
                                <MarkdownHeadingWithAnchorIconAndCopyButton
                                  sx={scrollMarginTop}
                                  className="section"
                                  {...props}
                                >
                                  <ButtonCopyHref href={`#${props.node?.properties.id}`} />
                                </MarkdownHeadingWithAnchorIconAndCopyButton>
                              ),
                              ul: MarkdownList,
                              li: MarkdownListItem,
                              p: ({ children, ...restProps }) => {
                                if (
                                  Array.isArray(children) &&
                                  children.some(child => child.type === 'img')
                                ) {
                                  const imgs = (children as Array<ReactElement>).filter(
                                    child => child.type === 'img',
                                  );
                                  const projectsImages: Array<ProjectImage> = imgs.map(
                                    ({ props }: ReactElement) => ({
                                      src: props.src,
                                      alt: props.alt,
                                      width: props.width,
                                      height: props.height,
                                      name: props.name,
                                    }),
                                  );

                                  return (
                                    <div>
                                      <ImagesColumn
                                        data={{ label: 'IMAGE', imageSection: projectsImages }}
                                      />
                                    </div>
                                  );
                                }

                                if ((children as ReactElement).type === 'img') {
                                  const { src, alt, width, height, name } = (
                                    children as ReactElement
                                  ).props;

                                  const projectsImage: ProjectImage = {
                                    src,
                                    alt,
                                    width,
                                    height,
                                    name,
                                  };

                                  return (
                                    <ImagesColumn
                                      data={{ label: 'IMAGE', imageSection: [projectsImage] }}
                                    />
                                  );
                                }

                                return (
                                  <MarkdownParagraph {...restProps}>{children}</MarkdownParagraph>
                                );
                              },
                              pre: ({ children }) => <>{children}</>,
                              code: MarkdownCode,
                              blockquote: MarkdownBlockquote,
                            }}
                          >
                            {sectionAttr.description}
                          </MarkdownText>
                        </Stack>
                      ) : null}

                      {sectionAttr.descriptionEnhanced ? (
                        <Stack direction="column" spacing={2} marginBottom={3}>
                          <MarkdownTextWithHtml
                            components={{
                              a: MarkdownLink,
                              h2: props => (
                                <MarkdownHeadingWithAnchorIconAndCopyButton
                                  sx={scrollMarginTop}
                                  className="section"
                                  {...props}
                                >
                                  <ButtonCopyHref href={`#${props.node?.properties.id}`} />
                                </MarkdownHeadingWithAnchorIconAndCopyButton>
                              ),
                              h3: props => (
                                <MarkdownHeadingWithAnchorIconAndCopyButton
                                  sx={scrollMarginTop}
                                  className="section"
                                  {...props}
                                >
                                  <ButtonCopyHref href={`#${props.node?.properties.id}`} />
                                </MarkdownHeadingWithAnchorIconAndCopyButton>
                              ),
                              h4: props => (
                                <MarkdownHeadingWithAnchorIconAndCopyButton
                                  sx={scrollMarginTop}
                                  className="section"
                                  {...props}
                                >
                                  <ButtonCopyHref href={`#${props.node?.properties.id}`} />
                                </MarkdownHeadingWithAnchorIconAndCopyButton>
                              ),
                              ul: MarkdownList,
                              li: MarkdownListItem,
                              p: ({ children, ...restProps }) => {
                                if (
                                  Array.isArray(children) &&
                                  children.some(child => child.type === 'img')
                                ) {
                                  const imgs = (children as Array<ReactElement>).filter(
                                    child => child.type === 'img',
                                  );
                                  const projectsImages: Array<ProjectImage> = imgs.map(
                                    ({ props }: ReactElement) => ({
                                      src: props.src,
                                      alt: props.alt,
                                      width: props.width,
                                      height: props.height,
                                      name: props.name,
                                    }),
                                  );

                                  return (
                                    <div>
                                      <ImagesColumn
                                        data={{ label: 'IMAGE', imageSection: projectsImages }}
                                      />
                                    </div>
                                  );
                                }

                                if ((children as ReactElement).type === 'img') {
                                  const { src, alt, width, height, name } = (
                                    children as ReactElement
                                  ).props;

                                  const projectsImage: ProjectImage = {
                                    src,
                                    alt,
                                    width,
                                    height,
                                    name,
                                  };

                                  return (
                                    <ImagesColumn
                                      data={{ label: 'IMAGE', imageSection: [projectsImage] }}
                                    />
                                  );
                                }

                                return (
                                  <MarkdownParagraph {...restProps}>{children}</MarkdownParagraph>
                                );
                              },
                              pre: ({ children }) => <>{children}</>,
                              code: MarkdownCode,
                              blockquote: MarkdownBlockquote,
                              table: MarkdownTable,
                              thead: ({ children }) => (
                                <MarkdownTableHead>{children}</MarkdownTableHead>
                              ),
                              tbody: ({ children }) => (
                                <MarkdownTableBody>{children}</MarkdownTableBody>
                              ),
                              tr: MarkdownTableRowStyled,
                              td: ({ children, ...restProps }) => (
                                <MarkdownTableCellStyled scope="row" {...restProps}>
                                  {children}
                                </MarkdownTableCellStyled>
                              ),
                              th: MarkdownTableCellStyled,
                              figure: ({ children }) => <>{children}</>,
                              div: ({ children, ...restProps }) => {
                                const { className } = restProps;

                                if (className === 'raw-html-embed') {
                                  return <>{children}</>;
                                }

                                return <div {...restProps}>{children}</div>;
                              },
                            }}
                          >
                            {sectionAttr.descriptionEnhanced}
                          </MarkdownTextWithHtml>
                        </Stack>
                      ) : null}
                    </Stack>
                  </TextColumnContainerDynamic>
                );
              })}
            </Grid>

            {attributes.callToAction.data ? (
              <CallToActionDynamic {...attributes.callToAction.data.attributes} />
            ) : null}
          </Grid>
        </Container>

        {/* <RelatedPosts data={blogData} /> */}
      </>
    );
  }

  return null;
};

export default BlogDetailPage;

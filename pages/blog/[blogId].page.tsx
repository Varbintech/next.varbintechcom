import type { GetStaticProps, GetStaticPaths } from 'next';
import dynamic from 'next/dynamic';

import type { ReactElement } from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Settings } from '../../constants/settings';

import HeroDetails from '../../components/hero/HeroDetails';
import ImagesColumn from '../../components/common/images-column/ImagesColumn';
import TableOfContent from '../../components/common/table-of-content/TableOfContent';
import {
  MarkdownText,
  MarkdownLink,
  MarkdownList,
  MarkdownListItem,
  MarkdownParagraph,
  MarkdownCode,
} from '../../components/common/typography/Markdown';

const TextColumnContainerDynamic = dynamic(() =>
  import('../../components/common/text-column/TextColumn').then(mod => mod.TextColumnContainer),
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
  } = props;

  if (attributes) {
    return (
      <>
        <HeroDetails
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

        <Container maxWidth="lg" sx={{ marginTop: { md: '64px' }, marginBottom: { md: '64px' } }}>
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
                slug={attributes.slug}
              />
            </Grid>

            <Grid container item direction="column" xs={12} md={9}>
              {attributes.sections.data.map(({ id: sectionId, attributes: sectionAttr }, index) => {
                return (
                  <TextColumnContainerDynamic key={`${sectionId}-${index}`}>
                    <Stack direction="column">
                      {sectionAttr.showTitle ? (
                        <Typography
                          variant={sectionAttr.headingLevel}
                          marginBottom={sectionAttr.description ? 2 : 0}
                          sx={{
                            scrollMarginTop: index === 0 ? '402px' : '202px',
                          }}
                          className="section"
                        >
                          {sectionAttr.name}
                        </Typography>
                      ) : null}

                      {sectionAttr.description ? (
                        <Stack direction="column" spacing={2} marginBottom={2}>
                          <MarkdownText
                            components={{
                              a: MarkdownLink,
                              h2: ({ children }) => {
                                const id = children
                                  ?.toString()
                                  .toLocaleLowerCase()
                                  .replace(/ /g, '-');

                                return (
                                  <Typography
                                    variant="h2"
                                    id={id}
                                    sx={{
                                      scrollMarginTop: index === 0 ? '402px' : '202px',
                                    }}
                                    className="section"
                                  >
                                    {children}
                                  </Typography>
                                );
                              },
                              h3: ({ children }) => {
                                const id = children
                                  ?.toString()
                                  .toLocaleLowerCase()
                                  .replace(/ /g, '-');

                                return (
                                  <Typography
                                    variant="h3"
                                    id={id}
                                    sx={{
                                      scrollMarginTop: index === 0 ? '402px' : '202px',
                                    }}
                                    className="section"
                                  >
                                    {children}
                                  </Typography>
                                );
                              },
                              h4: ({ children }) => {
                                const id = children
                                  ?.toString()
                                  .toLocaleLowerCase()
                                  .replace(/ /g, '-');

                                return (
                                  <Typography
                                    variant="h4"
                                    id={id}
                                    sx={{
                                      scrollMarginTop: index === 0 ? '402px' : '202px',
                                    }}
                                    className="section"
                                  >
                                    {children}
                                  </Typography>
                                );
                              },
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
                                    <ImagesColumn
                                      data={{ label: 'IMAGE', imageSection: projectsImages }}
                                    />
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
                            }}
                          >
                            {sectionAttr.description}
                          </MarkdownText>
                        </Stack>
                      ) : null}
                    </Stack>
                  </TextColumnContainerDynamic>
                );
              })}
            </Grid>

            {/* <Grid container item direction="column" xs={12} md={9}>
              {data.blogDetails.map((item, index) => {
                if (item.label === 'TEXT') {
                  return <TextColumn key={index} data={item} />;
                }
                if (item.label === 'IMAGE') {
                  return <ImagesColumn key={index} data={item} />;
                }

                return null;
              })}
            </Grid> */}
          </Grid>
        </Container>

        {/* <RelatedPosts data={blogData} /> */}
      </>
    );
  }

  return null;
};

export default BlogDetailPage;

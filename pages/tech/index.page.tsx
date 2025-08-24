import { styled } from '@mui/material/styles';

import type { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

const BoxDynamic = dynamic(() => import('@mui/material/Box'));
const ContainerDynamic = dynamic(() => import('@mui/material/Container'));
const TypographyDynamic = dynamic(() => import('@mui/material/Typography'));

import { useGenerateEventGa } from '../../hooks/use-generate-event-ga';

import { СubeContainerStyled } from '../../components/common/icon-rectangle-box/styled-components';

const SectionContainerStyled = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  padding: '58px 0 30px',
  backgroundColor: theme.palette.primary.light,

  [theme.breakpoints.up('md')]: {
    paddingTop: '112px',
  },
}));

const СubeContainerTechStyled = styled(СubeContainerStyled)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

import { convertStrapiQuoteToFeedback } from '../../components/common/feedback/Feedback';

const ImportantUpdateDynamic = dynamic(
  () => import('../../components/common/important-update/ImportantUpdate'),
  {
    loading: () => <p>Loading...</p>,
  },
);
const ServicesDynamic = dynamic(() => import('../../components/services/Services'));
const FeedbackDynamic = dynamic(() => import('../../components/common/feedback/Feedback'));
const FeedbackContainer2Dynamic = dynamic(() =>
  import('../../components/common/feedback/Feedback').then(mod => mod.FeedbackContainer2),
);
const ButtonLinkDynamic = dynamic(() => import('../../components/common/buttons/ButtonLink'));

import {
  TextColumnListStyled,
  TextColumnListItem,
} from '../../components/common/text-column/TextColumn';
import ChipTech, { ChipTechIcon } from '../../components/common/chip/ChipTech';
import ChipTechGroup from '../../components/common/chip/ChipTechGroup';
import RectangleBoxIcon from '../../components/common/icon-rectangle-box/RectangleBoxIcon';
import HeroTech from '../../components/hero/HeroTech';
import HeadTech from '../../components-pages/head/HeadCaseStudyDetails';

import { MetaData } from '../../constants/meta';

import { getStaticPropsTechnologies, TechnologiesStaticProps } from '../../utils/api.tech';

import JsonLdWebPage from '../../components/json-ld/WebPage';
import JsonLdWebSite from '../../components/json-ld/WebSite';
import JsonLdWebBreadcrumb from '../../components/json-ld/Breadcrumb';
import JsonLdArticle from '../../components/json-ld/Article';

export const getStaticProps: GetStaticProps<TechnologiesStaticProps> = async () =>
  await getStaticPropsTechnologies();

export default function TechPage({ data, hireEngineersLinks }: TechnologiesStaticProps) {
  const { technologies, lastCaseStudy, services, feedback } = data;

  const handleLinkClick = useGenerateEventGa('link');

  return (
    <>
      <HeadTech
        title="Tech & tools, high-impact for E-Commerce & SaaS solutions."
        description="Get expert E-Commerce & SaaS development with Varbintech. Specializing in React, Angular, and Next.js."
        keywords="Front-end development outsourcing, React development services, Angular front-end solutions, Responsive web design services, Custom front-end development, Front-end technology stack, JavaScript framework expertise, Outsourced front-end development for startups, Professional Next.js developers for hire, E-Commerce development, SaaS development"
        image={MetaData.Image}
        imageAlt={MetaData.ImageAlt}
        imageWidth={1200}
        imageHeight={630}
        ogUrl={`${MetaData.Url}/tech`}
      />

      <JsonLdWebSite />
      <JsonLdWebPage
        slug="/tech"
        description={`Get expert E-Commerce & SaaS development with ${MetaData.IndexAuthor}. Specializing in React, Angular, and Next.js.`}
        name={`Tech & tools, high-impact for E-Commerce & SaaS solutions. | ${MetaData.IndexAuthor}`}
      />
      <JsonLdWebBreadcrumb hireEngineersLinks={hireEngineersLinks} />
      <JsonLdArticle
        slug="/tech"
        description={`Get expert E-Commerce & SaaS development with ${MetaData.IndexAuthor}. Specializing in React, Angular, and Next.js.`}
        headline={`Tech & tools, high-impact for E-Commerce & SaaS solutions. | ${MetaData.IndexAuthor}`}
        datePublished={new Date().toISOString()}
        dateModified={new Date().toISOString()}
        authors={{
          name: MetaData.IndexAuthor,
          url: MetaData.Url,
        }}
        mainEntityOfPage={`${MetaData.Url}/tech`}
        type="Article"
        image={MetaData.Image}
      />

      <>
        <HeroTech
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
                text="We posted a new case study:"
                linkText="Enjoy the reading here"
                linkUrl={`/case-studies/${lastCaseStudy.attributes.slug}`}
                labelText="new"
              />
            </BoxDynamic>
          }
        />

        <СubeContainerTechStyled>
          <RectangleBoxIcon />
        </СubeContainerTechStyled>

        <ContainerDynamic
          maxWidth={false}
          disableGutters
          sx={{
            paddingInline: {
              xs: 2,
              md: 0,
            },
            mb: {
              md: '-42px',
              lg: '-72px',
            },
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
              <FeedbackDynamic {...convertStrapiQuoteToFeedback(feedback[2])} />

              <ButtonLinkDynamic
                href={`/case-studies/${feedback[2].attributes.caseStudySlug}`}
                id={`linkTechReadFull${feedback[2].id}`}
                aria-label={`Link to case study page: ${feedback[2].attributes.caseStudyTitle}`}
                onClick={handleLinkClick}
                sx={{
                  alignSelf: 'center',
                }}
              >
                Read full case study
              </ButtonLinkDynamic>
            </BoxDynamic>
          </FeedbackContainer2Dynamic>
        </ContainerDynamic>

        <SectionContainerStyled sx={{ mt: '-42px' }}>
          <ContainerDynamic maxWidth="lg">
            <BoxDynamic
              paddingLeft={2}
              paddingRight={2}
              marginBottom={{
                xs: 4,
                md: 6,
              }}
            >
              <TypographyDynamic
                variant="h2"
                sx={{
                  marginBottom: {
                    xs: 2,
                    md: 3,
                  },
                  fontSize: { xs: '2rem', lg: '2.5rem' },
                }}
              >
                Our tech and tools at a glance
              </TypographyDynamic>

              <TypographyDynamic
                sx={{
                  marginBottom: {
                    xs: 2,
                    md: 3,
                  },
                  maxWidth: '780px',
                }}
              >
                Our bold experience, combined with hands-on expertise in front-end development,
                allows us to deliver high-quality solutions for your project of any shape and size.
              </TypographyDynamic>

              <TypographyDynamic sx={{ marginBottom: 1 }}>
                <strong>Client satisfaction stats</strong>:
              </TypographyDynamic>

              <TextColumnListStyled>
                <TextColumnListItem>100% of clients who would recommend us</TextColumnListItem>
                <TextColumnListItem>
                  75% of our clients become the long-term clients
                </TextColumnListItem>
                <TextColumnListItem>
                  All projects are finished with five stars feedback
                </TextColumnListItem>
              </TextColumnListStyled>
            </BoxDynamic>

            {technologies.length
              ? technologies.map((tech, index) => {
                  const [techField, list] = tech;

                  return (
                    <BoxDynamic
                      key={`${techField}-${index}`}
                      paddingLeft={2}
                      paddingRight={2}
                      marginBottom={{
                        xs: 4,
                        md: 6,
                      }}
                    >
                      <TypographyDynamic
                        variant="h2"
                        sx={{
                          marginBottom: {
                            xs: 3,
                            md: 4,
                          },
                          fontSize: { xs: '2rem', lg: '2.5rem' },
                        }}
                      >
                        {techField}
                      </TypographyDynamic>

                      <ChipTechGroup component="nav">
                        {list.map((techItem, index) => (
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
                  );
                })
              : null}
          </ContainerDynamic>
        </SectionContainerStyled>

        <СubeContainerTechStyled>
          <RectangleBoxIcon />
        </СubeContainerTechStyled>

        <ContainerDynamic
          maxWidth={false}
          disableGutters
          sx={{
            paddingInline: {
              xs: 2,
              md: 0,
            },
            mb: {
              md: '-42px',
              lg: '-72px',
            },
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
              <FeedbackDynamic {...convertStrapiQuoteToFeedback(feedback[1])} />

              <ButtonLinkDynamic
                href={`/case-studies/${feedback[1].attributes.caseStudySlug}`}
                id={`linkTechReadFull${feedback[1].id}`}
                aria-label={`Link to case study page: ${feedback[1].attributes.caseStudyTitle}`}
                onClick={handleLinkClick}
                sx={{
                  alignSelf: 'center',
                }}
              >
                Read full case study
              </ButtonLinkDynamic>
            </BoxDynamic>
          </FeedbackContainer2Dynamic>
        </ContainerDynamic>

        <BoxDynamic mt="-42px">
          <ServicesDynamic data={services} />
        </BoxDynamic>

        <СubeContainerTechStyled>
          <RectangleBoxIcon />
        </СubeContainerTechStyled>

        <ContainerDynamic
          maxWidth={false}
          disableGutters
          sx={{
            paddingInline: {
              xs: 2,
              md: 0,
            },
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
              <FeedbackDynamic {...convertStrapiQuoteToFeedback(feedback[0])} />

              <ButtonLinkDynamic
                href={`/case-studies/${feedback[0].attributes.caseStudySlug}`}
                id={`linkTechReadFull${feedback[0].id}`}
                aria-label={`Link to case study page: ${feedback[0].attributes.caseStudyTitle}`}
                onClick={handleLinkClick}
                sx={{
                  alignSelf: 'center',
                }}
              >
                Read full case study
              </ButtonLinkDynamic>
            </BoxDynamic>
          </FeedbackContainer2Dynamic>
        </ContainerDynamic>
      </>
    </>
  );
}

/* import { useRouter } from 'next/router'; */
import type { GetStaticProps } from 'next';
import Head from 'next/head';

import Container from '@mui/material/Container';

/* import { useWindowLocation } from '../../hooks/use-window-location'; */

import { Settings } from '../../constants/settings';
import { MetaData } from '../../constants/meta';

/* import { caseStudies } from '../../mocks/case-study'; */

import type { CaseStudyStrapi, ResponseData, CaseStudyStaticProps } from '../../models';

import HeroDetails from '../../components/hero/HeroDetails';
import ImageWrapperComponent from '../../components/common/image-wrapper/ImageWrapper';
/* import FullInfoColumn from '../../components/common/full-info-column/FullInfoColumn';
import TextColumn from '../../components/common/text-column/TextColumn';
import ImagesColumn from '../../components/common/images-column/ImagesColumn';
import Result from '../../components/common/result/Result';
import CaseStudyNextItem from '../../components/case-studies/CaseStudyNextItem'; */

import { socialShareButtons } from '../../constants/social-share-buttons';

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.API_URL}/case-studies`);
  const caseStudies = (await res.json()) as ResponseData<CaseStudyStrapi>;

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
  const res = await fetch(
    `${process.env.API_URL}/case-studies?filters[slug][$eq]=${params?.caseStudyId}&populate=*`,
  );
  const json = (await res.json()) as { data: Array<CaseStudyStrapi> };

  // order images by width
  json.data[0].attributes.heroImage.data.sort((a, b) => a.attributes.width - b.attributes.width);

  const heroImageSrcSet = json.data[0].attributes.heroImage.data.reduce(
    (acc, item) =>
      `${acc}${process.env.API_BASE_URL}${item.attributes.url} ${item.attributes.width}w, `,
    '',
  );
  const imagesWithoutLastItem = json.data[0].attributes.heroImage.data.slice(0, -1);
  const heroImageSizes =
    imagesWithoutLastItem.reduce(
      (acc, item) =>
        `${acc}(max-width: ${Math.round(item.attributes.width / 100) * 100}px) ${
          Math.round(item.attributes.width / 100) * 100
        }px, `,
      '',
    ) +
    `${
      json.data[0].attributes.heroImage.data[json.data[0].attributes.heroImage.data.length - 1]
        .attributes.width
    }px`;

  // @TODO: add special field to DB for keywords
  const keywords = json.data[0].attributes.technologies.data.reduce(
    (acc, item) => `${acc ? acc + ', ' : ''}${item.attributes.name}`,
    '',
  );
  const keywords2 = json.data[0].attributes.industries.data.reduce(
    (acc, item) => `${acc ? acc + ', ' : ''}${item.attributes.name}`,
    '',
  );

  return {
    props: {
      data: {
        ...json.data[0],
        attributes: {
          ...json.data[0].attributes,
          heroImage: {
            ...json.data[0].attributes.heroImage,
            srcSet: heroImageSrcSet,
            sizes: heroImageSizes,
            name: json.data[0].attributes.heroImage.data[0].attributes.alternativeText,
          },
          baseUrl: process.env.BASE_URL || '',
          apiBaseUrl: process.env.API_BASE_URL || '',
          keywords: `${keywords}, ${keywords2}`,
        },
      },
    },
  };
};

const CaseStudyDetailPage = (props: { data: CaseStudyStaticProps }) => {
  /* const {
    query: { caseStudyId },
    isReady,
    asPath,
  } = useRouter(); */

  const {
    data: { attributes },
  } = props;

  // console.warn('CaseStudyDetailPage: ', props.data.attributes);

  // const location = useWindowLocation(isReady);

  // const attributes = caseStudies.find(item => item.id === Number(caseStudyId));

  // const pageLink = (location?.origin && new URL(asPath, location?.origin).href) || '';

  /* const randomCaseStudy =
    caseStudies[Number(caseStudyId) + 1] ||
    caseStudies[Math.floor(Math.random() * caseStudies.length)]; */

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
          <meta itemProp="name" content={attributes.title} />
          <meta itemProp="description" content={attributes.description} />
          <meta
            itemProp="image"
            content={`${attributes.apiBaseUrl}${attributes.metaImage.data.attributes.url}`}
          />

          {/* Open Graph */}
          <meta property="og:site_name" content={MetaData.IndexAuthor} />
          <meta property="og:title" content={attributes.title} />
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
          <meta name="twitter:title" content={attributes.title} />
          <meta name="twitter:description" content={attributes.description} />
          <meta
            name="twitter:image"
            content={`${attributes.apiBaseUrl}${attributes.metaImage.data.attributes.url}`}
          />
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
            `${process.env.BASE_URL}/case-studies/${attributes.slug}`,
          )}
          isDarkTheme={Settings.DarkThemeAvailable}
        />
        <Container
          maxWidth="lg"
          sx={{
            marginTop: { xs: '-90px', md: '-160px' },
            marginBottom: { xs: '42px', md: '112px' },
          }}
        >
          <ImageWrapperComponent
            data={{
              src: '',
              name: attributes.heroImage.name,
              srcSet: attributes.heroImage.srcSet,
              sizes: attributes.heroImage.sizes,
              width: 0,
              height: 0,
            }}
            largeWithBorder
          />
        </Container>

        {/* <FullInfoColumn data={attributes.projectFullInfo} />

        <Container maxWidth="lg">
          {attributes &&
            attributes.projectDetails.map((item, index) => {
              if (item.label === 'TEXT') {
                return <TextColumn key={index} data={item} />;
              }

              if (item.label === 'IMAGE') {
                return <ImagesColumn key={index} data={item} />;
              }

              return null;
            })}
        </Container>

        <Result data={attributes} /> */}

        {/* <CaseStudyNextItem title={randomCaseStudy.projectTitle} id={randomCaseStudy.id} /> */}
      </>
    );
  }

  return null;
};

export default CaseStudyDetailPage;

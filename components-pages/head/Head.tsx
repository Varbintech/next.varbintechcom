import NextHead from 'next/head';

import { MetaData } from '../../constants/meta';

const Head = () => {
  return (
    <NextHead>
      <title>{MetaData.Title}</title>

      <meta name="description" content={MetaData.Description} />
      <meta name="keywords" content={MetaData.IndexKeywords} />
    </NextHead>
  );
};

export default Head;

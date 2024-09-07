import { getStaticPropsHireEngineersLinks } from './api.hire-engineers';

export const getStaticPropsIndex = async () => {
  const hireEngineersLinks = await getStaticPropsHireEngineersLinks();

  return {
    props: {
      className: '',
      hireEngineersLinks: hireEngineersLinks.props.data,
    },
  };
};

export const getStaticPropsBlogId = async () => {
  const hireEngineersLinks = await getStaticPropsHireEngineersLinks();

  return {
    props: {
      className: '',
      hireEngineersLinks: hireEngineersLinks.props.data,
    },
  };
};

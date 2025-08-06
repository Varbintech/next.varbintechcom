import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';

import { styled } from '@mui/material/styles';

import useLocalStorageState from 'use-local-storage-state';

import { useClientOnlyRef } from '../../hooks/use-client-only-ref';

import Head from '../head/Head';
import Navigation from '../../components/common/navigation/Navigation';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import { footerData } from '../../constants/footer-data';

import type { HireEngineersLink, PolicyLink } from '../../models';

import { socialIcons } from '../../mocks/social-icons';

const DynamicCookiePopup = dynamic(
  () => import('../../components/common/cookie-popup/CookiePopup'),
);

const MainStyled = styled('main')`
  &.overflow-hidden {
    overflow: hidden;
  }
`;

interface LayoutProps {
  children: ReactNode & {
    props: {
      hireEngineersLinks: Array<HireEngineersLink>;
      policyLinks: Array<PolicyLink>;
    };
  };
  className?: string;
  hireEngineersLinks: Array<HireEngineersLink>;
  policyLinks: Array<PolicyLink>;
}

function Layout(props: LayoutProps) {
  const { children, className, hireEngineersLinks, policyLinks } = props;

  const [acceptsCookies, setAcceptsCookies] = useLocalStorageState('varbintech-accepts-cookies', {
    defaultValue: false,
  });

  const container = useClientOnlyRef('#main-container');

  const handleClick = (): void => {
    setAcceptsCookies(true);
  };

  return (
    <div id="main-container">
      <Head />

      <Navigation />

      {!acceptsCookies && container ? (
        <DynamicCookiePopup anchorEl={container} onConfirm={handleClick} />
      ) : null}

      <MainStyled className={className}>
        {children}

        <Contact data={socialIcons} />
      </MainStyled>

      <Footer
        data={{
          ...footerData,
          hireEngineersLinks,
          policyLinks,
        }}
      />
    </div>
  );
}

export default Layout;

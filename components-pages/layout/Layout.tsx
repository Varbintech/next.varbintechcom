import dynamic from 'next/dynamic';

import useLocalStorageState from 'use-local-storage-state';

import { useClientOnlyRef } from '../../hooks/use-client-only-ref';

import type { ReactChildren } from '../../models/common';

import Head from '../head/Head';
import Navigation from '../../components/common/navigation/Navigation';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';

import { socialIcons } from '../../mocks/social-icons';
import { footerData } from '../../mocks/footer-data';

const DynamicCookiePopup = dynamic(
  () => import('../../components/common/cookie-popup/CookiePopup'),
);

function Layout({ children }: ReactChildren) {
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

      <main>
        {children}

        <Contact data={socialIcons} />
        <Footer data={footerData} />
      </main>
    </div>
  );
}

export default Layout;

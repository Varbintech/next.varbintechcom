import type { ReactChildren } from '../../models/common';

import Head from './Head';
import Navigation from '../../components/common/navigation/Navigation';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';

import { socialIcons } from '../../mocks/social-icons';
import { footerData } from '../../mocks/footer-data';

function Layout({ children }: ReactChildren) {
  return (
    <>
      <Head />
      <Navigation />

      <main>
        {children}

        <Contact data={socialIcons} />
        <Footer data={footerData} />
      </main>
    </>
  );
}

export default Layout;

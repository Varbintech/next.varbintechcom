import { Head } from '@react-email/head';

import type { ReactChildren } from '../../models/common';

export const EmailHead = ({ children }: ReactChildren) => {
  return (
    <Head>
      <title>{children}</title>
    </Head>
  );
};

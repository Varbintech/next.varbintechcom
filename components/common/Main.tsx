import { roboto } from '../../constants/roboto-latin';

import type { ReactChildren } from '../../models/common';

const Main = ({ children }: ReactChildren) => {
  return (
    <main className={`${roboto.className}`}>
      {children}
    </main>
  );
};

export default Main;

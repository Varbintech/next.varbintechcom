import type { ReactChildren } from '../../models/common';

const Main = ({ children }: ReactChildren) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default Main;

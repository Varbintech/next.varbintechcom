import type { ReactNode } from 'react';

import { UpdateLabelContainer } from './styled-components';

interface UpdateLabelProps {
  children: ReactNode;
  className?: string;
}

const UpdateLabel = ({ children, className }: UpdateLabelProps) => {
  return (
    <UpdateLabelContainer className={className}>
      <span>{children}</span>
    </UpdateLabelContainer>
  );
};

export default UpdateLabel;

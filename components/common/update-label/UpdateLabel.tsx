import type { ReactChildren } from '../../../models/common';

import { UpdateLabelContainer } from './styled-components';

const UpdateLabel = ({ children }: ReactChildren) => {
  return <UpdateLabelContainer>{children}</UpdateLabelContainer>;
};

export default UpdateLabel;

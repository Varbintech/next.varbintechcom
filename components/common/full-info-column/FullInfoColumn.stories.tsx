import { storiesOf } from '@storybook/react';

import { caseStudies } from '../../../mocks/case-study';

import FullInfoColumn from './FullInfoColumn';

storiesOf('App/CommonComponents/FullInfoColumn', module)
  .add('Default', () => <FullInfoColumn data={caseStudies[0].projectFullInfo} />);

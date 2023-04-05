import { storiesOf } from '@storybook/react';

import { caseStudies } from '../../../mocks/case-study';

import ImagesColumn from './ImagesColumn';

storiesOf('App/CommonComponents/ImagesColumn', module).add('Default', () => (
  <ImagesColumn data={caseStudies[0].projectDetails.find(item => item.label === 'IMAGE')} />
));

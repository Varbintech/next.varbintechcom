import { storiesOf } from '@storybook/react';

import { caseStudies } from '../../../mocks/case-study';

import TextColumn from './TextColumn';

storiesOf('App/CommonComponents/TextColumn', module).add('Default', () => (
  <TextColumn data={caseStudies[0].projectDetails.find(item => item.label === 'TEXT')} />
));

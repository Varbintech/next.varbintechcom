import { storiesOf } from '@storybook/react';

import type { ProjectTextDetails } from '../../../models';

import { caseStudies } from '../../../mocks/case-study';

import TextColumn from './TextColumn';

const data = caseStudies[0].projectDetails.find(item => item.label === 'TEXT') as ProjectTextDetails;

storiesOf('App/CommonComponents/TextColumn', module).add('Default', () => (
  <TextColumn data={data} />
));

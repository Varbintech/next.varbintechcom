import { storiesOf } from '@storybook/react';

import type { ProjectImageDetails } from '../../../models';

import { caseStudies } from '../../../mocks/case-study';

import ImagesColumn from './ImagesColumn';

const data = caseStudies[0].projectDetails.find(item => item.label === 'IMAGE') as ProjectImageDetails;

storiesOf('App/CommonComponents/ImagesColumn', module).add('Default', () => (
  <ImagesColumn data={data} />
));

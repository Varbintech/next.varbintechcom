import { storiesOf } from '@storybook/react';

import { caseStudies } from '../../../mocks/case-study';

import Chip from './Chip';
import ChipGroup from './ChipGroup';

storiesOf('App/CommonComponents/Chip', module)
  .add('chip link', () => <Chip label="tag.name" component="a" href="#" />)
  .add('chip text', () => <Chip label="tag.name" />)
  .add('chip group', () => <ChipGroup data={caseStudies[0].projectTags} />);

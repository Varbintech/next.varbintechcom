import { storiesOf } from '@storybook/react';

import type { ProjectTextDetails } from '../../../models';

import { caseStudies } from '../../../mocks/case-study';

import TextColumn, { TextColumnWithSideTitle, TextColumnList } from './TextColumn';

const data = caseStudies[0].projectDetails.find(
  item => item.label === 'TEXT',
) as ProjectTextDetails;

storiesOf('App/CommonComponents/TextColumn', module)
  .add('Default', () => <TextColumn data={data} />)
  .add('With Side Title (left)', () => <TextColumnWithSideTitle data={data} titlePosition="left" />)
  .add('With Side Title (right)', () => (
    <TextColumnWithSideTitle data={data} titlePosition="right" />
  ))
  .add('List', () => (
    <TextColumnList
      items={[
        'Lorem ipsum dolor sit amet consectetur adipisicing elit 1',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit 2',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit 3',
      ]}
    />
  ));

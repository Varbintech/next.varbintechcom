import { storiesOf } from '@storybook/react';

import Feedback from './Feedback';

import { caseStudies } from '../../../mocks/case-study';

const feedback = caseStudies[0].feedback;

storiesOf('App/CommonComponents/Feedback', module).add('Default', () => {
  if (feedback) {
    return <Feedback {...feedback} />;
  }

  return <>No Feedback</>;
});

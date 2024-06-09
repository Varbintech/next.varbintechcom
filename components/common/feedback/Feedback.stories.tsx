import { storiesOf } from '@storybook/react';

import Feedback from './Feedback';

import { caseStudies } from '../../../mocks/case-study';

const feedback = caseStudies[0].feedback;
const feedbackWithoutLinkedIn = {
  ...caseStudies[1].feedback,
  linkedInLink: '',
  websiteLink: 'https://example.com',
};

storiesOf('App/CommonComponents/Feedback', module)
  .add('Default', () => {
    if (feedback) {
      return <Feedback {...feedback} />;
    }

    return <>No Feedback</>;
  })
  .add('Without LinkedIn', () => {
    if (feedbackWithoutLinkedIn) {
      return <Feedback {...feedbackWithoutLinkedIn} />;
    }

    return <>No Feedback</>;
  });

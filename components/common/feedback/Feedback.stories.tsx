import { storiesOf } from '@storybook/react';

import Feedback from './Feedback';

storiesOf('App/CommonComponents/Feedback', module).add('Default', () => (
  <Feedback
    text="The latest version of the portal looks great and works great. Awesome job"
    name="name"
    company="company"
    companyName="companyName"
    image={undefined}
    companyLinkHref="https://www.tin.info"
    linkedInLink="https://www.linkedin.com/in/gene-foo-38520239" />
));

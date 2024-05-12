import { storiesOf } from '@storybook/react';

import ImportantUpdate from './ImportantUpdate';

storiesOf('App/CommonComponents/ImportantUpdate', module).add('default', () => (
  <ImportantUpdate
    text="We posted a new case study "
    linkText="Enjoy the reading here"
    linkUrl="/case-studies/better-product-management-with-okr-for-jira-extension"
  />
));

import { storiesOf } from '@storybook/react';

import Hero from './Hero';

storiesOf('App/CommonComponents/Hero', module).add('Default', () => (
  <Hero title="Some awesome title" subtitle="Some awesome subtitle" />
));

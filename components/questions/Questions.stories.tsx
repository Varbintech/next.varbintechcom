import { storiesOf } from '@storybook/react';

import { questions } from 'mocks/questions';

import Questions from './Questions';

storiesOf('App/Components/Questions', module)
  .add('default', () => <Questions data={questions} />)
  .add('empty', () => <Questions data={[]} />)
  .add('with container', () => (
    <Questions.Container>
      <Questions data={questions} />
    </Questions.Container>
  ))
  .add('with container custom title & subtitle', () => (
    <Questions.Container title="FAQ" subtitle="">
      <Questions data={questions} />
    </Questions.Container>
  ))
  .add('with container no title & subtitle', () => (
    <Questions.Container title="" subtitle="">
      <Questions data={questions} />
    </Questions.Container>
  ));

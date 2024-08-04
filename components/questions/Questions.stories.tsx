import { storiesOf } from '@storybook/react';

import { questions } from 'mocks/questions';

import Questions from './Questions';
import QuestionsContainer from './QuestionsContainer';

storiesOf('App/Components/Questions', module)
  .add('default', () => <Questions data={questions} />)
  .add('empty', () => <Questions data={[]} />)
  .add('with custom expandedId', () => <Questions data={questions} expandedId={2} />)
  .add('with container', () => (
    <QuestionsContainer>
      <Questions data={questions} />
    </QuestionsContainer>
  ))
  .add('with container custom title & subtitle', () => (
    <QuestionsContainer title="FAQ" subtitle="">
      <Questions data={questions} />
    </QuestionsContainer>
  ))
  .add('with container no title & subtitle', () => (
    <QuestionsContainer title="" subtitle="">
      <Questions data={questions} />
    </QuestionsContainer>
  ));

import { storiesOf } from '@storybook/react';

import { styled } from '@mui/material/styles';

import Logos from './Logos';

const LogosContainer = styled('div')({
  position: 'relative',
  height: '500px',
});

storiesOf('App/CommonComponents/Hero/Logos', module)
  .addDecorator(Story => (
    <LogosContainer>
      <Story />
    </LogosContainer>
  ))
  .add('Default', () => <Logos />);

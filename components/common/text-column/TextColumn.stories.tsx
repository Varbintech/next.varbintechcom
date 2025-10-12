import { storiesOf } from '@storybook/react';

import {
  TextColumnList,
  TextColumnContainer,
  TextColumnListItem,
  TextColumnListStyled,
} from './TextColumn';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

storiesOf('App/CommonComponents/TextColumn', module)
  .add('List', () => (
    <TextColumnListStyled>
      {items.map((item, index) => (
        <TextColumnListItem key={index}>{item}</TextColumnListItem>
      ))}
    </TextColumnListStyled>
  ))
  .add('List from props', () => <TextColumnList items={items} />)
  .add('Container', () => (
    <TextColumnContainer>
      <div>
        <h3>Column 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </div>
      <div>
        <h3>Column 2</h3>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>
    </TextColumnContainer>
  ));

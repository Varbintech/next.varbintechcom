import { storiesOf } from '@storybook/react';

import {
  MarkdownText,
  MarkdownLink,
  MarkdownList,
  MarkdownListItem,
  MarkdownParagraph,
} from './Markdown';

storiesOf('App/CommonComponents/MarkdownText', module)
  .add('Default', () => <MarkdownText>Hello, world!</MarkdownText>)
  .add('With links', () => (
    <MarkdownText>
      {`[Jira app](https://marketplace.atlassian.com/apps/1221776/okr-for-jira) that allows users to simply create objectives, add key results, connect them to Jira issues, and automatically track progress. \n`}
    </MarkdownText>
  ))
  .add('With lists', () => (
    <MarkdownText>
      {`- 13 months\n- 5 dedicated developers\n- 100 end-to-end tests covering 20+ versions of Jira\n`}
    </MarkdownText>
  ))
  .add('With custom components', () => (
    <MarkdownText
      components={{
        a: MarkdownLink,
        ul: MarkdownList,
        li: MarkdownListItem,
        p: MarkdownParagraph,
      }}
    >
      {`[Jira app](https://marketplace.atlassian.com/apps/1221776/okr-for-jira) that allows users to simply create objectives, add key results, connect them to Jira issues, and automatically track progress. \n- 13 months\n- 5 dedicated developers\n- 100 end-to-end tests covering 20+ versions of Jira\n
      `}
    </MarkdownText>
  ));

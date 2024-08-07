import type { Collection, FAQ } from '../models';

export const questions: Array<Collection<FAQ>> = [
  {
    id: 0,
    attributes: {
      title: 'Why should I choose VT?',
      description: `Flexible rendering and caching options, including [Incremental Static Regeneration (ISR)](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration), on a per-page level. Flexible rendering and caching options, including Incremental Static Regeneration (ISR), on a per-page level.`,
    },
  },
  {
    id: 1,
    attributes: {
      title: 'I like your works, how do we start a project?',
      description: `Flexible rendering and caching options:
* [Incremental Static Regeneration (ISR)](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration), on a per-page level.
* Flexible rendering and caching options, including Incremental Static Regeneration (ISR), on a per-page level.`,
    },
  },
  {
    id: 2,
    attributes: {
      title: 'What info is required of us to get an estimate?',
      description: `Flexible rendering and caching options, including **Incremental Static Regeneration (ISR)**, on a per-page level. Flexible rendering and caching options, including _Incremental Static Regeneration (ISR)_, on a per-page level.`,
    },
  },
  {
    id: 3,
    attributes: {
      title: 'Where can I find your warranty policy?',
      description: `Flexible rendering and caching options, including Incremental Static Regeneration (ISR), on a per-page level.
> Flexible rendering and caching options, including Incremental Static Regeneration (ISR), on a per-page level.
***
\`\`\`javascript
function test() {
  console.log("notice the blank line before this function?");
  }
\`\`\`
`,
    },
  },
  {
    id: 4,
    attributes: {
      title: 'Can I use multiple discount codes?',
      description: `
###### Flexible rendering and caching options
Including Incremental Static Regeneration (ISR), on a per-page level.

###### Flexible rendering and caching options
Including Incremental Static Regeneration (ISR), on a per-page level.`,
    },
  },
];

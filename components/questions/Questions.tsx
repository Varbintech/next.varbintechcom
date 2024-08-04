import { type SyntheticEvent, useState } from 'react';

import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import SouthIcon from '@mui/icons-material/South';

import type { FAQ, Collection } from '../../models';

import {
  MarkdownText,
  MarkdownLink,
  MarkdownList,
  MarkdownListOl,
  MarkdownListItem,
  MarkdownParagraph,
} from '../common/typography/Markdown';

interface QuestionsProps {
  data: Array<Collection<FAQ>>;
  expandedId?: number;
}

function Questions({ data, expandedId }: QuestionsProps) {
  const [expanded, setExpanded] = useState<string | false>(
    expandedId ? `panel${expandedId}` : 'panel0',
  );

  const handleChange = (panel: string) => (_event: SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {data.map(question => {
        const {
          attributes: { title, description },
          id,
        } = question;

        return (
          <Accordion
            key={id}
            expanded={expanded === `panel${id}`}
            onChange={handleChange(`panel${id}`)}
            disableGutters
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <AccordionSummary
              aria-controls={`panel-content${id}`}
              id={`panel-header${id}`}
              expandIcon={<SouthIcon fontSize="small" />}
            >
              <Typography variant="h5" itemProp="name">
                {title}
              </Typography>
            </AccordionSummary>

            <AccordionDetails
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <div itemProp="text">
                <MarkdownText
                  components={{
                    a: ({ children, href, ...restProps }) => {
                      if (href?.includes('@')) {
                        return (
                          <MarkdownLink href={`mailto:${href}`} {...restProps}>
                            {children}
                          </MarkdownLink>
                        );
                      }

                      return (
                        <MarkdownLink href={href} {...restProps}>
                          {children}
                        </MarkdownLink>
                      );
                    },
                    ul: MarkdownList,
                    ol: MarkdownListOl,
                    li: MarkdownListItem,
                    p: MarkdownParagraph,
                    h3: ({ children }) => <Typography variant="h3">{children}</Typography>,
                    h4: ({ children }) => <Typography variant="h4">{children}</Typography>,
                    h6: ({ children }) => <Typography variant="h6">{children}</Typography>,
                  }}
                >
                  {description}
                </MarkdownText>
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
}

export default Questions;

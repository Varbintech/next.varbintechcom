import { type PropsWithChildren, type SyntheticEvent, useState } from 'react';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import SouthIcon from '@mui/icons-material/South';

import type { Question } from '../../models';

import {
  MarkdownText,
  MarkdownLink,
  MarkdownList,
  MarkdownListOl,
  MarkdownListItem,
  MarkdownParagraph,
} from '../common/typography/Markdown';

import RectangleLeftFillIcon from '../common/icon-rectangle-left-fill/RectangleLeftFillIcon';
import RectangleIcon from '../common/icon-rectangle/RectangleIcon';

import { IconLeftContainer, IconRightContainer, PageContainer } from './styled-components';

interface QuestionsProps {
  data: Array<Question>;
}

interface QuestionsContainerProps {
  title?: string;
  subtitle?: string;
}

function Questions({ data }: QuestionsProps) {
  const [expanded, setExpanded] = useState<string | false>('panel0');

  const handleChange = (panel: string) => (_event: SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {data.map(question => {
        const { questionsTitle, questionsText, id } = question;

        return (
          <Accordion
            key={id}
            expanded={expanded === `panel${id}`}
            onChange={handleChange(`panel${id}`)}
            disableGutters
          >
            <AccordionSummary
              aria-controls={`panel-content${id}`}
              id={`panel-header${id}`}
              expandIcon={<SouthIcon fontSize="small" />}
            >
              <Typography variant="h5">{questionsTitle}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <MarkdownText
                components={{
                  a: MarkdownLink,
                  ul: MarkdownList,
                  ol: MarkdownListOl,
                  li: MarkdownListItem,
                  p: MarkdownParagraph,
                  h3: ({ children }) => <Typography variant="h3">{children}</Typography>,
                  h4: ({ children }) => <Typography variant="h4">{children}</Typography>,
                  h6: ({ children }) => <Typography variant="h6">{children}</Typography>,
                }}
              >
                {questionsText}
              </MarkdownText>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
}

const QuestionsContainer = (props: PropsWithChildren<QuestionsContainerProps>) => {
  const {
    children,
    title = "Let's see if we are a good fit.",
    subtitle = 'Top-notch experience with a proven record',
  } = props;

  return (
    <PageContainer>
      <IconRightContainer>
        <RectangleLeftFillIcon />
      </IconRightContainer>

      <IconLeftContainer>
        <RectangleIcon />
      </IconLeftContainer>

      <Container maxWidth="lg">
        {title || subtitle ? (
          <Box paddingLeft={2} paddingRight={2} maxWidth="600px" margin="auto">
            {title ? (
              <Typography
                variant="h2"
                align="center"
                sx={{ marginBottom: 1.5, fontSize: { xs: '32px', lg: '40px' } }}
              >
                {title}
              </Typography>
            ) : null}

            {subtitle ? (
              <Typography
                variant="body2"
                align="center"
                sx={{ marginBottom: { xs: '30px', md: '57px' } }}
              >
                {subtitle}
              </Typography>
            ) : null}
          </Box>
        ) : null}

        {children}
      </Container>
    </PageContainer>
  );
};

Questions.Container = QuestionsContainer;

export default Questions;

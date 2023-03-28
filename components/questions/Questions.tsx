import { type FC, type SyntheticEvent, useState } from 'react';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import SouthIcon from '@mui/icons-material/South';

import type { Question } from '../../models';

import RectangleLeftFillIcon from '../common/icon-rectangle-left-fill/RectangleLeftFillIcon';
import RectangleIcon from '../common/icon-rectangle/RectangleIcon';

import { IconLeftContainer, IconRightContainer, PageContainer } from './styled-components';

interface QuestionsProps {
  data: Array<Question>;
}

const Questions: FC<QuestionsProps> = ({ data }) => {
  const [expanded, setExpanded] = useState<string | false>('panel0');

  const handleChange = (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <PageContainer>
      <IconRightContainer>
        <RectangleLeftFillIcon />
      </IconRightContainer>
      <IconLeftContainer>
        <RectangleIcon />
      </IconLeftContainer>
      <Container maxWidth="lg">
        <Box paddingLeft={2} paddingRight={2} maxWidth="600px" margin="auto">
          <Typography
            variant="h2"
            align="center"
            sx={{ marginBottom: 1.5, fontSize: { xs: '32px', lg: '40px' } }}
          >
            Let&apos;s see if we are a good fit.
          </Typography>

          <Typography
            variant="body2"
            align="center"
            sx={{ marginBottom: { xs: '30px', md: '57px' } }}
          >
            Flexible rendering and caching options, including Incremental Static Regeneration (ISR),
            on a per-page level.
          </Typography>
        </Box>

        {data.map(question => {
          return (
            <Accordion
              key={question.id}
              expanded={expanded === 'panel' + question.id}
              onChange={handleChange('panel' + question.id)}
              disableGutters
            >
              <AccordionSummary
                aria-controls={'panel-content' + question.id}
                id={'panel-header' + question.id}
                expandIcon={<SouthIcon fontSize="small" />}
              >
                <Typography variant="h5">{question.questionsTitle}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">{question.questionsText}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Container>
    </PageContainer>
  );
};

export default Questions;

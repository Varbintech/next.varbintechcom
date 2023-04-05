import type { FC } from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckIcon from '@mui/icons-material/Check';
import ListItemText from '@mui/material/ListItemText';

import type { ProjectTextDetails } from '../../../models';

import { ListStyled } from './styled-components';

interface TextColumnProps {
  data: ProjectTextDetails;
}

const TextColumn: FC<TextColumnProps> = ({ data }) => {
  return (
    <Container maxWidth="lg" sx={{  marginBottom: 3 }}>
      <Grid container spacing={3} columns={12}>
        <Grid container item direction="column" xs={12} md={3}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
            {data.name}
          </Typography>
        </Grid>
        <Grid container item direction="column" xs={12} md={9}>
          {data.textSection.map((item, index) => {
            return (
              <Box key={index} marginBottom={4}>
                {item.title ? (
                  <Typography variant="h3" marginBottom={2}>
                    {item.title}
                  </Typography>
                ) : null}
                {item.text ? (<Typography variant="body2">{item.text}</Typography>) : null}
                {item.textList ?  (
                  <ListStyled>
                    {item.textList.map((item, index) => {
                      return (
                        <ListItem key={index}>
                          <ListItemIcon>
                            <CheckIcon />
                          </ListItemIcon>

                          <ListItemText primary={item} />
                        </ListItem>
                      );
                    })}
                  </ListStyled>
                ): null}
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default TextColumn;

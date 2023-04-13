import type { FC } from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import type { ProjectFullInfo } from '../../../models';

interface FullInfoColumnProps {
  data: Array<ProjectFullInfo>;
}

const FullInfoColumn: FC<FullInfoColumnProps> = ({ data }) => {
  return (
    <Container maxWidth="lg" sx={{ marginBottom: { xs: '57px', md: '112px' } }}>
      <Grid container columns={12} spacing={1}>
        {data.map((infoItem, index) => {
          return (
            <Grid
              key={index}
              container
              item
              direction="column"
              xs={infoItem.name === 'Technologies' ? 12 : 6}
              md={infoItem.name === 'Technologies' ? 6 : 3}
              lg={infoItem.name === 'Technologies' ? 4 : 2}
              sx={{ marginBottom: { xs: 2, md: 4 } }}
            >
              <Typography variant="body2" component="h4" marginBottom={0.5}>
                {infoItem.name}
              </Typography>
              {infoItem.name === 'Technologies' ? (
                <Grid container columns={12}>
                  {infoItem.description.map((item, index) => {
                    return (
                      <Grid key={index} container item direction="column" xs={6}>
                        <Typography fontWeight="500">{item}</Typography>
                      </Grid>
                    );
                  })}
                </Grid>
              ) : (
                <>
                  {infoItem.description.map((item, index) => {
                    return (
                      <Typography key={index} fontWeight="500">
                        {item}
                      </Typography>
                    );
                  })}
                </>
              )}
            </Grid>
          );
        })}
      </Grid>

      <Divider sx={{ margin: { xs: '36px 0 22px', md: '74px 0 22px' } }} />
    </Container>
  );
};

export default FullInfoColumn;

import type { FC } from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';

import { PricingPlan } from '../../models';

import Button from '../../components/common/buttons/Button';
import Link from '../../components/common/link/Link';

import { PlanItemContainer, ListStyled, BestChoiceContainer } from './styled-components';

const PlanItem: FC<{ data: PricingPlan }> = ({ data }) => {
  const { planTitle, planPrice, planSavePrice, planflag, planBenefits } = data;

  return (
    <PlanItemContainer flag={planflag}>
      <Stack textAlign="center">
        {planflag === 'QUARTER' ? <BestChoiceContainer>Best choice</BestChoiceContainer> : null}

        <Typography className="plan-title">{planTitle}</Typography>
        <Typography variant="h3">${planPrice}</Typography>
        <Typography variant="body2" textTransform="uppercase" mb={2.75}>
          You can Save ${planSavePrice}
        </Typography>
        {planflag === 'QUARTER' ? (
          <Button href="#" sx={{ mb: 2.75 }}>
            Get it now
          </Button>
        ) : (
          <Button href="#" variant="outlined" sx={{ mb: 2.75 }}>
            Get it now
          </Button>
        )}
        <Link href="#link" underline="always" variant="caption">
          Have a look our previous projects
        </Link>
      </Stack>

      <Divider orientation="horizontal" sx={{ margin: '30px -24px 18px' }} />

      <Box>
        <Typography variant="overline">What you will get</Typography>
        <ListStyled>
          {planBenefits.map((planBenefit, planBenefitIndex) => {
            return (
              <ListItem key={planBenefitIndex}>
                <ListItemIcon>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText primary={planBenefit} />
              </ListItem>
            );
          })}
        </ListStyled>
      </Box>
    </PlanItemContainer>
  );
};

export default PlanItem;

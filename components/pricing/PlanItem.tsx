import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';

import * as gtag from '../../lib/gtag';

import type { PricingPlanItem, FunctionWithArg, PlanType } from '../../models';

import Button from '../common/buttons/Button';
import Link, { type LinkProps } from '../common/link/Link';

import { PlanItemContainer, ListStyled, BestChoiceContainer } from './styled-components';

interface PlanItemProps {
  data: PricingPlanItem;
  onOpenCheckout: FunctionWithArg<PlanType>;
}

const PlanItem = ({ data, onOpenCheckout }: PlanItemProps) => {
  const { planTitle, planPrice, planSavePrice, planflag, planLinkProjects, planBenefits } = data;

  const additionalLinkProps: Pick<LinkProps, 'component' | 'href'> = planLinkProjects
    ? { href: planLinkProjects }
    : { component: 'div' };

  const handleClick = (planType: PlanType, planTitle: string) => {
    onOpenCheckout(planType);

    gtag.event('button_click', {
      buttonId: `getItNow${planTitle}`,
    });
  };

  return (
    <PlanItemContainer flag={planflag}>
      {planflag === 'QUARTER' ? <BestChoiceContainer>Best choice</BestChoiceContainer> : null}

      <Stack textAlign="center">
        <Typography className="plan-title">{planTitle}</Typography>

        <Typography variant="h3">${planPrice}</Typography>

        {planSavePrice ? (
          <Typography variant="body2" textTransform="uppercase" mb={2.75}>
            Save ${planSavePrice}/m
          </Typography>
        ) : (
          <Typography variant="body2" textTransform="uppercase" mb={2.75}>
            No honeypot
          </Typography>
        )}

        <Button
          id={`getItNow${planTitle}`}
          variant={planflag === 'QUARTER' ? 'contained' : 'outlined'}
          sx={{ margin: { xs: '0 16px 22px', md: '0 0 22px' } }}
          onClick={() => handleClick(planflag, planTitle)}
        >
          Get it now
        </Button>

        <Link {...additionalLinkProps} underline="always" variant="caption">
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

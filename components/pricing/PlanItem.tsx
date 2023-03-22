import type { FC, ReactNode } from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import type { PlanType } from '../../models/common';

import Button from '../../components/common/buttons/Button';
import Link from '../../components/common/link/Link';

import { PlanItemContainer } from './styled-components';

interface PlanItemProps {
  title: string;
  price: string;
  savePrice: string;
  children: ReactNode | Array<ReactNode>;
  flag: PlanType;
}

const PlanItem: FC<PlanItemProps> = props => {
  const { title, price, savePrice, flag, children } = props;

  return (
    <PlanItemContainer flag={flag}>
      <Stack textAlign="center">
        <Typography className="plan-title">{title}</Typography>
        <Typography variant="h3">${price}</Typography>
        <Typography variant="body2" textTransform="uppercase" mb={2.75}>
          You can Save ${savePrice}
        </Typography>
        {flag === 'QUARTER' ? (
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
        {children}
      </Box>
    </PlanItemContainer>
  );
};

export default PlanItem;

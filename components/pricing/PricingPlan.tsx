import dynamic from 'next/dynamic';

import { type FC, useState } from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import nodemailer, { type SendMailOptions } from 'nodemailer';

import type { PricingPlanItem } from '../../models';
import Loading from '../common/loading/Loading';

import PlanItem from './PlanItem';
import CustomServices from './CustomServices';

import { PageContainer } from './styled-components';

interface PricingPlanProps {
  data: Array<PricingPlanItem>;
}

const transporter = nodemailer.createTransport({
  pool: true,
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: 'testcupid2@gmail.com',
    pass: 'aCsas1MM_5',
  },
  secure: true,
});

const mailData = (name: string, to: string, message: string): SendMailOptions => {
  return {
    from: 'testcupid2@gmail.com',
    to,
    subject: `Message From ${name}`,
    text: message,
    html: `<div>${message}</div>`,
  };
};

const DynamicDialogCustomServices = dynamic(
  () => import('../dialogs/custom-services/DialogCustomServices'),
  {
    loading: () => <Loading />,
  },
);

const PricingPlan: FC<PricingPlanProps> = ({ data }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = (): void => {
    setOpenDialog(true);
  };

  const handleCloseDialog = (): void => {
    setOpenDialog(false);
  };

  const handleConfirmDialog = (data: { name: string; to: string; message: string }) => {
    transporter.sendMail(mailData(data.name, data.to, data.message), (err, info) => {
      if (err) {
        console.error(err);
      } else {
        console.warn(info);
      }
    });
  };

  return (
    <PageContainer id="pricing">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            marginBottom: { xs: '36px', lg: '58px' },
            fontSize: { xs: '32px', lg: '40px' },
          }}
        >
          Choose a plan that matches your project
        </Typography>

        <Grid
          container
          spacing={{ xs: 3, lg: 3.75 }}
          columns={12}
          marginBottom={{ xs: '40px', lg: '30px' }}
        >
          {data.map(pricingPlan => {
            return (
              <Grid key={pricingPlan.id} item xs={12} md={4}>
                <PlanItem data={pricingPlan} />
              </Grid>
            );
          })}
        </Grid>

        <CustomServices onOpenDialog={handleOpenDialog} />

        {openDialog ? (
          <DynamicDialogCustomServices
            onClose={handleCloseDialog}
            onConfirm={handleConfirmDialog}
          />
        ) : null}
      </Container>
    </PageContainer>
  );
};

export default PricingPlan;

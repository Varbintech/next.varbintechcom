// import dynamic from 'next/dynamic';

import { type FC, useState } from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import type { PricingPlanItem } from '../../models';
// import Loading from '../common/loading/Loading';

import DialogCustomServices from '../dialogs/custom-services/DialogCustomServices';

import PlanItem from './PlanItem';
import CustomServices from './CustomServices';

import { PageContainer } from './styled-components';

interface PricingPlanProps {
  data: Array<PricingPlanItem>;
}

/* const DynamicDialogCustomServices = dynamic(
  () => import('../dialogs/custom-services/DialogCustomServices'),
  {
    loading: () => <Loading />,
  },
); */

const PricingPlan: FC<PricingPlanProps> = ({ data }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = (): void => {
    setOpenDialog(true);
  };

  const handleCloseDialog = (): void => {
    setOpenDialog(false);
  };

  const handleConfirmDialog = (data: { name: string; to: string; message: string }) => {
    console.warn('data: ', data, process.env.NEXT_PUBLIC_RESEND_API_KEY);

    /* cache-control: public, max-age=0, must-revalidate
    content-type: application/json; charset=utf-8
    date: Mon, 10 Apr 2023 21:14:27 GMT
    etag: "108aufq08oj19"
    server: Vercel
    strict-transport-security: max-age=63072000
    x-matched-path: /api/email
    x-vercel-cache: MISS
    x-vercel-id: fra1::iad1::zcgng-1681161266899-1433f85e953e
    content-length: 45 */

    fetch('https://api.sendinblue.com/v3/smtp/email', {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        // Accept: '*/*',
        // Authorization: `Bearer re_c6Ln9eAr_KZEh2Cc3RcjqcMqX7KKXw4Mq`,
        'api-key':
          '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',
        // 'cache-control': 'public, max-age=0, must-revalidate',
        /* server: 'Vercel',
        'strict-transport-security': 'max-age=63072000',
        'x-matched-path': '/api/email',
        'content-length': '45',
        'date': 'Mon, 10 Apr 2023 21:14:27 GMT',
        'etag': '108aufq08oj19',
        'x-vercel-id': 'fra1::iad1::zcgng-1681161266899-1433f85e953e',
        'x-vercel-cache': 'MISS', */
      },
      body: JSON.stringify({
        sender: {
          name: 'Sender Alex',
          email: 'senderalex@example.com',
        },
        to: [
          {
            email: 'testmail@example.com',
            name: 'John Doe',
          },
        ],
        subject: 'Hello world',
        htmlContent:
          '<html><head></head><body><p>Hello,</p>This is my first transactional email sent from Sendinblue.</p></body></html>',
      }),
    })
      .then(response => console.warn(response))
      .catch(err => console.error(err));
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
          <DialogCustomServices onClose={handleCloseDialog} onConfirm={handleConfirmDialog} />
        ) : null}
      </Container>
    </PageContainer>
  );
};

export default PricingPlan;

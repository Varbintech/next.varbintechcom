import {
  type FC,
  type ChangeEventHandler,
  type FocusEventHandler,
  type FormEventHandler,
  useMemo,
  useState,
} from 'react';

import { render } from '@react-email/render';

import HCaptcha from '@hcaptcha/react-hcaptcha';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

import * as gtag from '../../../lib/gtag';

import type { EmptyFunction, FooterElement, JSXElement } from '../../../models/common';

import EmailTemplate from '../../../email-template/EmailTemplate';

import useCustomServiceReducer, { InitialStateKeys } from './CustomService.state';

import Button from '../../common/buttons/Button';
import TextField from '../../common/form-fields/TextField';
import DialogBase from '../base/DialogBase';

interface DialogCustomServicesProps {
  onClose: EmptyFunction;
}

const header = (): JSXElement => (
  <>
    <Typography
      variant="h3"
      sx={{ fontSize: { xs: '24px', md: '32px' }, fontWeight: 700, marginBottom: 0.25 }}
    >
      Custom services
    </Typography>

    <Typography variant="body2">Let&#39;s make a difference together</Typography>
  </>
);

const footer: FooterElement = options => {
  const { onConfirm, isDisabled } = options;

  return (
    <Button id="submitNow" fullWidth onClick={onConfirm} disabled={isDisabled}>
      Submit now
    </Button>
  );
};

const DialogCustomServices: FC<DialogCustomServicesProps> = props => {
  const { onClose } = props;
  const { state, dispatchEvent } = useCustomServiceReducer();
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [token, setToken] = useState('');
  const isDarkTheme = useTheme().palette.mode === 'dark';

  const isDisabled = useMemo(() => {
    const fields = Object.keys(state) as Array<InitialStateKeys>;

    return fields.some(field => !state[field].success) || isLoading || !token;
  }, [state, isLoading, token]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    dispatchEvent({
      type: 'change',
      fieldName: target.name,
      fieldValue: target.value,
    });
  };

  const handleBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({ target }) => {
    dispatchEvent({
      type: 'blur',
      fieldName: target.name,
      fieldValue: target.value,
    });
  };

  const handleConfirm = () => {
    setIsLoading(true);

    const name = {
      title: 'Name',
      text: state.username.value,
    };
    const email = {
      title: 'Email',
      text: state.email.value,
    };
    const request = {
      title: 'Request',
      text: state.request.value,
    };
    const html = render(
      <EmailTemplate
        headTitle="New request from varbintech.com via contact form"
        textSection={[name, email, request]}
      />,
    );

    fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify({
        name: state.username.value,
        to: state.email.value,
        message: state.request.value,
        html,
      }),
    }).then(data => {
      if (data.status === 200) {
        setShowMessage(true);
      }
    });

    gtag.event('button_click', {
      buttonId: 'submitNow',
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
  };

  return (
    <DialogBase
      header={header()}
      footer={footer({
        onConfirm: handleConfirm,
        isDisabled,
        onClose,
      })}
      onClose={onClose}
    >
      <form action="#" onSubmit={handleSubmit}>
        <Stack spacing={1}>
          <TextField
            placeholder="Name"
            name="username"
            success={state.username.success}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            placeholder="Email"
            name="email"
            type="email"
            success={state.email.success}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            multiline
            rows={4}
            placeholder="Your request"
            name="request"
            success={state.request.success}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <HCaptcha
            sitekey={
              process.env.NODE_ENV === 'development'
                ? String(process.env.NEXT_PUBLIC_HCAPTCHA_SITE_TEST_KEY)
                : String(process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY)
            }
            onVerify={setToken}
            onExpire={() => setToken('')}
            onClose={() => setToken('')}
            theme={isDarkTheme ? 'dark' : 'light'}
          />

          {isLoading && showMessage ? <Typography>👋 Your request has been sent</Typography> : null}
        </Stack>
      </form>
    </DialogBase>
  );
};

export default DialogCustomServices;

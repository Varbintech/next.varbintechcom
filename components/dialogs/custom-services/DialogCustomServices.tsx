import { type FC, type ChangeEventHandler, type FocusEventHandler, useMemo, useState } from 'react';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import type { EmptyFunction, FooterElement, JSXElement } from '../../../models/common';

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
    <Button fullWidth onClick={onConfirm} disabled={isDisabled}>
      Submit now
    </Button>
  );
};

const DialogCustomServices: FC<DialogCustomServicesProps> = props => {
  const { onClose } = props;
  const { state, dispatchEvent } = useCustomServiceReducer();
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const isDisabled = useMemo(() => {
    const fields = Object.keys(state) as Array<InitialStateKeys>;

    return fields.some(field => !state[field].success) || isLoading;
  }, [state, isLoading]);

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

    fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify({
        name: state.username.value,
        to: state.email.value,
        message: state.request.value,
      }),
    }).then(data => {
      if (data.status === 200) {
        setShowMessage(true);
      }
    });
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

        {isLoading && showMessage ? <Typography>👋 Your request has been sent</Typography> : null}
      </Stack>
    </DialogBase>
  );
};

export default DialogCustomServices;

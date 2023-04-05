import { useState } from 'react';

import Stack from '@mui/material/Stack';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';

import ButtonClose from '../buttons/ButtonClose';
import Button from '../buttons/Button';

import { ButtonCloseContainer, PopperStyled, PopperText, PopperTitle } from './styled-components';

const CookiePopup = () => {
  const [open, setOpen] = useState(true);

  const closePopupHandle = () => {
    setOpen(false);
  };

  return (
    <PopperStyled open={open}>
      <ButtonCloseContainer>
        <ButtonClose sx={{ color: '#fff' }} onClick={closePopupHandle} />
      </ButtonCloseContainer>
      <PopperTitle variant="h5">
        <CookieOutlinedIcon />
        Cookie Use
      </PopperTitle>
      <PopperText>
        Varbintech uses cookies to allow us to better understand how to our site is used. By
        continuing to use this site, you consent to Terms of Service and Privacy Policy of
        Varbintech service.
      </PopperText>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="info">
          Accept all
        </Button>
        <Button variant="outlined" color="info" onClick={closePopupHandle}>
          Decline all
        </Button>
      </Stack>
    </PopperStyled>
  );
};

export default CookiePopup;

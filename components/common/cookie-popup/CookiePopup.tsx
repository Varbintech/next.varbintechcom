import { type FC, useState } from 'react';

import Stack from '@mui/material/Stack';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';

import type { EmptyFunction } from '../../../models';

import Button from '../buttons/Button';

import {
  ButtonCloseContainer,
  ButtonCloseStyled,
  PopperStyled,
  PopperText,
  PopperTitle,
} from './styled-components';

interface CookiePopupProps {
  onConfirm: EmptyFunction;
  anchorEl?: HTMLElement | null;
}

const CookiePopup: FC<CookiePopupProps> = ({ onConfirm, anchorEl }) => {
  const [open, setOpen] = useState(true);

  const closePopupHandle = () => {
    setOpen(false);
  };

  return (
    <PopperStyled open={open} anchorEl={anchorEl}>
      <ButtonCloseContainer>
        <ButtonCloseStyled onClick={closePopupHandle} />
      </ButtonCloseContainer>
      <PopperTitle variant="h5">
        <CookieOutlinedIcon />
        Cookie Use
      </PopperTitle>
      <PopperText>
        This site uses cookies from Google to deliver its services and to analyze traffic.
      </PopperText>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="info" onClick={onConfirm}>
          OK, got it
        </Button>

        <Button
          variant="outlined"
          color="info"
          href="https://policies.google.com/technologies/cookies"
          target="_blank"
          rel="noopener noreferrer"
        >
          More info
        </Button>
      </Stack>
    </PopperStyled>
  );
};

export default CookiePopup;

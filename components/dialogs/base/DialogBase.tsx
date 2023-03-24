import type { FC, ReactNode } from 'react';

import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import type { EmptyFunction, FunctionWithArg, JSXElement } from '../../../models/common';

import ButtonClose from '../../common/buttons/ButtonClose';
import ErrorMessage from '../../common/error-message/ErrorMessage';

import { DialogButtonCloseWrapper, StyledMuiDialog, DialogBaseTitle } from './styled-components';

type HeaderFooterFromContent = FunctionWithArg<ReactNode, JSXElement>;

interface DialogBaseProps {
  onClose: EmptyFunction;
  fullWidth?: boolean;
  error?: string;
  children?: ReactNode | JSXElement;
  footer?: ReactNode | JSXElement;
  header?: ReactNode | JSXElement;
}

const headerFromContent: HeaderFooterFromContent = (content: ReactNode) => (
  <DialogBaseTitle>{content}</DialogBaseTitle>
);

const footerFromContent: HeaderFooterFromContent = (content: ReactNode) => (
  <DialogActions>{content}</DialogActions>
);

const DialogBase: FC<DialogBaseProps> = props => {
  const { footer, header, onClose, error, children, fullWidth } = props;

  return (
    <StyledMuiDialog
      open
      onClose={onClose}
      PaperProps={
        fullWidth
          ? {
              sx: {
                width: '100%',
                maxWidth: 'none',
              },
            }
          : {}
      }
    >
      <DialogButtonCloseWrapper>
        <ButtonClose onClick={onClose} sx={{ marginRight: 0 }} />
      </DialogButtonCloseWrapper>

      {header && headerFromContent(header)}

      <DialogContent>
        {children}

        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      </DialogContent>

      {footerFromContent(footer)}
    </StyledMuiDialog>
  );
};

export default DialogBase;

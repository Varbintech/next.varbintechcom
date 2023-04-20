import type { FC, ReactNode } from 'react';

import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import type { EmptyFunction, FunctionWithArg, JSXElement } from '../../../models/common';

import ButtonClose from '../../common/buttons/ButtonClose';

import { DialogButtonCloseWrapper, StyledMuiDialog, DialogBaseTitle } from './styled-components';

type HeaderFooterFromContent = FunctionWithArg<ReactNode, JSXElement>;

interface DialogBaseProps {
  onClose: EmptyFunction;
  fullScreen?: boolean;
  fullWidth?: boolean;
  noPaddingContent?: boolean;
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
  const { footer, header, onClose, children, fullWidth, fullScreen, noPaddingContent } = props;

  return (
    <StyledMuiDialog
      open
      onClose={onClose}
      fullScreen={fullScreen || false}
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

      <DialogContent sx={noPaddingContent ? { padding: '0 !important' } : null}>
        {children}
      </DialogContent>

      {footerFromContent(footer)}
    </StyledMuiDialog>
  );
};

export default DialogBase;

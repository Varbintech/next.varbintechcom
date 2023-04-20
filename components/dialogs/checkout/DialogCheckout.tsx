import { useState } from 'react';

import type { EmptyFunction, JSXElement } from '../../../models/common';

import DialogBase from '../base/DialogBase';
import Loading from '../../common/loading/Loading';

import { StyledIFrame, IFrameContainer, IFrameLoadingContainer } from '../base/styled-components';

/**
 * Testing the checkout
 *
 * https://docs.lemonsqueezy.com/guides/developer-guide/testing-going-live#testing-the-checkout
 */

interface DialogCheckoutProps {
  onClose: EmptyFunction;
  checkoutSrc: string;
}

const header = (): JSXElement => <></>;

const footer = (): JSXElement => <></>;

const DialogCheckout = ({ onClose, checkoutSrc }: DialogCheckoutProps) => {
  const [iframeIsLoad, setIframeIsLoad] = useState(true);

  const handleOnLoad = () => {
    setIframeIsLoad(false);
  };

  return (
    <DialogBase
      fullScreen
      fullWidth
      noPaddingContent
      header={header()}
      footer={footer()}
      onClose={onClose}
    >
      <IFrameContainer>
        {iframeIsLoad ? (
          <IFrameLoadingContainer>
            <Loading fullWidth />
            <Loading fullWidth />
            <Loading fullWidth />
            <Loading fullWidth />
          </IFrameLoadingContainer>
        ) : null}

        <StyledIFrame src={checkoutSrc} title="Varbintech checkout" onLoad={handleOnLoad} />
      </IFrameContainer>
    </DialogBase>
  );
};

export default DialogCheckout;

import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';

import ButtonCopy from '../buttons/ButtonCopy';

import useClipboardCopy from '../../../hooks/use-clipboard-coly';

interface ButtonCopyHrefProps {
  href: string;
}

const ButtonCopyHref = ({ href }: ButtonCopyHrefProps) => {
  const { copy, isCopied } = useClipboardCopy();
  const router = useRouter();
  const [currentOrigin, setCurrentOrigin] = useState('');

  useEffect(() => {
    if (router.isReady) {
      const { origin } = new URL(router.asPath, window.location.href);
      const urlWithoutHash = `${origin}${router.asPath.split('#')[0]}`;

      setCurrentOrigin(urlWithoutHash);
    }
  }, [router]);

  const handleCopy = () => {
    copy(`${currentOrigin}${href}`);
  };

  return <ButtonCopy onClick={handleCopy} isCopied={isCopied} />;
};

export default ButtonCopyHref;

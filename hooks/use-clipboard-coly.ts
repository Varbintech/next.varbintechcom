import { useState, useRef, useEffect } from 'react';

import clipboardCopy from 'clipboard-copy';

const TIMEOUT_DURATION = 1200;

export default function useClipboardCopy() {
  const [isCopied, setIsCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(
    () => () => {
      clearTimeout(timeout.current);
    },
    [],
  );

  const copy = async (text: string) => {
    await clipboardCopy(text);

    setIsCopied(true);

    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setIsCopied(false);
    }, TIMEOUT_DURATION);
  };

  return { copy, isCopied };
}

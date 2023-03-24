import type { FC } from 'react';

import SvgIcon, { type SvgIconProps } from '@mui/material/SvgIcon';

const DTIcon: FC<SvgIconProps> = props => {
  return (
    <SvgIcon {...props} viewBox="0 0 64 64">
      <path
        d="M34.061 26.494c-.5-.2-1.1-.5-1.6-.7-.1-.1-.2-.1-.4-.2-.4-.2-.8-.4-1.2-.7-.1-.1-.3-.2-.4-.2l-1.5-.9c-.5-.3-.9-.7-1.4-1-.1-.1-.3-.2-.4-.3-.4-.3-.7-.6-1.1-.9-.1-.1-.2-.2-.3-.2-.4-.4-.9-.8-1.3-1.2l-.3-.3-1-1c-.1-.1-.2-.2-.3-.4-.4-.4-.8-.9-1.1-1.4l-.9-1.2c-.1-.1-.2-.3-.3-.4l-.6-.9c-.1-.2-.2-.3-.3-.5-.2-.3-.3-.5-.5-.8-.1-.2-.2-.4-.3-.5-.2-.3-.3-.5-.4-.8-.1-.2-.2-.4-.3-.5-.1-.3-.3-.6-.4-.9-.1-.2-.2-.3-.2-.5-.2-.3-.3-.7-.4-1 0-.1-.1-.3-.2-.4-.2-.5-.3-.9-.5-1.4-7 4.3-11.8 11.4-13.3 19.4l30.9-.2zm-17.9-4.9c-.7.8-1.8 1.2-2.9 1-1.6-.3-2.7-1.9-2.4-3.5.3-1.6 1.9-2.7 3.5-2.4 1.2.2 2.1 1.2 2.4 2.4.2.9 0 1.8-.6 2.5z"
        fill="#fff"
      />
      <path
        d="M60.9 24.6c-.4.3-.8.7-1.2 1-.1 0-.1.1-.2.1-.3.3-.7.5-1.1.8-.1.1-.3.2-.4.3l-.9.6c-.2.1-.3.2-.5.3-.3.2-.6.3-.9.5-.2.1-.3.2-.5.3-.3.2-.7.4-1 .5-.1.1-.2.1-.4.2-.5.2-.9.4-1.4.6H66c-.1-.7-.3-1.4-.5-2.1-.5-1.9-1.2-3.8-2.1-5.5l-.2.2-.7.7-.4.4c-.3.3-.5.5-.8.7l-.4.4z"
        fill="#4284f3"
        transform="translate(-5.039 -3.306)"
      />
      <path
        d="M24.2 9.9c.1.3.2.5.3.8.1.2.2.4.2.6.1.3.2.5.3.8.1.2.2.4.2.6.1.3.2.5.4.8.1.2.2.4.3.5.1.3.3.5.4.7.1.2.2.3.3.5.2.3.3.5.5.8.1.2.2.3.3.5.2.3.4.5.5.8.1.1.2.3.3.4l.9 1.2c.3.3.5.7.8 1l.3.3c.2.2.4.5.6.7l.3.3.6.6c.1.1.3.2.4.4.2.2.4.3.6.5.1.1.3.2.4.4.2.2.4.3.6.5.2.1.3.2.5.3.2.2.4.3.6.4.2.1.3.2.5.3.2.1.4.3.6.4.2.1.3.2.5.3.2.1.4.3.6.4.2.1.3.2.5.3l.6.3c.2.1.3.2.5.3l.6.3c.2.1.4.2.5.3l.6.3c.2.1.4.2.5.2l.6.3c.2.1.4.1.6.2.2.1.4.2.6.2.2.1.4.1.6.2.2.1.4.1.7.2.2.1.4.1.6.2.2.1.4.1.7.2.2 0 .4.1.6.1.2 0 .3.1.5.1s.4-.1.6-.1c.2 0 .3-.1.5-.1.3-.1.5-.1.8-.2.1 0 .3-.1.4-.1l.9-.3c.1 0 .2-.1.3-.1.4-.1.8-.3 1.2-.4l.2-.1c.3-.1.6-.2.9-.4.1-.1.3-.1.4-.2.2-.1.5-.2.7-.3.2-.1.3-.2.4-.2.2-.1.4-.2.7-.3.2-.1.3-.2.5-.3.2-.1.4-.2.6-.4.2-.1.3-.2.5-.3.2-.1.4-.2.6-.4.2-.1.3-.2.5-.3.2-.1.4-.3.6-.4.2-.1.3-.2.5-.3.2-.1.4-.3.5-.4.1-.1.3-.2.4-.3.2-.1.3-.3.5-.4.1-.1.3-.2.4-.4l.5-.5.4-.4.5-.5.4-.4.5-.5c.1-.1.2-.3.4-.4l.1-.1C56 10.3 45.2 5 34 6.1c-3.5.4-7 1.4-10.1 3 0 .1.1.2.1.2 0 .2.1.4.2.6z"
        fill="#f5a623"
        transform="translate(-5.039 -3.306)"
      />
      <path
        d="M14.361 16.694c-1.6-.3-3.2.8-3.5 2.5-.3 1.6.8 3.2 2.5 3.4 1 .2 2.1-.2 2.8-1 .6-.7.8-1.6.7-2.5-.3-1.2-1.3-2.2-2.5-2.4z"
        fill="#333"
      />
      <path
        d="M56.061 51.094c-2.4-9.8-9.3-17.9-18.5-21.8h26.4l-.2-1.6c-.5-3.9-1.7-7.6-3.6-11l-.5-.8-1-1.7c-6-8.9-16-14.3-26.7-14.3-1.1 0-2.2.1-3.4.2-3.7.4-7.2 1.4-10.6 3l-1.5.8-.9.5c-7.9 4.8-13.5 12.9-15.1 22.2l-.2 1.1-.2 1.5c0 1-.1 1.9-.1 2.8 0 17.7 14.3 32 32 32 8.9 0 17.5-3.7 23.6-10.3.1-.2.3-.3.4-.4l.4-.5-.2-1.1-.1-.6zm1.3-31.2.7-.7.2-.2c.9 1.8 1.6 3.6 2.1 5.5.2.7.3 1.4.5 2.1h-13.3c.5-.2.9-.4 1.4-.6.1-.1.2-.1.4-.2.3-.2.7-.3 1-.5.2-.1.3-.2.5-.3.3-.2.6-.3.9-.5.2-.1.3-.2.5-.3l.9-.6c.1-.1.3-.2.4-.3.4-.3.7-.5 1.1-.8.1 0 .1-.1.2-.1.4-.3.8-.6 1.2-1l.3-.3c.3-.2.5-.5.8-.7 0-.3.1-.4.2-.5zm-38.5-14.1c3.2-1.6 6.6-2.6 10.1-3 11.2-1.1 22 4.2 28 13.7l-.1.1c-.1.1-.2.3-.4.4l-.5.5-.4.4-.5.5-.4.4-.5.5c-.1.1-.3.2-.4.4-.2.1-.3.3-.5.4-.1.1-.3.2-.4.3-.2.1-.4.3-.5.4-.2.1-.3.2-.5.3-.2.1-.4.3-.6.4-.2.1-.3.2-.5.3-.2.1-.4.2-.6.4-.2.1-.3.2-.5.3-.2.1-.4.2-.6.4-.2.1-.3.2-.5.3-.2.1-.4.2-.7.3-.2.1-.3.2-.4.2-.2.1-.5.2-.7.3-.1.1-.3.1-.4.2-.3.1-.6.3-.9.4l-.2.1c-.4.1-.8.3-1.2.4-.1 0-.2.1-.3.1l-.9.3c-.1 0-.3.1-.4.1-.3.1-.5.1-.8.2-.2 0-.3.1-.5.1s-.4.1-.6.1c-.2 0-.3-.1-.5-.1s-.4-.1-.6-.1c-.2-.1-.4-.1-.7-.2-.2-.1-.4-.1-.6-.2-.2-.1-.4-.1-.7-.2-.2-.1-.4-.1-.6-.2-.2-.1-.4-.2-.6-.2-.2-.1-.4-.1-.6-.2l-.6-.3c-.2-.1-.4-.2-.5-.2l-.6-.3c-.2-.1-.4-.2-.5-.3l-.6-.3c-.2-.1-.3-.2-.5-.3l-.6-.3c-.2-.1-.3-.2-.5-.3-.2-.1-.4-.2-.6-.4-.2-.1-.3-.2-.5-.3-.2-.1-.4-.3-.6-.4-.2-.1-.3-.2-.5-.3-.2-.1-.4-.3-.6-.4-.2-.1-.3-.2-.5-.3-.2-.2-.4-.3-.6-.5-.1-.1-.3-.2-.4-.4-.2-.2-.4-.3-.6-.5-.1-.1-.3-.2-.4-.4l-.6-.6-.3-.3c-.2-.2-.4-.5-.6-.7l-.3-.3c-.3-.3-.6-.7-.8-1l-.9-1.2c-.1-.1-.2-.3-.3-.4-.2-.3-.4-.5-.5-.8-.1-.2-.2-.3-.3-.5-.2-.3-.3-.5-.5-.8-.1-.2-.2-.3-.3-.5-.1-.2-.3-.5-.4-.7-.1-.2-.2-.4-.3-.5-.1-.2-.2-.5-.4-.8.6-.2.5-.4.5-.6-.1-.3-.2-.5-.3-.8-.1-.2-.2-.4-.2-.6-.1-.3-.2-.5-.3-.8-.1-.2-.1-.4-.2-.6-.1 0-.1 0-.1-.1zm-15.7 20.8c1.5-8.1 6.4-15.1 13.3-19.4.2.5.3.9.5 1.4 0 .1.1.3.2.4.1.3.3.7.4 1 .1.2.2.3.2.5.1.3.3.6.4.9.1.2.2.4.3.5.1.3.3.6.4.8.1.2.2.4.3.5.2.3.3.5.5.8.1.2.2.3.3.5l.6.9c.1.1.2.3.3.4l.9 1.2c.4.5.8.9 1.1 1.4.1.1.2.2.3.4.3.3.6.7 1 1l.3.3c.4.4.8.8 1.3 1.2.1.1.2.2.3.2.4.3.7.6 1.1.9.1.1.3.2.4.3.5.3.9.7 1.4 1l1.5.9c.1.1.3.2.4.2.4.2.8.5 1.2.7.1.1.2.1.4.2.5.3 1 .5 1.6.7h.1l-31 .2zm49.6 24.4h-.5c-.3 0-.5-.1-.8-.1-.2 0-.3 0-.5-.1-.3 0-.6-.1-1-.2h-.3c-.4-.1-.8-.2-1.2-.2-.1 0-.2 0-.3-.1-.3-.1-.6-.1-.9-.2-.1 0-.3-.1-.4-.1-.2-.1-.5-.1-.7-.2-.2 0-.3-.1-.5-.2s-.5-.2-.7-.2c-.2-.1-.3-.1-.5-.2s-.4-.2-.7-.3c-.2-.1-.3-.1-.5-.2l-.6-.3c-.2-.1-.3-.1-.5-.2l-.6-.3c-.2-.1-.3-.2-.5-.2l-.6-.3c-.2-.1-.3-.2-.4-.2-.2-.1-.4-.2-.6-.4-.1-.1-.3-.2-.4-.3-.2-.1-.4-.3-.6-.4-.1-.1-.2-.2-.4-.2-.2-.2-.5-.3-.7-.5-.1-.1-.2-.1-.3-.2-.3-.2-.6-.5-.9-.7l-.1-.1c-.3-.2-.5-.4-.8-.7l-.3-.3c-.2-.2-.4-.3-.6-.5-.1-.1-.2-.2-.4-.3l-.5-.5c-.1-.1-.2-.3-.4-.4l-.5-.5c-.1-.1-.2-.3-.4-.4-.1-.2-.3-.3-.4-.5-.1-.1-.2-.3-.3-.4-.1-.2-.3-.3-.4-.5-.1-.2-.2-.3-.3-.4-.1-.2-.2-.3-.4-.5-.1-.2-.2-.3-.3-.5-.1-.2-.2-.4-.4-.5-.1-.2-.2-.3-.3-.5l-.3-.6c-.1-.2-.2-.3-.3-.5l-.3-.6c-.1-.2-.2-.3-.2-.5-.1-.2-.2-.5-.4-.7-.1-.1-.1-.2-.2-.4-.2-.4-.3-.7-.5-1.1-.1-.2-.1-.3-.2-.5s-.2-.5-.3-.7c-.1-.2-.1-.3-.2-.5s-.2-.4-.2-.7c-.1-.2-.1-.4-.2-.5 0-.2-.1-.3-.1-.5 12.7.7 23.4 9.5 26.7 21.7.5.1.3.1.1.1z"
        fill="#333"
      />
      <path
        d="M26.561 29.294c0 .2.1.3.1.5.1.2.1.4.2.5.1.2.1.4.2.7.1.2.1.3.2.5s.2.5.3.7c.1.2.1.3.2.5.1.4.3.7.5 1.1.1.1.1.2.2.4s.2.5.4.7c.1.2.2.3.2.5l.3.6c.1.2.2.3.3.5l.3.6c.1.2.2.3.3.5.1.2.2.4.4.5.1.2.2.3.3.5.1.2.2.4.4.5.1.2.2.3.3.4.1.2.3.3.4.5.1.2.2.3.3.4.1.2.3.3.4.5.1.1.2.3.4.4l.5.5c.1.1.2.3.4.4l.5.5c.1.1.2.2.4.3.2.2.4.3.6.5l.3.3c.3.2.5.4.8.7l.1.1c.3.2.6.5.9.7.1.1.2.1.3.2.2.2.5.3.7.5.1.1.2.2.4.2.2.1.4.3.6.4.1.1.3.2.4.3.2.1.4.2.6.4.2.1.3.2.4.2l.6.3c.2.1.3.2.5.2l.6.3c.2.1.3.1.5.2l.6.3c.2.1.3.1.5.2s.4.2.7.3c.2.1.3.1.5.2s.5.2.7.2c.2 0 .3.1.5.2s.5.2.7.2c.1 0 .3.1.4.1.3.1.6.2.9.2.1 0 .2.1.3.1.4.1.8.2 1.2.2h.3c.3.1.6.1 1 .2.2 0 .3 0 .5.1.3 0 .5.1.8.1h1c-3.9-12.3-14.6-21.1-27.3-21.8z"
        fill="#fff"
      />
    </SvgIcon>
  );
};

export default DTIcon;

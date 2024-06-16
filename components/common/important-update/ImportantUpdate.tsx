import type { MouseEventHandler } from 'react';

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import UpdateLabel from '../update-label/UpdateLabel';

interface ImportantUpdateProps {
  text: string;
  linkText: string;
  linkUrl: string;
  labelText?: string;
  id?: string;
  onGa?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

const ImportantUpdate = (props: ImportantUpdateProps) => {
  const { text, linkText, linkUrl, labelText = 'Update', id = '', onGa } = props;

  const linkId = id ? { id: `update-${id}` } : {};
  const onClick = onGa ? { onClick: onGa } : {};

  return (
    <Typography align="center" sx={{ marginBottom: { xs: 3.5, md: 2 } }}>
      <UpdateLabel className="gradient-border">{labelText}</UpdateLabel>
      {text}
      {linkUrl ? (
        <Link href={linkUrl} variant="caption" {...linkId} {...onClick}>
          {linkText}
        </Link>
      ) : null}
    </Typography>
  );
};

export default ImportantUpdate;

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import UpdateLabel from '../update-label/UpdateLabel';

interface ImportantUpdateProps {
  text: string;
  linkText: string;
  linkUrl: string;
  labelText?: string;
}

const ImportantUpdate = (props: ImportantUpdateProps) => {
  const { text, linkText, linkUrl, labelText = 'Update' } = props;

  return (
    <Typography align="center" sx={{ marginBottom: { xs: 3.5, md: 2 } }}>
      <UpdateLabel className="gradient-border">{labelText}</UpdateLabel>
      {text}
      <Link href={linkUrl} variant="caption">
        {linkText}
      </Link>
    </Typography>
  );
};

export default ImportantUpdate;

import type { FC } from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface ServiceItemProps {
  icon: JSX.Element;
  title: string;
  text: string;
}

const ServiceItem: FC<ServiceItemProps> = props => {
  const { icon, title, text } = props;

  return (
    <Paper>
      {icon}
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body2">{text}</Typography>
    </Paper>
  );
};

export default ServiceItem;

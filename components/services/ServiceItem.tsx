import type { FC } from 'react';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import Link from '../../components/common/link/Link';

import { ServiceItemContainer } from './styled-components';

interface ServiceItemProps {
  icon: JSX.Element;
  link: string;
  title: string;
  text: string;
}

const ServiceItem: FC<ServiceItemProps> = props => {
  const { icon, link, title, text } = props;

  return (
    <Link href={link}>
      <ServiceItemContainer>
        <Stack margin={1.5} alignItems="center">
          {icon}
        </Stack>
        <Typography variant="h5" marginBottom={1}>{title}</Typography>
        <Typography variant="body2">{text}</Typography>
      </ServiceItemContainer>
    </Link>
  );
};

export default ServiceItem;

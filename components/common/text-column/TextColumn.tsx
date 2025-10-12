import type { HTMLAttributes, ReactNode } from 'react';

import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckIcon from '@mui/icons-material/Check';
import ListItemText from '@mui/material/ListItemText';

import { ListStyled } from './styled-components';

export const TextColumnListStyled = ({
  children,
  ...restProps
}: HTMLAttributes<HTMLUListElement>) => <ListStyled {...restProps}>{children}</ListStyled>;

export const TextColumnListItem = ({ children, ...restProps }: HTMLAttributes<HTMLLIElement>) => (
  <ListItem {...restProps}>
    <ListItemIcon>
      <CheckIcon />
    </ListItemIcon>

    <ListItemText primary={children}>{children}</ListItemText>
  </ListItem>
);

export const TextColumnList = (props: { items: Array<string> }) => {
  return (
    <ListStyled>
      {props.items.map((item, index) => {
        return (
          <ListItem key={index}>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>

            <ListItemText primary={item} />
          </ListItem>
        );
      })}
    </ListStyled>
  );
};

export const TextColumnContainer = ({ children }: { children: ReactNode }) => (
  <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ marginBottom: 3 }}>
    {children}
  </Stack>
);

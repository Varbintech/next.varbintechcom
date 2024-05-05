import type { FC, HTMLAttributes, ReactNode } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckIcon from '@mui/icons-material/Check';
import ListItemText from '@mui/material/ListItemText';

import type { ProjectTextDetails } from '../../../models';

import { ListStyled } from './styled-components';

export interface TextColumnProps {
  data: ProjectTextDetails;
}

interface TextColumnWithSideTitleProps extends TextColumnProps {
  titlePosition: 'left' | 'right';
}

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

const TextColumn: FC<TextColumnProps> = ({ data }) => {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ marginBottom: 3 }}>
      <Stack direction="column">
        {data.title ? (
          <Typography
            variant="h3"
            marginBottom={2}
            id={data.href}
            style={{ scrollMarginTop: '112px' }}
          >
            {data.title}
          </Typography>
        ) : null}

        {data.textSection.map((item, index) => {
          return (
            <Box key={index} marginBottom={4}>
              {item.subTitle ? (
                <Typography variant="h3" marginBottom={2}>
                  {item.subTitle}
                </Typography>
              ) : null}
              {item.text ? <Typography variant="body2">{item.text}</Typography> : null}
              {item.textList ? <TextColumnList items={item.textList} /> : null}
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export const TextColumnWithSideTitle = ({ data, titlePosition }: TextColumnWithSideTitleProps) => {
  return (
    <Stack
      direction={{ xs: 'column', md: titlePosition === 'left' ? 'row' : 'row-reverse' }}
      spacing={3}
      sx={{ marginBottom: 3 }}
    >
      {data.name ? (
        <Box
          sx={{ minWidth: { md: '25%' } }}
          textAlign={titlePosition === 'left' ? 'left' : 'right'}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
            {data.name}
          </Typography>
        </Box>
      ) : null}

      <Stack direction="column">
        {data.title ? (
          <Typography
            variant="h3"
            marginBottom={2}
            id={data.href}
            style={{ scrollMarginTop: '112px' }}
          >
            {data.title}
          </Typography>
        ) : null}

        {data.textSection.map((item, index) => {
          return (
            <Box key={index} marginBottom={4}>
              {item.subTitle ? (
                <Typography variant="h3" marginBottom={2}>
                  {item.subTitle}
                </Typography>
              ) : null}
              {item.text ? <Typography variant="body2">{item.text}</Typography> : null}
              {item.textList ? <TextColumnList items={item.textList} /> : null}
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default TextColumn;

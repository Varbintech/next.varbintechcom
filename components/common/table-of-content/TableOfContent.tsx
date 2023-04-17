import type { FC } from 'react';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import type { ProjectImage, ProjectImageDetails, ProjectTextDetails, SocialIcon } from 'models';

import ImageWrapperComponent from '../image-wrapper/ImageWrapper';
import SocialIcons from '../social-icons/SocialIcons';
import Link from '../link/Link';

import { TableOfContentContainer } from './styled-components';

interface TableOfContentProps {
  image: ProjectImage;
  data: Array<ProjectTextDetails | ProjectImageDetails>;
  socialIcons: Array<SocialIcon>;
}

const TableOfContent: FC<TableOfContentProps> = props => {
  const { image, socialIcons, data } = props;

  const linkList = data
    .map(item => {
      if (item.label === 'TEXT' && item.href && item.title) {
        return {
          href: item.href,
          title: item.title,
        };
      }

      return;
    })
    .filter(Boolean);

  return (
    <TableOfContentContainer>
      <Box marginBottom="35px">
        <ImageWrapperComponent data={image} smallSize />
      </Box>
      <Typography variant="h5" marginBottom={1.75}>
        Table of Contents
      </Typography>
      <Stack spacing={2} marginBottom="52px">
        {linkList.length
          ? linkList.map((item, index) => {
              return (
                <Link key={index} href={`#${item?.href}`} underline="hover">
                  {item?.title}
                </Link>
              );
            })
          : null}
      </Stack>
      <SocialIcons data={socialIcons} />
    </TableOfContentContainer>
  );
};

export default TableOfContent;

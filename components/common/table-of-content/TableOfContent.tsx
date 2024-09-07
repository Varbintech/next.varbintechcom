import { type FC, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

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
  id: number;
}

const TocLink = ({ href, title, id }: { href: string; title: string; id: number }) => {
  const { asPath, isReady } = useRouter();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    if (isReady) {
      setActiveLink(asPath);
    }
  }, [asPath, isReady, activeLink]);

  return (
    <Link href={`#${href}`} underline={activeLink === `/blog/${id}#${href}` ? 'always' : 'hover'}>
      {title}
    </Link>
  );
};

const TableOfContent: FC<TableOfContentProps> = props => {
  const { image, socialIcons, data, id } = props;

  const linkList = data
    .map((item, itemIndex) => {
      if (item.label === 'TEXT' && item.href && item.title) {
        return {
          id: itemIndex,
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
                <TocLink key={index} href={`${item?.href}`} title={`${item?.title}`} id={id} />
              );
            })
          : null}
      </Stack>
      <SocialIcons data={socialIcons} />
    </TableOfContentContainer>
  );
};

export default TableOfContent;

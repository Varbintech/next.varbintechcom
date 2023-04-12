import type { FC } from 'react';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import type { ProjectImage, ProjectImageDetails, ProjectTextDetails, SocialIcon } from 'models';

import SocialIcons from '../social-icons/SocialIcons';
import Link from '../link/Link';

import { TableOfContentContainer, ImageContainer } from './styled-components';

interface TableOfContentProps {
  image: ProjectImage;
  data: Array<ProjectTextDetails | ProjectImageDetails>;
  socialIcons: Array<SocialIcon>;
}

const TableOfContent: FC<TableOfContentProps> = props => {
  const { image, socialIcons, data } = props;

  const linkList = data.map(item => {
    if (item.label === 'TEXT' && item.href && item.href.length > 0) {
      return {
        href: item.href,
        title: item.title || '',
      };
    }

    return;
  });

  return (
    <TableOfContentContainer>
      <ImageContainer>
        <span className="inner-wrapper">
          {/* eslint-disable @next/next/no-img-element */}
          <img
            loading="lazy"
            src={image.src}
            alt={image.name}
            width={image.width}
            height={image.height}
          />
        </span>
      </ImageContainer>
      <Typography variant="h5" marginBottom={1.75}>
        Table of Contents
      </Typography>
      <Stack spacing={2} marginBottom="52px">
        {linkList &&
          linkList.map((item, index) => {
            if (item && item.title) {
              return (
                <Link key={index} href={`#${item.href}`} underline="hover">
                  <>{item.title}</>
                </Link>
              );
            }

            return null;
          })}
      </Stack>
      <SocialIcons data={socialIcons} />
    </TableOfContentContainer>
  );
};

export default TableOfContent;
